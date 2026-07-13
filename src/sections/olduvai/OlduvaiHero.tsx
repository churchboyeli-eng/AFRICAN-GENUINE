'use client';

import { useEffect, useRef } from 'react';

export default function OlduvaiHero() {
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  return (
    <section
      className="relative flex min-h-[720px] items-center justify-center overflow-hidden -mt-[1px]"
      style={{ paddingTop: 140 }}
      aria-label="Hero"
    >
      {/* ── Ken-burns fallback image ── */}
      <div
        className="absolute inset-0 bg-ov-bg"
        style={{
          backgroundImage: 'url(/img/hero/hero-main.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'ov-kb 26s ease-out infinite alternate',
        }}
      />

      {/* ── Video layer (muted, autoplay, no controls) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/img/hero/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(to bottom, rgba(21,15,8,0.52) 0%, transparent 30%, transparent 60%, rgba(21,15,8,0.7) 100%)',
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(21,15,8,0.55) 100%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-14 max-w-4xl mx-auto">
        <p
          className="font-jost text-[10px] uppercase tracking-[.44em] text-ov-brass mb-10"
          style={{ animation: 'ov-rise 1s cubic-bezier(.19,.7,.2,1) .15s both' }}
        >
          Tailor-made · Est. 2009
        </p>

        <h1
          className="font-cormorant font-light text-[clamp(56px,8vw,96px)] leading-[1.0] tracking-[-0.02em] text-ov-ivory mb-7"
          style={{ animation: 'ov-rise 1.1s cubic-bezier(.19,.7,.2,1) .30s both' }}
        >
          The plains remember<br />
          <em className="italic">every arrival</em>
        </h1>

        <p
          className="font-jost text-[16px] font-light text-ov-muted max-w-md mx-auto mb-12 leading-relaxed"
          style={{ animation: 'ov-rise 1.1s cubic-bezier(.19,.7,.2,1) .50s both' }}
        >
          Private expeditions across Tanzania&apos;s most storied landscapes — built around you, guided by those who live here.
        </p>

        <div
          className="flex items-center justify-center gap-7"
          style={{ animation: 'ov-rise 1.1s cubic-bezier(.19,.7,.2,1) .72s both' }}
        >
          <a
            href="/contact"
            className="font-jost text-[13px] font-light tracking-[.1em] uppercase text-ov-ivory border border-ov-brass px-9 py-4 transition-all duration-400 hover:bg-ov-brass hover:text-ov-deep"
          >
            Begin your journey
          </a>
          <a
            href="#film"
            className="font-jost text-[13px] font-light tracking-[.06em] text-ov-muted underline underline-offset-4 decoration-ov-brass hover:text-ov-ivory transition-colors duration-300"
          >
            Watch the film
          </a>
        </div>
      </div>

      {/* ── Bottom corners ── */}
      <div
        className="absolute bottom-10 inset-x-14 flex justify-between items-end pointer-events-none"
        style={{ animation: 'ov-rise 1.1s cubic-bezier(.19,.7,.2,1) .92s both' }}
      >
        <p className="font-jost text-[10px] uppercase tracking-[.24em] text-ov-brass/70 leading-loose">
          Serengeti · Ngorongoro<br />Kilimanjaro · Zanzibar<br />Selous · Tarangire
        </p>
        <p className="font-jost text-[10px] uppercase tracking-[.24em] text-ov-brass/70">
          Scroll ↓
        </p>
      </div>

      {/* ken-burns + stagger keyframes */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ov-kb {
            from { transform: scale(1.06); }
            to   { transform: scale(1.16); }
          }
          @keyframes ov-rise {
            from { opacity: 0; transform: translateY(22px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes ov-kb { from { transform: none; } to { transform: none; } }
          @keyframes ov-rise { from { opacity: 1; } to { opacity: 1; } }
        }
      `}</style>
    </section>
  );
}
