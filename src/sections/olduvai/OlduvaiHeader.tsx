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
  const [staticMenuOpen, setStaticMenuOpen] = useState(false);
  const [stickyMenuOpen, setStickyMenuOpen] = useState(false);
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
      <header className="absolute inset-x-0 top-0 z-40 px-5 md:px-14">
        {/* Tiny tracked label row */}
        <div className="flex items-center justify-center py-3 border-b border-[rgba(224,168,63,0.16)]">
          <span className="font-jost text-[9px] sm:text-[10px] uppercase tracking-[.3em] sm:tracking-[.44em] text-ov-brass text-center">
            Tanzania · Est. 2009
          </span>
        </div>

        {/* Main nav row */}
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link href="/" aria-label="African Genuine Travel — home" className="shrink-0">
            <Image
              src="/img/logo/logo-dark.png"
              alt="African Genuine Travel"
              width={110}
              height={64}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setStaticMenuOpen((v) => !v)}
            className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-pill border border-[rgba(224,168,63,0.4)] text-ov-brass"
            aria-label={staticMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={staticMenuOpen}
            aria-controls="olduvai-static-menu"
          >
            <span className="sr-only">{staticMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              {staticMenuOpen ? (
                <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M0 1H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M0 7H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          id="olduvai-static-menu"
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            staticMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
          style={{ background: 'rgba(21,15,8,0.92)' }}
        >
          <ul className="flex flex-col divide-y divide-[rgba(224,168,63,0.16)]">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  onClick={() => setStaticMenuOpen(false)}
                  className="block px-2 py-4 font-jost text-[15px] font-light tracking-[.04em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
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
        <div className="flex items-center justify-between px-5 md:px-14 py-4">
          <Link href="/" aria-label="African Genuine Travel — home" className="shrink-0">
            <Image
              src="/img/logo/logo-dark.png"
              alt="African Genuine Travel"
              width={88}
              height={51}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <span className="hidden md:inline font-jost text-[11px] font-light tracking-[.06em] text-ov-muted">
              3 departures left · Aug–Oct 2026
            </span>
            <a
              href="/contact"
              className="font-jost text-[12px] font-light tracking-[.08em] text-ov-brass border border-ov-brass px-4 md:px-5 py-2 transition-all duration-300 hover:bg-ov-brass hover:text-ov-deep"
            >
              Enquire
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setStickyMenuOpen((v) => !v)}
              className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-pill border border-ov-brass/40 text-ov-brass"
              aria-label={stickyMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={stickyMenuOpen}
              aria-controls="olduvai-sticky-menu"
            >
              <span className="sr-only">{stickyMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                {stickyMenuOpen ? (
                  <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M0 1H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M0 7H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="olduvai-sticky-menu"
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            stickyMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col divide-y divide-[rgba(224,168,63,0.16)]">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  onClick={() => setStickyMenuOpen(false)}
                  className="block px-5 py-4 font-jost text-[15px] font-light tracking-[.04em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
