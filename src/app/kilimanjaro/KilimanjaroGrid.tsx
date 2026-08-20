'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { climbs } from '@/data/climbs';

type DurationFilter = 'All' | '7 Days' | '8 Days' | '10 Days';

const durationFilters: DurationFilter[] = ['All', '7 Days', '8 Days', '10 Days'];

function matchesDuration(days: number, filter: DurationFilter) {
  if (filter === 'All')    return true;
  if (filter === '7 Days')  return days === 7;
  if (filter === '8 Days')  return days === 8;
  return days === 10;
}

function getDays(c: (typeof climbs)[number]): number {
  const fact = c.facts?.find((f) => f.label === 'Duration');
  return parseInt(fact?.value ?? '7', 10);
}

export default function KilimanjaroGrid() {
  const [duration, setDuration] = useState<DurationFilter>('All');

  const visible = climbs.filter((c) => matchesDuration(getDays(c), duration));

  return (
    <section className="py-[70px]" aria-label="Kilimanjaro routes list">
      <div className="shell">
        {/* Filter bar */}
        <div
          role="group"
          aria-label="Filter routes by duration"
          className="mb-10 flex flex-wrap gap-2"
        >
          {durationFilters.map((f) => (
            <button
              key={f}
              onClick={() => setDuration(f)}
              aria-pressed={duration === f}
              className={`rounded-pill px-5 py-3.5 md:py-2.5 font-body text-[12px] font-bold transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                duration === f
                  ? 'bg-[#c4472a] text-white'
                  : 'control-light'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-[10px] text-[#756f67]">
            {visible.length} route{visible.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((climb) => {
              const days = getDays(climb);
              const sleepFact = climb.facts?.find((f) => f.label === 'Sleeps');
              const gradeFact = climb.facts?.find((f) => f.label === 'Grade');
              const sleepType = sleepFact?.value ?? 'Camping';
              const grade = gradeFact?.value ?? 'Moderate';

              return (
                <motion.div
                  key={climb.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.1, 1] }}
                >
                  <article className="card-surface group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold h-full">
                    <div className="p-6 flex flex-col flex-1">
                      {/* Days badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="rounded-pill bg-[#c4472a]/10 border border-[#c4472a]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-[#c4472a]">
                          {days} {days === 1 ? 'Day' : 'Days'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-[19px] font-bold tracking-tighter text-[#211d1a] leading-snug mb-2">
                        {climb.name}
                      </h3>

                      {/* Subhead */}
                      <p className="text-[13px] text-[#5c5750] font-body italic mb-4 leading-snug line-clamp-2">
                        {climb.subhead}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                        {[sleepType, grade].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-pill border border-[rgba(33,29,26,0.22)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-label text-[#756f67]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/kilimanjaro/${climb.slug}`}
                        className="font-body text-[12px] font-semibold text-ovl-accent hover:text-[#963620] transition-colors focus:outline-none focus-visible:underline"
                        aria-label={`View route: ${climb.name}, ${days} days`}
                      >
                        View route →
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
