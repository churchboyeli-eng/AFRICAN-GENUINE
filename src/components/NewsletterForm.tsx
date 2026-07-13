'use client';

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Your email address</label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 rounded-pill border border-line bg-white/5 px-4 py-3.5 md:py-2.5 font-body text-[13px] text-cream placeholder:text-clay focus:outline-none focus:border-gold/60"
        aria-label="Email address for newsletter"
      />
      <button type="submit" className="rounded-pill bg-[#e0a83f] px-5 py-3.5 md:py-2.5 font-body text-[12px] font-bold text-[#150f08] transition hover:bg-[#d19c35] shrink-0">
        Join
      </button>
    </form>
  );
}
