'use client';

import { useState } from 'react';
import type { TourDeparture } from '@/data/tours/types';

function parsePriceNum(p: string): number {
  return parseInt(p.replace(/[^0-9]/g, ''), 10);
}

function formatTotal(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

interface Props {
  departures?: TourDeparture[];
}

/* ─── No-dates state ──────────────────────────────────────────────────────── */
function RequestCard({ guests, setGuests }: { guests: number; setGuests: (n: number) => void }) {
  return (
    <>
      {/* ── Desktop card ───────────────────────────────── */}
      <aside
        id="book"
        aria-label="Booking card"
        className="hidden lg:flex flex-col card-surface p-6 gap-6"
      >
        <div>
          <p className="eyebrow text-clay mb-1">From</p>
          <p className="font-display text-[26px] font-extrabold tracking-tightest text-gold leading-none">
            Price on request
          </p>
          <p className="font-body text-[12px] text-sand mt-2 leading-relaxed max-w-[220px]">
            Flexible dates — we design the departure around your travel window and group size.
          </p>
        </div>

        <div className="h-px w-full bg-line" />

        <div>
          <label className="eyebrow text-clay block mb-3" id="guests-label-req">
            Travellers
          </label>
          <div
            className="flex items-center justify-between rounded-card border border-line px-4 py-3"
            role="group"
            aria-labelledby="guests-label-req"
          >
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              aria-label="Remove a traveller"
              className="h-8 w-8 rounded-full border border-line flex items-center justify-center font-body text-[16px] text-sand hover:text-cream hover:border-gold/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              −
            </button>
            <span className="font-display text-[20px] font-bold tracking-tighter text-cream" aria-live="polite">
              {guests}{' '}
              <span className="font-body text-[13px] text-sand font-normal">
                guest{guests !== 1 ? 's' : ''}
              </span>
            </span>
            <button
              onClick={() => setGuests(Math.min(12, guests + 1))}
              disabled={guests >= 12}
              aria-label="Add a traveller"
              className="h-8 w-8 rounded-full border border-line flex items-center justify-center font-body text-[16px] text-sand hover:text-cream hover:border-gold/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/contact" className="btn-gold text-center">
            Request this trip
          </a>
          <a href="/contact" className="btn-ghost text-center">
            Talk to a specialist
          </a>
        </div>

        <div className="border-t border-line pt-5 space-y-2">
          {[
            'No-obligation quote within 24 hours',
            '100% tailor-made · free date changes',
            'Financially protected bookings',
          ].map((t) => (
            <p key={t} className="flex items-center gap-2 font-body text-[12px] text-sand">
              <span className="text-gold text-[10px]">✦</span>
              {t}
            </p>
          ))}
        </div>
      </aside>

      {/* ── Mobile sticky bottom bar ──────────────────── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink-deep border-t border-line px-5 py-4 flex items-center gap-4"
        role="complementary"
        aria-label="Booking summary"
      >
        <div className="flex-1 min-w-0">
          <p className="font-display text-[17px] font-bold tracking-tighter text-gold leading-none">
            Price on request
          </p>
          <p className="font-mono text-[9px] uppercase tracking-label text-clay mt-0.5">enquire for dates</p>
        </div>
        <a href="/contact" className="btn-gold whitespace-nowrap">
          Request this trip
        </a>
      </div>
    </>
  );
}

/* ─── Full booking card (real departures) ────────────────────────────────── */
function DeparturesCard({
  departures,
  guests,
  setGuests,
}: {
  departures: TourDeparture[];
  guests: number;
  setGuests: (n: number) => void;
}) {
  const [deptIdx, setDeptIdx] = useState(0);
  const dept = departures[deptIdx];
  const priceNum = parsePriceNum(dept.price);
  const hasPrice = !isNaN(priceNum) && priceNum > 0;
  const total = hasPrice ? priceNum * guests : null;

  return (
    <>
      {/* ── Desktop card ──────────────────────────────── */}
      <aside
        id="book"
        aria-label="Booking card"
        className="hidden lg:flex flex-col card-surface p-6 gap-6"
      >
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="eyebrow text-clay mb-1">From</p>
            <p className="font-display text-[34px] font-extrabold tracking-tightest text-gold leading-none">
              {dept.price}
            </p>
            <p className="font-body text-[12px] text-sand mt-1">per person</p>
          </div>
          <div className="text-right pb-1">
            <p className="font-display text-[16px] font-bold text-gold">4.96 ★</p>
            <p className="font-mono text-[9px] uppercase tracking-label text-clay">214 reviews</p>
          </div>
        </div>

        <div className="h-px w-full bg-line" />

        <div>
          <label className="eyebrow text-clay block mb-3" htmlFor="departure-select">
            Departure
          </label>
          <div className="space-y-2" role="radiogroup" aria-labelledby="departure-select">
            {departures.map((d, i) => (
              <button
                key={i}
                role="radio"
                aria-checked={deptIdx === i}
                onClick={() => setDeptIdx(i)}
                className={`w-full rounded-card px-4 py-3 text-left border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  deptIdx === i
                    ? 'border-gold/60 bg-gold/10'
                    : 'border-line hover:border-gold/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body text-[13px] font-semibold text-cream">{d.window}</span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-label rounded-pill px-2 py-0.5"
                    style={{ color: d.availColor, border: `1px solid ${d.availColor}40`, background: `${d.availColor}15` }}
                  >
                    {d.avail}
                  </span>
                </div>
                {d.note && (
                  <p className="font-mono text-[10px] uppercase tracking-label text-clay mt-1">{d.note}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="eyebrow text-clay block mb-3" id="guests-label">
            Travellers
          </label>
          <div
            className="flex items-center justify-between rounded-card border border-line px-4 py-3"
            role="group"
            aria-labelledby="guests-label"
          >
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              aria-label="Remove a traveller"
              className="h-8 w-8 rounded-full border border-line flex items-center justify-center font-body text-[16px] text-sand hover:text-cream hover:border-gold/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              −
            </button>
            <span className="font-display text-[20px] font-bold tracking-tighter text-cream" aria-live="polite">
              {guests}{' '}
              <span className="font-body text-[13px] text-sand font-normal">
                guest{guests !== 1 ? 's' : ''}
              </span>
            </span>
            <button
              onClick={() => setGuests(Math.min(6, guests + 1))}
              disabled={guests >= 6}
              aria-label="Add a traveller"
              className="h-8 w-8 rounded-full border border-line flex items-center justify-center font-body text-[16px] text-sand hover:text-cream hover:border-gold/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              +
            </button>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-label text-clay mt-2 text-center">
            Max 6 · Private group available
          </p>
        </div>

        <div className="rounded-card bg-gold/[.06] border border-gold/20 px-4 py-4 flex items-center justify-between">
          <span className="font-body text-[13px] text-sand">
            {hasPrice ? 'Est. total' : 'Your quote'}
          </span>
          <span
            className="font-display text-[22px] font-bold tracking-tighter text-gold"
            aria-live="polite"
            aria-atomic="true"
          >
            {hasPrice && total !== null ? formatTotal(total) : 'On request'}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/contact" className="btn-gold text-center">
            Request this trip
          </a>
          <a href="/contact" className="btn-ghost text-center">
            Talk to a specialist
          </a>
        </div>

        <div className="border-t border-line pt-5 space-y-2">
          {[
            'No-obligation quote within 24 hours',
            '100% tailor-made · free date changes',
            'Financially protected bookings',
          ].map((t) => (
            <p key={t} className="flex items-center gap-2 font-body text-[12px] text-sand">
              <span className="text-gold text-[10px]">✦</span>
              {t}
            </p>
          ))}
        </div>
      </aside>

      {/* ── Mobile sticky bottom bar ──────────────────── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink-deep border-t border-line px-5 py-4 flex items-center gap-4"
        role="complementary"
        aria-label="Booking summary"
      >
        <div className="flex-1 min-w-0">
          <p className="font-display text-[22px] font-bold tracking-tighter text-gold leading-none">{dept.price}</p>
          <p className="font-mono text-[9px] uppercase tracking-label text-clay mt-0.5">per person</p>
        </div>
        <a
          href="#book"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('book-mobile')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-gold whitespace-nowrap"
        >
          Request this trip
        </a>
      </div>
    </>
  );
}

/* ─── Exported component ─────────────────────────────────────────────────── */
export default function BookingCard({ departures }: Props) {
  const [guests, setGuests] = useState(2);
  const hasDepartures = departures && departures.length > 0;

  if (!hasDepartures) {
    return <RequestCard guests={guests} setGuests={setGuests} />;
  }

  return <DeparturesCard departures={departures} guests={guests} setGuests={setGuests} />;
}
