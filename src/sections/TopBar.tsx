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
  return (
    <header>
      <div className="gold-rule" aria-hidden="true" />
      <nav
        className="shell flex items-center justify-between py-5"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded" aria-label="African Genuine Travel home">
          <Image
            src="/img/logo/logo-dark.png"
            alt="African Genuine Travel"
            width={110}
            height={64}
            priority
            className="h-11 w-auto"
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

        {/* Mobile menu button (progressive enhancement — expand later) */}
        <button
          className="lg:hidden rounded-pill border border-line px-4 py-2.5 font-body text-[12px] font-bold text-gold"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
