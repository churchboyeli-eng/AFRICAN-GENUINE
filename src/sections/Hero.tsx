'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { searchExperiences } from '@/data/content';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>(searchExperiences[0].key);
  const reduced = useReducedMotion();

  const current = searchExperiences.find((e) => e.key === activeTab) ?? searchExperiences[0];

  const ease = [0.2, 0.7, 0.2, 1] as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background image with ken-burns ── */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero/hero-main.jpg"
          alt="Vast Serengeti plain at golden hour — wildebeest stretching to the horizon"
          fill
          priority
          className={`object-cover${reduced ? '' : ' ken-burns'}`}
          sizes="100vw"
        />
      </div>

      {/* ── Cinematic vignette ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% 0%, transparent 30%, rgba(8,6,3,0.55) 70%, rgba(8,6,3,0.88) 100%)',
        }}
      />

      {/* ── Existing hero veil ── */}
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />

      {/* ── Film grain overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
          opacity: 0.04,
          mixBlendMode: 'overlay',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full">
        <div className="shell flex flex-col items-center text-center">

          {/* Eyebrow pill — delay 0.10s */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.10, ease }}
          >
            <span className="mb-8 inline-flex items-center rounded-pill border border-line bg-ink/60 px-5 py-2.5 backdrop-blur-sm">
              <span className="eyebrow text-[11px]">★ Tanzania Specialists · Since 2009</span>
            </span>
          </motion.div>

          {/* H1 — delay 0.28s */}
          <motion.h1
            className="mb-5 font-display text-[clamp(42px,7vw,78px)] font-extrabold text-cream leading-[0.98] tracking-[-.03em] max-w-4xl"
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease }}
          >
            The wild, exactly as you imagined it
          </motion.h1>

          {/* Subhead — delay 0.46s */}
          <motion.p
            className="mb-12 font-body text-[17px] text-sand max-w-xl leading-relaxed"
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.46, ease }}
          >
            Private safaris, Kilimanjaro treks and honeymoons built around you — by a team that calls Tanzania home.
          </motion.p>

          {/* Search bar — delay 0.64s */}
          <motion.div
            className="w-full max-w-2xl"
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.64, ease }}
          >
            {/* Experience tabs */}
            <div
              role="tablist"
              aria-label="Choose experience type"
              className="mb-3 flex justify-center gap-2"
            >
              {searchExperiences.map((exp) => (
                <button
                  key={exp.key}
                  role="tab"
                  aria-selected={activeTab === exp.key}
                  aria-controls="search-bar"
                  onClick={() => setActiveTab(exp.key)}
                  className={`rounded-pill px-5 py-2 font-body text-[12px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    activeTab === exp.key
                      ? 'bg-gold text-[#1a1206]'
                      : 'border border-line bg-ink/60 text-sand hover:text-cream hover:border-gold/50 backdrop-blur-sm'
                  }`}
                >
                  {exp.label}
                </button>
              ))}
            </div>

            {/* Search pill bar */}
            <div
              id="search-bar"
              role="tabpanel"
              className="flex items-center rounded-pill border border-line bg-ink/80 backdrop-blur-md overflow-hidden"
            >
              <div className="flex-1 border-r border-line px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">Experience</p>
                <p className="font-body text-[14px] font-semibold text-cream truncate">{current.field}</p>
              </div>
              <div className="flex-1 border-r border-line px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">When</p>
                <p className="font-body text-[14px] font-semibold text-sand">Any time</p>
              </div>
              <div className="flex-1 px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">Guests</p>
                <p className="font-body text-[14px] font-semibold text-sand">2 guests</p>
              </div>
              <div className="pr-2">
                <button
                  type="button"
                  className="btn-gold m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
                  aria-label="Search for safaris"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
