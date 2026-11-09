import nodemailer from 'nodemailer';

export type SubmissionKind = 'enquiry' | 'newsletter';

export type WebsiteSubmission = {
  kind: SubmissionKind;
  name?: string;
  email: string;
  phone?: string;
  tripType?: string;
  dates?: string;
  guests?: string;
  message?: string;
};

const MAX_FIELD_LENGTH = 2_000;

function text(value: unknown, maxLength = MAX_FIELD_LENGTH): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, maxLength);
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseWebsiteSubmission(body: unknown): WebsiteSubmission | null {
  if (!body || typeof body !== 'object') return null;
  const values = body as Record<string, unknown>;
  const kind = values.kind === 'newsletter' ? 'newsletter' : values.kind === 'enquiry' ? 'enquiry' : null;
  const email = text(values.email, 254);
  const name = text(values.name, 160);

  if (!kind || !validEmail(email)) return null;
  if (kind === 'enquiry' && !name) return null;

  return {
    kind,
    name,
    email,
    phone: text(values.phone, 80),
    tripType: text(values.tripType, 120),
    dates: text(values.dates, 120),
    guests: text(values.guests, 80),
    message: text(values.message),
  };
}

function configuredTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const port = Number.parseInt(process.env.SMTP_PORT ?? '', 10);

  if (!host || !user || !password || !Number.isFinite(port)) {
    throw new Error('cPanel email is not configured');
  }

  return {
    transport: nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass: password },
    }),
    from: `${process.env.MAIL_FROM_NAME || 'African Genuine Tours & Safaris'} <${user}>`,
    to: process.env.MAIL_TO || user,
  };
}

function messageFor(submission: WebsiteSubmission): { subject: string; text: string } {
  if (submission.kind === 'newsletter') {
    return {
      subject: `Newsletter request — ${submission.email}`,
      text: [
        'New newsletter request from the website.',
        `Name: ${submission.name || 'Not provided'}`,
        `Email: ${submission.email}`,
      ].join('\n'),
    };
  }

  return {
    subject: `New safari enquiry — ${submission.name}`,
    text: [
      'New website enquiry',
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      submission.phone ? `Phone / WhatsApp: ${submission.phone}` : null,
      submission.tripType ? `Trip type: ${submission.tripType}` : null,
      submission.dates ? `Travel dates: ${submission.dates}` : null,
      submission.guests ? `Guests: ${submission.guests}` : null,
      submission.message ? `Message:\n${submission.message}` : null,
    ].filter(Boolean).join('\n\n'),
  };
}

export async function sendWebsiteSubmission(submission: WebsiteSubmission) {
  const { transport, from, to } = configuredTransport();
  const message = messageFor(submission);

  await transport.sendMail({
    from,
    to,
    replyTo: submission.email,
    subject: message.subject,
    text: message.text,
  });
}
