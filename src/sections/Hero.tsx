'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { searchExperiences } from '@/data/content';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>(searchExperiences[0].key);

  const current = searchExperiences.find((e) => e.key === activeTab) ?? searchExperiences[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/img/hero/hero-main.jpg"
        alt="Vast Serengeti plain at golden hour — wildebeest stretching to the horizon"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark radial veil */}
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />

      <div className="relative z-10 w-full">
        <div className="shell flex flex-col items-center text-center">
          {/* Pill eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.1, 1] }}
          >
            <span className="mb-8 inline-flex items-center rounded-pill border border-line bg-ink/60 px-5 py-2.5 backdrop-blur-sm">
              <span className="eyebrow text-[11px]">★ Tanzania Specialists · Since 2009</span>
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="mb-5 font-display text-[clamp(42px,7vw,78px)] font-extrabold text-cream leading-[0.98] tracking-[-.03em] max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.1, 1] }}
          >
            The wild, exactly as you imagined it
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mb-12 font-body text-[17px] text-sand max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.4, 0, 0.1, 1] }}
          >
            Private safaris, Kilimanjaro treks and honeymoons built around you — by a team that calls Tanzania home.
          </motion.p>

          {/* Search pill bar */}
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.4, 0, 0.1, 1] }}
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

            {/* Single rounded search bar */}
            <div
              id="search-bar"
              role="tabpanel"
              className="flex items-center rounded-pill border border-line bg-ink/80 backdrop-blur-md overflow-hidden"
            >
              {/* Experience segment */}
              <div className="flex-1 border-r border-line px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">Experience</p>
                <p className="font-body text-[14px] font-semibold text-cream truncate">{current.field}</p>
              </div>

              {/* When segment */}
              <div className="flex-1 border-r border-line px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">When</p>
                <p className="font-body text-[14px] font-semibold text-sand">Any time</p>
              </div>

              {/* Guests segment */}
              <div className="flex-1 px-6 py-4 min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-label text-clay mb-0.5">Guests</p>
                <p className="font-body text-[14px] font-semibold text-sand">2 guests</p>
              </div>

              {/* Search button */}
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
