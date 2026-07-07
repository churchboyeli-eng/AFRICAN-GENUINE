'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import { dayTrips, dayTripFilters, type DayTrip, type DayTripFilter } from '@/data/dayTrips';

/* ─── Modal ────────────────────────────────────────────────────────────────── */

function Modal({ trip, onClose }: { trip: DayTrip; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef   = useRef<HTMLButtonElement>(null);

  // Focus close button on open
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Focus trap
  const handleTab = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const modal = overlayRef.current?.querySelector('[role="dialog"]');
    if (!modal) return;
    const focusable = Array.from(
      modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute('disabled'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ backdropFilter: 'blur(6px)', background: 'rgba(12,10,7,0.85)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      onKeyDown={handleTab}
      aria-modal="true"
    >
      <motion.div
        role="dialog"
        aria-label={trip.name}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.1, 1] }}
        className="relative w-full sm:max-w-2xl max-h-[96dvh] overflow-y-auto rounded-t-[20px] sm:rounded-[20px] bg-[#111009] border border-line flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-48 sm:h-60 shrink-0 overflow-hidden rounded-t-[20px] sm:rounded-t-[20px]">
          <Image src={trip.img} alt={trip.name} fill className="object-cover" sizes="672px" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111009]/80 to-transparent" />

          {/* Pills on image */}
          <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
            <span className="rounded-pill bg-ink-deep/80 border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-label text-gold backdrop-blur-sm">
              {trip.duration}
            </span>
            <span className="rounded-pill bg-ink-deep/80 border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-label text-sand backdrop-blur-sm">
              {trip.category}
            </span>
          </div>

          {/* Close */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ink-deep/80 border border-line flex items-center justify-center text-sand hover:text-cream transition-colors backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Location + title */}
          <div>
            <p className="eyebrow mb-2 flex items-center gap-1.5">
              <span aria-hidden="true">📍</span>
              {trip.location}
            </p>
            <h2 className="font-display text-[clamp(22px,4vw,30px)] font-extrabold tracking-tighter text-cream leading-tight mb-3">
              {trip.name}
            </h2>
            <p className="text-sand text-[15px] leading-relaxed">{trip.desc}</p>
          </div>

          {/* 3-up stat strip */}
          <div className="grid grid-cols-3 divide-x divide-line border border-line rounded-card overflow-hidden">
            {[
              { label: 'Duration', value: trip.duration },
              { label: 'From',     value: trip.price },
              { label: 'Best for', value: trip.bestFor },
            ].map(({ label, value }) => (
              <div key={label} className="py-4 px-3 sm:px-5 flex flex-col items-center text-center gap-1 bg-ink">
                <span className="font-mono text-[9px] uppercase tracking-label text-clay">{label}</span>
                <span className="font-display text-[15px] sm:text-[17px] font-bold tracking-tighter text-gold leading-tight">{value}</span>
              </div>
            ))}
          </div>

          {/* Included / Excluded */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-card border border-[#2a4a28] bg-[#1a2a18] p-5">
              <p className="eyebrow mb-3 text-[#a9d0a0]">✓ Included</p>
              <ul className="space-y-2">
                {trip.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-sand">
                    <span className="text-[#a9d0a0] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-line bg-white/[.03] p-5">
              <p className="eyebrow mb-3 text-clay">✕ Not included</p>
              <ul className="space-y-2">
                {trip.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-sand">
                    <span className="text-clay shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/contact" className="btn-gold text-center flex-1">
              Request this day trip
            </Link>
            <Link href="/contact" className="btn-ghost text-center flex-1">
              Talk to us
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Card ─────────────────────────────────────────────────────────────────── */

function TripCard({ trip, onClick }: { trip: DayTrip; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.1, 1] }}
      className="group flex flex-col rounded-[16px] border border-line bg-[#0f0d0a] overflow-hidden cursor-pointer hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={trip.img}
          alt={trip.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a]/60 to-transparent" />

        {/* Pills */}
        <div className="absolute top-3 left-3">
          <span className="rounded-pill bg-ink-deep/80 border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-label text-gold backdrop-blur-sm">
            {trip.duration}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="rounded-pill bg-ink-deep/80 border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-label text-sand backdrop-blur-sm">
            {trip.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="eyebrow mb-2 flex items-center gap-1.5 text-clay">
          <span aria-hidden="true">📍</span>
          {trip.location}
        </p>
        <h3 className="font-display text-[18px] font-bold tracking-tighter text-cream leading-snug mb-1.5">
          {trip.name}
        </h3>
        <p className="text-[13px] text-sand leading-relaxed line-clamp-2 mb-4 flex-1">
          {trip.tagline}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="font-body text-[12px] text-clay">
            from <span className="text-gold font-semibold">{trip.price}</span>
          </span>
          <button
            onClick={onClick}
            aria-label={`View details: ${trip.name}`}
            className="font-body text-[12px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
          >
            View details →
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function DayTripsPage() {
  const [filter, setFilter]       = useState<DayTripFilter>('All');
  const [selected, setSelected]   = useState<DayTrip | null>(null);

  const visible = filter === 'All'
    ? dayTrips
    : dayTrips.filter((t) => t.cats.includes(filter));

  return (
    <>
      <TopBar />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="pt-16 pb-20 border-b border-line overflow-hidden" aria-label="Day trips header">
          <div className="shell">
            {/* Full-bleed rounded hero image */}
            <div className="relative h-64 sm:h-80 rounded-[20px] overflow-hidden mb-12">
              <Image
                src="/img/dest/serengeti.webp"
                alt="Day trips and excursions in Tanzania"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="eyebrow mb-4 bg-ink-deep/70 backdrop-blur-sm rounded-pill px-4 py-1.5">
                  Single-day experiences
                </span>
                <h1 className="font-display text-[clamp(32px,5vw,56px)] font-extrabold tracking-tighter text-cream leading-tight mb-4">
                  Day trips &amp; short escapes
                </h1>
                <p className="text-sand text-[16px] leading-relaxed max-w-xl">
                  Waterfalls, hot springs, crater lakes, horse riding and wildlife — each one a full experience in a single day, bookable alone or combined around your safari or climb.
                </p>
              </div>
            </div>

            {/* ── Filter chips ────────────────────────────────── */}
            <div
              role="group"
              aria-label="Filter by category"
              className="flex flex-wrap gap-2 items-center"
            >
              {dayTripFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-pill px-5 py-2.5 font-body text-[12px] font-bold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    filter === f
                      ? 'bg-gold text-[#1a1206]'
                      : 'border border-line text-sand hover:text-cream hover:border-gold/50'
                  }`}
                >
                  {f}
                </button>
              ))}
              <span className="ml-auto font-mono text-[10px] text-clay shrink-0">
                {visible.length} experience{visible.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>
        </section>

        {/* ── Card grid ─────────────────────────────────────────── */}
        <section className="py-[70px]" aria-label="Day trip experiences">
          <div className="shell">
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((trip) => (
                  <TripCard
                    key={trip.id}
                    trip={trip}
                    onClick={() => setSelected(trip)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── Combine strip ─────────────────────────────────────── */}
        <section className="pb-[70px]" aria-label="Build your day">
          <div className="shell">
            <div className="rounded-[20px] border border-gold/30 bg-gold/[.04] px-8 py-10 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
              <div className="max-w-lg">
                <p className="eyebrow mb-3">Mix &amp; match</p>
                <h2 className="font-display text-[clamp(22px,3vw,30px)] font-extrabold tracking-tighter text-cream leading-tight mb-3">
                  Build a day, or a whole week
                </h2>
                <p className="text-sand text-[14px] leading-relaxed">
                  Combine any of these experiences around your safari or Kilimanjaro climb — or string two or three together into a short Tanzania break. Tell us which ones appeal and we&rsquo;ll design the transfers, timing and logistics around you.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-gold whitespace-nowrap shrink-0"
              >
                Plan my day trips
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* ── Modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <Modal trip={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
