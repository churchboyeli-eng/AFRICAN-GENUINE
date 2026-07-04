// Client-safe config — only NEXT_PUBLIC_ vars here
export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
export const WA_DEFAULT_MSG =
  process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MSG ??
  "Hi African Genuine Tours & Safaris, I'd like to enquire about a Tanzania safari.";

export function waUrl(message?: string): string {
  const msg = message ?? WA_DEFAULT_MSG;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
