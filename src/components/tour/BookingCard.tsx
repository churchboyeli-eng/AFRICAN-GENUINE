'use client';

import { useState } from 'react';
import type { TourDeparture } from '@/data/tours/types';
import { WA_NUMBER, waUrl } from '@/config/whatsapp';

function parsePriceNum(p: string): number {
  return parseInt(p.replace(/[^0-9]/g, ''), 10);
}

function formatTotal(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

interface Props {
  departures?: TourDeparture[];
  tourName?: string;
}

/* ─── No-dates state ──────────────────────────────────────────────────────── */
function RequestCard({
  guests,
  setGuests,
  tourName,
}: {
  guests: number;
  setGuests: (n: number) => void;
  tourName?: string;
}) {
  const waMsg = tourName
    ? `Hi, I'm interested in the ${tourName} — could you send me more details?`
    : undefined;

  return (
    <>
      {/* ── Desktop card ───────────────────────────────── */}
      <aside
        id="book"
        aria-label="Booking card"
        className="hidden lg:flex flex-col card-surface p-6 gap-6"
      >
        <div>
          <p className="eyebrow text-ovl-faint mb-1">From</p>
          <p className="font-display text-[26px] font-extrabold tracking-tightest text-ovl-accent leading-none">
            Price on request
          </p>
          <p className="font-body text-[12px] text-[#5c5750] mt-2 leading-relaxed max-w-[220px]">
            Flexible dates — we design the departure around your travel window and group size.
          </p>
        </div>

        <div className="h-px w-full bg-[rgba(33,29,26,0.22)]" />

        <div>
          <label className="eyebrow text-ovl-faint block mb-3" id="guests-label-req">
            Travellers
          </label>
          <div
            className="flex items-center justify-between rounded-card border border-[rgba(33,29,26,0.22)] px-4 py-3"
            role="group"
            aria-labelledby="guests-label-req"
          >
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              aria-label="Remove a traveller"
              className="h-8 w-8 rounded-full border border-[rgba(33,29,26,0.22)] flex items-center justify-center font-body text-[16px] text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            >
              −
            </button>
            <span className="font-display text-[20px] font-bold tracking-tighter text-[#211d1a]" aria-live="polite">
              {guests}{' '}
              <span className="font-body text-[13px] text-[#5c5750] font-normal">
                guest{guests !== 1 ? 's' : ''}
              </span>
            </span>
            <button
              onClick={() => setGuests(Math.min(12, guests + 1))}
              disabled={guests >= 12}
              aria-label="Add a traveller"
              className="h-8 w-8 rounded-full border border-[rgba(33,29,26,0.22)] flex items-center justify-center font-body text-[16px] text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/contact" className="btn-gold text-center">
            Request this trip
          </a>
          {WA_NUMBER && (
            <a
              href={waUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-pill border px-5 py-3 font-body text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              style={{ color: '#25D366', borderColor: '#25D36640', background: '#25D36608' }}
            >
              <WaIcon />
              Chat on WhatsApp
            </a>
          )}
          <a href="/contact" className="btn-ghost text-center">
            Talk to a specialist
          </a>
        </div>

        <div className="border-t border-[rgba(33,29,26,0.22)] pt-5 space-y-2">
          {[
            'No-obligation quote within 24 hours',
            '100% tailor-made · free date changes',
            'Financially protected bookings',
          ].map((t) => (
            <p key={t} className="flex items-center gap-2 font-body text-[12px] text-[#5c5750]">
              <span className="text-ovl-accent text-[10px]">✦</span>
              {t}
            </p>
          ))}
        </div>
      </aside>

      {/* ── Mobile sticky bottom bar ──────────────────── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink-deep border-t border-line px-5 py-4 flex items-center gap-3"
        role="complementary"
        aria-label="Booking summary"
      >
        <div className="flex-1 min-w-0">
          <p className="font-display text-[17px] font-bold tracking-tighter text-gold leading-none">
            Price on request
          </p>
          <p className="font-mono text-[9px] uppercase tracking-label text-clay mt-0.5">enquire for dates</p>
        </div>
        {WA_NUMBER && (
          <a
            href={waUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="h-10 w-10 shrink-0 rounded-full border flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            style={{ color: '#25D366', borderColor: '#25D36640', background: '#25D36610' }}
          >
            <WaIcon />
          </a>
        )}
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
  tourName,
}: {
  departures: TourDeparture[];
  guests: number;
  setGuests: (n: number) => void;
  tourName?: string;
}) {
  const [deptIdx, setDeptIdx] = useState(0);
  const dept = departures[deptIdx];
  const priceNum = parsePriceNum(dept.price);
  const hasPrice = !isNaN(priceNum) && priceNum > 0;
  const total = hasPrice ? priceNum * guests : null;

  const waMsg = tourName
    ? `Hi, I'm interested in the ${tourName} — could you send me more details?`
    : undefined;

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
            <p className="eyebrow text-ovl-faint mb-1">From</p>
            <p className="font-display text-[34px] font-extrabold tracking-tightest text-ovl-accent leading-none">
              {dept.price}
            </p>
            <p className="font-body text-[12px] text-[#5c5750] mt-1">per person</p>
          </div>
          <div className="text-right pb-1">
            <p className="font-display text-[16px] font-bold text-ovl-accent">4.96 ★</p>
            <p className="font-mono text-[9px] uppercase tracking-label text-[#7a746c]">214 reviews</p>
          </div>
        </div>

        <div className="h-px w-full bg-[rgba(33,29,26,0.22)]" />

        <div>
          <label className="eyebrow text-ovl-faint block mb-3" htmlFor="departure-select">
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
                    ? 'border-[#d24d2e]/60 bg-[#d24d2e]/10'
                    : 'border-[rgba(33,29,26,0.22)] hover:border-[#d24d2e]/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body text-[13px] font-semibold text-[#211d1a]">{d.window}</span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-label rounded-pill px-2 py-0.5"
                    style={{ color: d.availColor, border: `1px solid ${d.availColor}40`, background: `${d.availColor}15` }}
                  >
                    {d.avail}
                  </span>
                </div>
                {d.note && (
                  <p className="font-mono text-[10px] uppercase tracking-label text-[#7a746c] mt-1">{d.note}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="eyebrow text-ovl-faint block mb-3" id="guests-label">
            Travellers
          </label>
          <div
            className="flex items-center justify-between rounded-card border border-[rgba(33,29,26,0.22)] px-4 py-3"
            role="group"
            aria-labelledby="guests-label"
          >
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              aria-label="Remove a traveller"
              className="h-8 w-8 rounded-full border border-[rgba(33,29,26,0.22)] flex items-center justify-center font-body text-[16px] text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            >
              −
            </button>
            <span className="font-display text-[20px] font-bold tracking-tighter text-[#211d1a]" aria-live="polite">
              {guests}{' '}
              <span className="font-body text-[13px] text-[#5c5750] font-normal">
                guest{guests !== 1 ? 's' : ''}
              </span>
            </span>
            <button
              onClick={() => setGuests(Math.min(6, guests + 1))}
              disabled={guests >= 6}
              aria-label="Add a traveller"
              className="h-8 w-8 rounded-full border border-[rgba(33,29,26,0.22)] flex items-center justify-center font-body text-[16px] text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            >
              +
            </button>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-label text-[#7a746c] mt-2 text-center">
            Max 6 · Private group available
          </p>
        </div>

        <div className="rounded-card bg-[#d24d2e]/[.06] border border-[#d24d2e]/20 px-4 py-4 flex items-center justify-between">
          <span className="font-body text-[13px] text-[#5c5750]">
            {hasPrice ? 'Est. total' : 'Your quote'}
          </span>
          <span
            className="font-display text-[22px] font-bold tracking-tighter text-ovl-accent"
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
          {WA_NUMBER && (
            <a
              href={waUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-pill border px-5 py-3 font-body text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              style={{ color: '#25D366', borderColor: '#25D36640', background: '#25D36608' }}
            >
              <WaIcon />
              Chat on WhatsApp
            </a>
          )}
          <a href="/contact" className="btn-ghost text-center">
            Talk to a specialist
          </a>
        </div>

        <div className="border-t border-[rgba(33,29,26,0.22)] pt-5 space-y-2">
          {[
            'No-obligation quote within 24 hours',
            '100% tailor-made · free date changes',
            'Financially protected bookings',
          ].map((t) => (
            <p key={t} className="flex items-center gap-2 font-body text-[12px] text-[#5c5750]">
              <span className="text-ovl-accent text-[10px]">✦</span>
              {t}
            </p>
          ))}
        </div>
      </aside>

      {/* ── Mobile sticky bottom bar ──────────────────── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink-deep border-t border-line px-5 py-4 flex items-center gap-3"
        role="complementary"
        aria-label="Booking summary"
      >
        <div className="flex-1 min-w-0">
          <p className="font-display text-[22px] font-bold tracking-tighter text-gold leading-none">{dept.price}</p>
          <p className="font-mono text-[9px] uppercase tracking-label text-clay mt-0.5">per person</p>
        </div>
        {WA_NUMBER && (
          <a
            href={waUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="h-10 w-10 shrink-0 rounded-full border flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            style={{ color: '#25D366', borderColor: '#25D36640', background: '#25D36610' }}
          >
            <WaIcon />
          </a>
        )}
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
export default function BookingCard({ departures, tourName }: Props) {
  const [guests, setGuests] = useState(2);
  const hasDepartures = departures && departures.length > 0;

  if (!hasDepartures) {
    return <RequestCard guests={guests} setGuests={setGuests} tourName={tourName} />;
  }

  return <DeparturesCard departures={departures} guests={guests} setGuests={setGuests} tourName={tourName} />;
}
