'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type {
  TourHighlight,
  TourDay,
  TourLodge,
  StartingLocation,
  ParkWildlife,
  BestTime,
} from '@/data/tours/types';

/* ─── Overview panel ──────────────────────────────────────── */
interface OverviewPanelProps {
  overviewText?: string[];
  highlights?: TourHighlight[];
  startingLocations?: StartingLocation[];
  parksAndWildlife?: ParkWildlife[];
  bestTime?: BestTime[];
  whyBook?: string[];
}

function OverviewPanel({
  overviewText,
  highlights,
  startingLocations,
  parksAndWildlife,
  bestTime,
  whyBook,
}: OverviewPanelProps) {
  const hasContent =
    (overviewText && overviewText.length > 0) ||
    (highlights && highlights.length > 0) ||
    (startingLocations && startingLocations.length > 0) ||
    (parksAndWildlife && parksAndWildlife.length > 0) ||
    (bestTime && bestTime.length > 0) ||
    (whyBook && whyBook.length > 0);

  if (!hasContent) {
    return (
      <div className="card-surface p-8 lg:p-10">
        <p className="eyebrow text-clay mb-3">Trip overview</p>
        <h2 className="font-display text-[22px] font-bold tracking-tighter text-cream mb-4">
          Full details on request
        </h2>
        <p className="text-sand text-[15px] leading-relaxed mb-6 max-w-lg">
          Detailed trip notes — park briefings, daily highlights, and accommodation recommendations — are included in your personalised itinerary proposal.
        </p>
        <a href="/#enquiry" className="btn-gold inline-flex items-center justify-center">
          Request trip notes
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Text intro */}
      {overviewText && overviewText.length > 0 && (
        <div className="space-y-4">
          {overviewText.map((p, i) => (
            <p key={i} className="text-sand text-[15px] leading-[1.8]">{p}</p>
          ))}
        </div>
      )}

      {/* Highlight cards */}
      {highlights && highlights.length > 0 && (
        <div>
          <p className="eyebrow mb-3">Why this trip</p>
          <h2 className="section-title mb-5">Trip highlights</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((h) => (
              <div key={h.num} className="card-surface p-6 flex gap-5">
                <span className="font-mono text-[28px] font-bold text-gold/30 leading-none shrink-0 pt-0.5">
                  {h.num}
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-bold tracking-tighter text-cream mb-2 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-sand text-[13px] leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Starting locations */}
      {startingLocations && startingLocations.length > 0 && (
        <div>
          <h2 className="font-display text-[22px] font-bold tracking-tighter text-cream mb-6">Starting Locations</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {startingLocations.map((loc, i) => (
              <div key={i} className="card-surface p-6">
                <h3 className="font-display text-[17px] font-bold text-gold mb-3">{loc.title}</h3>
                <p className="text-sand text-[14px] leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Parks & Wildlife */}
      {parksAndWildlife && parksAndWildlife.length > 0 && (
        <div>
          <h2 className="font-display text-[22px] font-bold tracking-tighter text-cream mb-6">
            Parks &amp; Wildlife
          </h2>
          <div className="space-y-8">
            {parksAndWildlife.map((park, i) => (
              <div key={i}>
                <h3 className="font-display text-[19px] font-bold text-cream mb-3">{park.name}</h3>
                <div className="mb-3 space-y-2">
                  {park.description.map((desc, idx) => (
                    <p key={idx} className="text-sand text-[14px] leading-relaxed">{desc}</p>
                  ))}
                </div>
                <ul className="space-y-2">
                  {park.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gold mt-1 shrink-0 text-[10px]">✦</span>
                      <span className="text-clay text-[14px] leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Best time */}
      {bestTime && bestTime.length > 0 && (
        <div>
          <h2 className="font-display text-[22px] font-bold tracking-tighter text-cream mb-6">
            Best Time to Visit
          </h2>
          <div className="space-y-6">
            {bestTime.map((time, i) => (
              <div key={i} className="border-l-2 border-gold/30 pl-6">
                <h3 className="font-display text-[17px] font-bold text-gold mb-2">{time.period}</h3>
                {time.subtitle && (
                  <p className="font-body text-[13px] text-sand italic mb-2">{time.subtitle}</p>
                )}
                <div className="mb-3 space-y-2">
                  {time.description.map((desc, idx) => (
                    <p key={idx} className="text-sand text-[14px] leading-relaxed">{desc}</p>
                  ))}
                </div>
                <ul className="space-y-2">
                  {time.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gold mt-1 shrink-0 text-[10px]">✦</span>
                      <span className="text-clay text-[14px] leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why book */}
      {whyBook && whyBook.length > 0 && (
        <div>
          <h2 className="font-display text-[22px] font-bold tracking-tighter text-cream mb-5">
            Why Book This Safari With Us
          </h2>
          <ul className="space-y-4">
            {whyBook.map((reason, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-[12px]">
                  ✓
                </div>
                <span className="text-sand text-[15px] leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─── Accordion item ──────────────────────────────────────── */
function AccordionItem({
  day,
  isOpen,
  onToggle,
}: {
  day: TourDay;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const hasDetails = day.stay || day.meals;

  return (
    <li className="border-b border-line last:border-none">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset group"
      >
        <span className="shrink-0 flex flex-col items-center justify-center rounded-card border border-gold/30 bg-gold/8 w-12 h-12 gap-0">
          <span className="font-mono text-[8px] uppercase tracking-label text-clay leading-none">Day</span>
          <span className="font-display text-[18px] font-bold tracking-tighter text-gold leading-none">{day.n}</span>
        </span>

        <div className="flex-1 min-w-0">
          <p className="font-display text-[17px] font-bold tracking-tighter text-cream leading-snug group-hover:text-gold-bright transition-colors">
            {day.title}
          </p>
          {(day.place || day.travel) && (
            <p className="font-mono text-[10px] uppercase tracking-label text-clay mt-1">
              {[day.place, day.travel].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0 text-gold mt-1 text-[14px]"
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.1, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-6 pl-16 pr-2">
              <p className="text-sand text-[14px] leading-[1.8] mb-5">{day.desc}</p>
              {hasDetails && (
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {day.stay && (
                    <div>
                      <span className="eyebrow text-clay">Stay</span>
                      <p className="font-body text-[13px] text-cream mt-1">{day.stay}</p>
                    </div>
                  )}
                  {day.meals && (
                    <div>
                      <span className="eyebrow text-clay">Meals</span>
                      <p className="font-body text-[13px] text-cream mt-1">{day.meals}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ─── Itinerary panel ─────────────────────────────────────── */
interface ItineraryPanelProps {
  days: TourDay[];
  notes?: string[];
  routeLabel?: string;
  routeStops?: string[];
  routeDistance?: string;
  routeNote?: string;
}

function ItineraryPanel({
  days,
  notes,
  routeLabel,
  routeStops,
  routeDistance,
  routeNote,
}: ItineraryPanelProps) {
  const dayKeys = days.map((d) => (typeof d.n === 'number' ? d.n : d.n));
  const [openDays, setOpenDays] = useState<Set<number | string>>(new Set([dayKeys[0]]));
  const allOpen = openDays.size === days.length;

  function toggleAll() {
    setOpenDays(allOpen ? new Set() : new Set(dayKeys));
  }

  function toggle(n: number | string) {
    setOpenDays((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4">
        <h2 className="section-title">Day by day</h2>
        <button
          onClick={toggleAll}
          className="font-body text-[12px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline shrink-0"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
        <ol aria-label="Day by day itinerary">
          {days.map((d) => (
            <AccordionItem
              key={d.n}
              day={d}
              isOpen={openDays.has(d.n)}
              onToggle={() => toggle(d.n)}
            />
          ))}
        </ol>

        {/* Route sidebar */}
        {(routeStops || routeLabel) && (
          <div className="hidden lg:block sticky top-[100px]">
            <div className="card-surface overflow-hidden">
              <div className="relative min-h-[200px] flex items-center justify-center bg-gold/[.03] p-6">
                <div className="text-center w-full">
                  {routeLabel && (
                    <>
                      <span className="eyebrow block mb-2">Route overview</span>
                      <p className="font-display text-[15px] font-bold tracking-tighter text-cream mb-4">{routeLabel}</p>
                    </>
                  )}
                  {routeStops && (
                    <div className="space-y-2">
                      {routeStops.map((s) => (
                        <p key={s} className="font-mono text-[10px] uppercase tracking-label text-clay">{s}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {(routeDistance || routeNote) && (
                <div className="p-5 border-t border-line">
                  {routeDistance && (
                    <p className="font-display text-[22px] font-bold tracking-tighter text-gold">{routeDistance}</p>
                  )}
                  {routeNote && (
                    <p className="font-body text-[12px] text-sand mt-0.5">{routeNote}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Notes */}
      {notes && notes.length > 0 && (
        <div className="mt-10 card-surface p-6 lg:p-8">
          <h3 className="font-display text-[18px] font-bold tracking-tighter text-cream mb-5">
            Flexible by design
          </h3>
          <ul className="space-y-3">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span className="text-gold mt-0.5 shrink-0 text-[12px]">✦</span>
                <span className="text-sand text-[14px] leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─── Inclusions panel ────────────────────────────────────── */
function InclusionsPanel({ included, excluded }: { included?: string[]; excluded?: string[] }) {
  return (
    <div>
      <h2 className="section-title mb-6">What&rsquo;s included</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {included && included.length > 0 && (
          <div className="card-surface p-6" style={{ borderColor: 'rgba(169,208,160,0.2)' }}>
            <p className="eyebrow mb-4" style={{ color: '#a9d0a0' }}>Included</p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 text-[14px]" style={{ color: '#a9d0a0' }}>✓</span>
                  <span className="font-body text-[14px] text-cream leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {excluded && excluded.length > 0 && (
          <div className="card-surface p-6">
            <p className="eyebrow text-clay mb-4">Not included</p>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-clay shrink-0 mt-0.5 text-[14px]">✕</span>
                  <span className="font-body text-[14px] text-sand leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Accommodation panel ─────────────────────────────────── */
function AccommodationPanel({ lodges }: { lodges: TourLodge[] }) {
  return (
    <div>
      <h2 className="section-title mb-6">Where you&rsquo;ll stay</h2>
      <div className="space-y-5">
        {lodges.map((lodge, i) => (
          <div key={i} className="card-surface overflow-hidden">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={lodge.image}
                alt={lodge.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-card-veil" aria-hidden="true" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="eyebrow text-clay mb-1">{lodge.nights}</p>
                  <h3 className="font-display text-[19px] font-bold tracking-tighter text-cream">
                    {lodge.name}
                  </h3>
                </div>
                {lodge.stars && (
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-label text-gold border border-gold/30 rounded-pill px-3 py-1 whitespace-nowrap">
                    {lodge.stars}
                  </span>
                )}
              </div>
              <p className="text-sand text-[14px] leading-relaxed">{lodge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main SectionTabs ────────────────────────────────────── */
export interface SectionTabsProps {
  overviewText?: string[];
  highlights?: TourHighlight[];
  startingLocations?: StartingLocation[];
  parksAndWildlife?: ParkWildlife[];
  bestTime?: BestTime[];
  whyBook?: string[];

  days: TourDay[];
  notes?: string[];
  routeLabel?: string;
  routeStops?: string[];
  routeDistance?: string;
  routeNote?: string;

  included?: string[];
  excluded?: string[];

  lodges?: TourLodge[];
}

type Tab = 'Overview' | 'Itinerary' | 'Inclusions' | 'Accommodation';

export default function SectionTabs({
  overviewText,
  highlights,
  startingLocations,
  parksAndWildlife,
  bestTime,
  whyBook,
  days,
  notes,
  routeLabel,
  routeStops,
  routeDistance,
  routeNote,
  included,
  excluded,
  lodges,
}: SectionTabsProps) {
  const hasLodges = !!(lodges && lodges.length > 0);
  const TABS: Tab[] = hasLodges
    ? ['Overview', 'Itinerary', 'Inclusions', 'Accommodation']
    : ['Overview', 'Itinerary', 'Inclusions'];

  const [active, setActive] = useState<Tab>('Overview');

  function activePanel(): React.ReactNode {
    switch (active) {
      case 'Overview':
        return (
          <OverviewPanel
            overviewText={overviewText}
            highlights={highlights}
            startingLocations={startingLocations}
            parksAndWildlife={parksAndWildlife}
            bestTime={bestTime}
            whyBook={whyBook}
          />
        );
      case 'Itinerary':
        return (
          <ItineraryPanel
            days={days}
            notes={notes}
            routeLabel={routeLabel}
            routeStops={routeStops}
            routeDistance={routeDistance}
            routeNote={routeNote}
          />
        );
      case 'Inclusions':
        return <InclusionsPanel included={included} excluded={excluded} />;
      case 'Accommodation':
        return <AccommodationPanel lodges={lodges ?? []} />;
    }
  }

  return (
    <div>
      {/* Tab bar — active pill switches INSTANTLY (no transition on active state) */}
      <div
        className="sticky top-0 z-30 bg-ink border-b border-line mb-8"
        role="tablist"
        aria-label="Tour section tabs"
      >
        <div className="flex gap-1 py-3 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`rounded-pill px-5 py-2.5 font-body text-[12px] font-bold whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                active === tab
                  ? 'bg-gold text-[#1a1206]'
                  : 'border border-line text-sand hover:text-cream hover:border-gold/50 transition-colors'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.1, 1] }}
        >
          {activePanel()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
