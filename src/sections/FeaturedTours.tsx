'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { tours, tourFilters } from '@/data/content';
import type { Tour } from '@/data/content';
import TourCard from '@/components/TourCard';

type Filter = typeof tourFilters[number];

export default function FeaturedTours() {
  const [active, setActive] = useState<Filter>('All');

  const filtered: Tour[] = active === 'All' ? tours : tours.filter((t) => t.filterTag === active);

  return (
    <section id="tours" className="py-[70px]" aria-label="Featured tours">
      <div className="shell">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Handpicked experiences</p>
            <h2 className="font-display text-[38px] font-extrabold tracking-tighter text-cream leading-tight">
              Find your perfect trip
            </h2>
            <p className="mt-3 text-sand text-[15px] leading-relaxed max-w-xl">
              Six of our most-loved programmes — from a 3-day first safari to a classic 8-day northern circuit. Every trip is tailor-made around your dates, group and pace.
            </p>
          </div>
          <Link
            href="/itineraries"
            className="hidden lg:inline-block shrink-0 font-body text-[13px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
          >
            All 20 itineraries →
          </Link>
        </div>

        {/* Filter chips */}
        <div
          role="group"
          aria-label="Filter tours by type"
          className="mb-10 flex flex-wrap gap-2"
        >
          {tourFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`rounded-pill px-5 py-2.5 font-body text-[12px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                active === filter
                  ? 'bg-gold text-[#1a1206]'
                  : 'border border-line text-sand hover:text-cream hover:border-gold/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mobile "see all" link */}
        <div className="lg:hidden mb-6">
          <Link href="/itineraries" className="font-body text-[13px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline">
            Browse all 20 itineraries →
          </Link>
        </div>

        {/* Tour grid with animated layout */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tour) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.1, 1] }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
