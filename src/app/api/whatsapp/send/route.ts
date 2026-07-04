import { NextRequest, NextResponse } from 'next/server';
import { sendWhatsAppText } from '@/lib/whatsapp-api';

// Simple in-memory rate limiter — resets on cold start
const callLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const calls = (callLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (calls.length >= MAX_PER_WINDOW) return true;
  callLog.set(ip, [...calls, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const text = typeof body.text === 'string' ? body.text.trim() : '';
  if (!text) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 });
  }

  // `to` defaults to the server-configured team number
  const to =
    typeof body.to === 'string' && body.to.trim()
      ? body.to.trim()
      : (process.env.WHATSAPP_TEAM_NUMBER ?? '');

  if (!to) {
    return NextResponse.json({ error: 'No recipient configured' }, { status: 500 });
  }

  try {
    const result = await sendWhatsAppText({ to, text });
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
