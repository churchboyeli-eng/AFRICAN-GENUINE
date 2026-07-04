'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="py-20 border-t border-line bg-ink-deep" aria-label="Newsletter signup">
      <div className="shell">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4">Stay connected</p>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold tracking-tighter text-cream mb-4">
            Field notes from Tanzania, straight to your inbox.
          </h2>
          <p className="text-sand text-[14px] leading-relaxed mb-10 max-w-md mx-auto">
            Migration updates, packing lists, new itineraries, and honest travel reflections from our guides — sent a few times a year.
          </p>

          {submitted ? (
            <p className="font-display text-[22px] font-bold tracking-tighter text-gold">
              Welcome to the family. ✦
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Newsletter subscription form"
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="flex-1 rounded-pill border border-line bg-ink px-5 py-4 font-body text-[14px] text-cream placeholder:text-clay focus:outline-none focus:border-gold/60 transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="flex-1 rounded-pill border border-line bg-ink px-5 py-4 font-body text-[14px] text-cream placeholder:text-clay focus:outline-none focus:border-gold/60 transition-colors"
              />
              <button
                type="submit"
                className="btn-gold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
