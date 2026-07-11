import FadeUp from '@/components/FadeUp';

export default function PlanCTA() {
  return (
    <section className="py-36 text-center bg-ovl-bg" aria-label="Plan your safari">
      <div className="shell">
        <FadeUp>
          <div className="gold-rule w-16 mx-auto mb-8" />
          <p className="eyebrow mb-5 tracking-wider2">Ready to travel?</p>
          <h2 className="font-display text-[clamp(34px,5.5vw,72px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight max-w-2xl mx-auto mb-6">
            Let&rsquo;s design<br />your Tanzania.
          </h2>
          <p className="text-[#5c5750] text-[16px] leading-relaxed max-w-lg mx-auto mb-12">
            Tell us when you want to travel, what moves you, and how long you have. We&rsquo;ll come back within one working day with a personalised proposal — no obligation, no rush.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
              Plan my safari
            </a>
            <a href="/itineraries" className="btn-ghost inline-flex items-center justify-center gap-2">
              Browse itineraries
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
