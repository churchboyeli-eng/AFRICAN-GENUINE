'use client';

import { FormEvent, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind: 'newsletter', email }),
    }).catch(() => null);

    setStatus(response?.ok ? 'sent' : 'error');
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
        aria-label="Newsletter signup"
      >
        <label htmlFor="footer-email" className="sr-only">Your email address</label>
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          className="flex-1 rounded-pill border border-line bg-white/5 px-4 py-3.5 md:py-2.5 font-body text-[13px] text-cream placeholder:text-ov-faint focus:outline-none focus:border-gold/60"
          aria-label="Email address for newsletter"
        />
        <button type="submit" disabled={status === 'sending'} className="rounded-pill bg-[#e0a83f] px-5 py-3.5 md:py-2.5 font-body text-[12px] font-bold text-[#150f08] transition hover:bg-[#d19c35] disabled:opacity-60 shrink-0">
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Join'}
        </button>
      </form>
      <p className="mt-2 text-[11px] text-ov-faint" role="status">
        {status === 'sent' ? 'Your request was sent.' : status === 'error' ? 'We could not send your request. Please try again.' : ''}
      </p>
    </div>
  );
}
