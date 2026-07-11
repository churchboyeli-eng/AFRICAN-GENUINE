'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { honeymoonTours } from '@/data/honeymoon';

type DurationFilter = 'All' | '5 Days' | '12 Days';

const durationFilters: DurationFilter[] = ['All', '5 Days', '12 Days'];

function getDays(t: (typeof honeymoonTours)[number]): number {
  const fact = t.facts?.find((f) => f.label === 'Duration');
  return parseInt(fact?.value ?? '5', 10);
}

function matchesDuration(days: number, filter: DurationFilter) {
  if (filter === 'All')    return true;
  if (filter === '5 Days')  return days === 5;
  return days === 12;
}

export default function HoneymoonGrid() {
  const [filter, setFilter] = useState<DurationFilter>('All');

  const visible = honeymoonTours.filter((t) => matchesDuration(getDays(t), filter));

  return (
    <section className="py-[70px]" aria-label="Honeymoon itineraries list">
      <div className="shell">
        {/* Filter bar */}
        <div
          role="group"
          aria-label="Filter by duration"
          className="mb-10 flex flex-wrap gap-2"
        >
          {durationFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-pill px-5 py-2.5 font-body text-[12px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                filter === f
                  ? 'bg-[#d24d2e] text-white'
                  : 'border border-[rgba(33,29,26,0.22)] text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-[10px] text-[#7a746c]">
            {visible.length} itinerar{visible.length === 1 ? 'y' : 'ies'}
          </span>
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((tour) => {
              const days = getDays(tour);
              const route = tour.facts?.find((f) => f.label === 'Route')?.value ?? '';
              const season = tour.facts?.find((f) => f.label === 'Best season')?.value ?? '';

              return (
                <motion.div
                  key={tour.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.1, 1] }}
                >
                  <article className="card-surface group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold h-full">
                    <div className="p-6 flex flex-col flex-1">
                      {/* Duration badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="rounded-pill bg-[#d24d2e]/10 border border-[#d24d2e]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-[#d24d2e]">
                          {days} Days
                        </span>
                        {tour.reviewScore && (
                          <span className="font-display text-[13px] font-bold text-ovl-accent">
                            {tour.reviewScore} ★
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-[19px] font-bold tracking-tighter text-[#211d1a] leading-snug mb-2">
                        {tour.name}
                      </h3>

                      {/* Subhead */}
                      <p className="text-[13px] text-[#5c5750] font-body italic mb-4 leading-snug line-clamp-2">
                        {tour.subhead}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                        {[route, season].filter(Boolean).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-pill border border-[rgba(33,29,26,0.22)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-label text-[#7a746c]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/honeymoon/${tour.slug}`}
                        className="font-body text-[12px] font-semibold text-ovl-accent hover:text-[#a83a20] transition-colors focus:outline-none focus-visible:underline"
                        aria-label={`View itinerary: ${tour.name}`}
                      >
                        View itinerary →
                      </Link>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
