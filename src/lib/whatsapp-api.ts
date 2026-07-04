// Server-only — never import this in client components or config files
const TOKEN = process.env.WHATSAPP_CLOUD_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const API_BASE = 'https://graph.facebook.com/v20.0';

interface SendTextParams {
  to: string;
  text: string;
}

export async function sendWhatsAppText({ to, text }: SendTextParams): Promise<unknown> {
  if (!TOKEN || !PHONE_NUMBER_ID) {
    console.warn('[WhatsApp] Cloud API not configured — skipping send');
    return null;
  }

  const res = await fetch(`${API_BASE}/${PHONE_NUMBER_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'text',
      text: { body: text, preview_url: false },
    }),
    // Next.js: don't cache outbound API calls
    cache: 'no-store',
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('[WhatsApp] Send failed:', err);
    throw new Error(`WhatsApp API ${res.status}`);
  }

  return res.json();
}
