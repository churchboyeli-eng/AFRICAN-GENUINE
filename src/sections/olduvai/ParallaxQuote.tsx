'use client';

import { useRef, useCallback, useEffect } from 'react';
import { useScrollRaf } from '@/hooks/useScrollRaf';

export default function ParallaxQuote() {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handleScroll = useCallback((scrollY: number) => {
    if (reduced.current || !imgRef.current) return;
    const el = imgRef.current.parentElement!;
    const rect = el.getBoundingClientRect();
    const progress = -rect.top / (rect.height + window.innerHeight);
    const shift = progress * 80; // px drift range
    imgRef.current.style.transform = `translateY(${shift}px)`;
  }, []);

  useScrollRaf(handleScroll);

  return (
    <section
      className="relative h-[480px] overflow-hidden"
      aria-label="Testimonial"
    >
      {/* Background image (parallax) */}
      <div
        ref={imgRef}
        className="absolute inset-0 scale-[1.18] bg-ov-deep"
        style={{
          backgroundImage: 'url(/img/dest/serengeti.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(21,15,8,0.7)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-14 gap-8">
        <blockquote className="max-w-2xl">
          <p className="font-cormorant text-[clamp(26px,3.5vw,40px)] font-light italic leading-[1.35] text-ov-ivory/90">
            &ldquo;We came for the migration. We stayed for the silence, the guides, the feeling that Tanzania was revealing herself just to us.&rdquo;
          </p>
          <footer className="mt-6 font-jost text-[11px] uppercase tracking-[.28em] text-ov-brass">
            — Sarah &amp; Tom, [PLACEHOLDER NAME] · July 2025
          </footer>
        </blockquote>

        {/* Video chip */}
        <a
          href="#film"
          className="inline-flex items-center gap-3 border border-ov-brass/40 px-6 py-3 text-ov-muted hover:border-ov-brass hover:text-ov-ivory transition-all duration-300 group"
          aria-label="Watch their story (placeholder)"
        >
          <span className="text-ov-brass group-hover:text-ov-ivory transition-colors duration-300">▶</span>
          <span className="font-jost text-[11px] uppercase tracking-[.2em]">Watch their story · 0:47</span>
        </a>
      </div>
    </section>
  );
}
