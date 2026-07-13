'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Day Trips',   href: '/day-trips' },
  { label: 'Safaris',     href: '/itineraries' },
  { label: 'Itineraries', href: '/itineraries' },
  { label: 'Honeymoon',   href: '/honeymoon' },
  { label: 'Kilimanjaro', href: '/kilimanjaro' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="gold-rule" aria-hidden="true" />
      <nav
        className="shell flex items-center justify-between py-4 md:py-5"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded shrink-0" aria-label="African Genuine Travel home">
          <Image
            src="/img/logo/logo-dark.png"
            alt="African Genuine Travel"
            width={110}
            height={64}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-[13px] font-semibold text-sand transition-colors hover:text-cream focus:outline-none focus-visible:underline focus-visible:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/contact" className="rounded-pill bg-[#e0a83f] px-7 py-4 font-body text-[13px] font-bold text-[#150f08] transition hover:bg-[#d19c35] hidden sm:inline-flex items-center">
          Plan My Safari
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-pill border border-line text-gold"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            {open ? (
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
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-line bg-ink transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-[600px]' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col divide-y divide-line" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-body text-[15px] font-semibold text-sand transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 py-5">
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-pill bg-[#e0a83f] px-7 py-4 font-body text-[13px] font-bold text-[#150f08] transition hover:bg-[#d19c35]"
          >
            Plan My Safari
          </a>
        </div>
      </div>
    </header>
  );
}
