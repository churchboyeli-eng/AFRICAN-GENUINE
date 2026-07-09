const LINKS = [
  { label: 'Day Trips',   href: '/day-trips' },
  { label: 'Safaris',     href: '/itineraries' },
  { label: 'Kilimanjaro', href: '/kilimanjaro' },
  { label: 'Honeymoon',   href: '/honeymoon' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
];

export default function OlduvaiFooter() {
  return (
    <footer className="bg-ov-deep border-t border-[rgba(176,141,87,0.14)] px-14 py-16">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Wordmark */}
        <a href="/" className="font-cormorant text-[26px] font-light tracking-[-0.01em] text-ov-ivory leading-none">
          Genius Safaris
        </a>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="ov-link font-jost text-[10px] uppercase tracking-[.24em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="font-jost text-[10px] uppercase tracking-[.16em] text-ov-muted/50">
          © {new Date().getFullYear()} Genius Safaris
        </p>
      </div>
    </footer>
  );
}
