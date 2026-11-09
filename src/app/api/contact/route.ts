import { NextRequest, NextResponse } from 'next/server';
import { parseWebsiteSubmission, sendWebsiteSubmission } from '@/lib/mailer';

export const runtime = 'nodejs';

const attempts = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_ATTEMPTS) return true;
  attempts.set(ip, [...recent, now]);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Please wait a moment before trying again.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
  }

  const submission = parseWebsiteSubmission(body);
  if (!submission) {
    return NextResponse.json({ error: 'Please check the required fields and try again.' }, { status: 400 });
  }

  try {
    await sendWebsiteSubmission(submission);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Website email delivery failed', error);
    return NextResponse.json({ error: 'We could not send your message. Please try again or contact us on WhatsApp.' }, { status: 500 });
  }
}
