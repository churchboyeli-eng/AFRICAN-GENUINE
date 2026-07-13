'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollRaf } from '@/hooks/useScrollRaf';

const NAV = [
  { label: 'Day Trips',   href: '/day-trips' },
  { label: 'Safaris',     href: '/itineraries' },
  { label: 'Itineraries', href: '/itineraries' },
  { label: 'Honeymoon',   href: '/honeymoon' },
  { label: 'Kilimanjaro', href: '/kilimanjaro' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
];

export default function OlduvaiHeader() {
  const [sticky, setSticky] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handleScroll = useCallback((y: number) => {
    setSticky(y > 640);
  }, []);

  useScrollRaf(handleScroll);

  return (
    <>
      {/* ── Editorial header (static, transparent over hero) ── */}
      <header className="absolute inset-x-0 top-0 z-40 px-14">
        {/* Tiny tracked label row */}
        <div className="flex items-center justify-center py-3 border-b border-[rgba(224,168,63,0.16)]">
          <span className="font-jost text-[10px] uppercase tracking-[.44em] text-ov-brass">
            Tanzania · Est. 2009
          </span>
        </div>

        {/* Main nav row */}
        <div className="flex items-baseline justify-between py-5">
          <Link href="/" aria-label="African Genuine Travel — home">
            <Image
              src="/img/logo/logo-dark.png"
              alt="African Genuine Travel"
              width={110}
              height={64}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-baseline gap-10">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="ov-link font-jost text-[13px] font-light tracking-[.04em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Sticky header ── */}
      <div
        aria-hidden={!sticky}
        className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(224,168,63,0.18)] backdrop-blur-md transition-transform duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          background: 'rgba(21,15,8,0.88)',
          transform: sticky ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="flex items-center justify-between px-14 py-4">
          <Link href="/" aria-label="African Genuine Travel — home">
            <Image
              src="/img/logo/logo-dark.png"
              alt="African Genuine Travel"
              width={88}
              height={51}
              className="h-9 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <span className="font-jost text-[11px] font-light tracking-[.06em] text-ov-muted">
              3 departures left · Aug–Oct 2026
            </span>
            <a
              href="/contact"
              className="font-jost text-[12px] font-light tracking-[.08em] text-ov-brass border border-ov-brass px-5 py-2 transition-all duration-300 hover:bg-ov-brass hover:text-ov-deep"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
