import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN ?? '';
const APP_SECRET = process.env.WHATSAPP_APP_SECRET ?? '';

// GET — Meta sends this once to verify the webhook URL
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}

// POST — inbound messages and delivery status callbacks
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-hub-signature-256') ?? '';

  // Validate HMAC-SHA256 signature when app secret is configured
  if (APP_SECRET) {
    const expected =
      'sha256=' + crypto.createHmac('sha256', APP_SECRET).update(rawBody).digest('hex');
    const sigBuf = Buffer.from(signature.padEnd(expected.length));
    const expBuf = Buffer.from(expected);
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
    }
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  processWebhookEvent(payload);

  // Always 200 quickly so Meta doesn't retry
  return NextResponse.json({ ok: true });
}

type WaEntry = {
  changes?: Array<{
    value?: {
      messages?: unknown[];
      statuses?: unknown[];
    };
  }>;
};

function processWebhookEvent(payload: unknown) {
  const data = payload as { object?: string; entry?: WaEntry[] };
  if (data.object !== 'whatsapp_business_account') return;

  for (const entry of data.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const msg of change.value?.messages ?? []) {
        console.log('[WhatsApp] Inbound message:', JSON.stringify(msg));
      }
      for (const status of change.value?.statuses ?? []) {
        console.log('[WhatsApp] Status update:', JSON.stringify(status));
      }
    }
  }
}
