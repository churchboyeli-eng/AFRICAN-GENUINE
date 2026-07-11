'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { itineraries } from '@/data/itineraries';
import ItineraryCard, { type GridCard } from '@/components/ItineraryCard';

/* ── 5 rich-tour cards (replace the swapped-out itineraries 1–5) ── */
const RICH_CARDS: GridCard[] = [
  {
    id: 'r1',
    slug: '4-day-serengeti-ngorongoro-tarangire-fly-in',
    title: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In Safari',
    days: 4,
    parks: ['Serengeti', 'Ngorongoro', 'Tarangire'],
    best_for: 'Zanzibar beach + safari combo, fly-in convenience',
  },
  {
    id: 'r2',
    slug: '5-day-northern-circuit-lake-manyara',
    title: '5-Day Northern Circuit & Lake Manyara Safari',
    days: 5,
    parks: ['Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti'],
    best_for: 'Complete northern circuit including tree-climbing lions',
  },
  {
    id: 'r3',
    slug: '3-day-nyerere-selous-river-safari',
    title: '3-Day Nyerere (Selous) River Safari',
    days: 3,
    parks: ['Nyerere (Selous)'],
    best_for: 'Boat safaris, southern wilderness, off-the-beaten-path',
  },
  {
    id: 'r4',
    slug: '4-day-selous-mikumi-safari',
    title: '4-Day Selous & Mikumi Safari',
    days: 4,
    parks: ['Nyerere (Selous)', 'Mikumi'],
    best_for: 'Southern Tanzania, boat & game drive combination',
  },
  {
    id: 'r5',
    slug: '1-day-mikumi-fly-in-from-zanzibar',
    title: '1-Day Mikumi Fly-In Safari from Zanzibar',
    days: 1,
    parks: ['Mikumi'],
    best_for: 'Day-trip safari direct from Zanzibar',
  },
];

const ADAPTER_CARDS: GridCard[] = itineraries.map((it) => ({
  id: it.id,
  slug: it.slug,
  title: it.title,
  days: it.days,
  parks: it.parks,
  best_for: it.best_for,
}));

const ALL_CARDS: GridCard[] = [...RICH_CARDS, ...ADAPTER_CARDS];

type DurationFilter = 'All' | 'Short (1–4 days)' | 'Medium (5–7 days)' | 'Long (8+ days)';

const durationFilters: DurationFilter[] = [
  'All',
  'Short (1–4 days)',
  'Medium (5–7 days)',
  'Long (8+ days)',
];

function matchesDuration(days: number, filter: DurationFilter) {
  if (filter === 'All') return true;
  if (filter === 'Short (1–4 days)') return days <= 4;
  if (filter === 'Medium (5–7 days)') return days >= 5 && days <= 7;
  return days >= 8;
}

export default function ItineraryGrid() {
  const [duration, setDuration] = useState<DurationFilter>('All');

  const visible = ALL_CARDS.filter((c) => matchesDuration(c.days, duration));

  return (
    <section className="py-[70px]" aria-label="Itineraries list">
      <div className="shell">
        {/* Filter bar */}
        <div
          role="group"
          aria-label="Filter itineraries by duration"
          className="mb-10 flex flex-wrap gap-2"
        >
          {durationFilters.map((f) => (
            <button
              key={f}
              onClick={() => setDuration(f)}
              aria-pressed={duration === f}
              className={`rounded-pill px-5 py-2.5 font-body text-[12px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                duration === f
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
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((card) => (
              <motion.div
                key={card.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.1, 1] }}
              >
                <ItineraryCard itin={card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
