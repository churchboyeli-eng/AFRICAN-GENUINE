import { NextRequest, NextResponse } from 'next/server';
import { sendWhatsAppText } from '@/lib/whatsapp-api';

// Simple in-memory rate limiter — resets on cold start.
// Defense-in-depth only: the real safeguard is that `to` is never
// client-controlled (see below), so this endpoint cannot be used as
// an open relay regardless of rate-limit bypass.
const callLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

const MAX_TEXT_LENGTH = 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const calls = (callLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (calls.length >= MAX_PER_WINDOW) return true;
  callLog.set(ip, [...calls, now]);
  return false;
}

// Strip control characters (except newline/tab) that have no place in a chat message
function sanitizeText(raw: string): string {
  return raw.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
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

  const rawText = typeof body.text === 'string' ? body.text.trim() : '';
  if (!rawText) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 });
  }
  if (rawText.length > MAX_TEXT_LENGTH) {
    return NextResponse.json({ error: 'text is too long' }, { status: 400 });
  }
  const text = sanitizeText(rawText);

  // Recipient is always the server-configured team number — never client input.
  // (This endpoint must never become an open relay to arbitrary numbers.)
  const to = process.env.WHATSAPP_TEAM_NUMBER ?? '';
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
