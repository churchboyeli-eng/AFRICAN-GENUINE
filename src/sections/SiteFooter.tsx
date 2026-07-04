import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

const exploreLinks = [
  { label: 'All itineraries',    href: '/itineraries' },
  { label: 'Kilimanjaro routes', href: '/kilimanjaro' },
  { label: 'Honeymoon escapes',  href: '/itineraries' },
];

const companyLinks = [
  { label: 'Our story',          href: '/about' },
  { label: 'Meet the team',      href: '/about' },
  { label: 'Responsible travel', href: '/about' },
  { label: 'Contact us',         href: '/#enquiry' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink-deep border-t border-line" aria-label="Site footer">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-baseline gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
              <span className="font-display text-[20px] font-extrabold tracking-tighter text-cream">AFRICAN GENUINE</span>
              <span className="font-mono text-[8px] uppercase tracking-wider2 text-gold">TOURS &amp; SAFARIS</span>
            </Link>
            <p className="text-sand text-[13px] leading-relaxed max-w-[220px]">
              Tanzanian-owned. Tailor-made. Every itinerary built from scratch for the way you travel.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore links">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3" role="list">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sand text-[13px] hover:text-cream transition-colors focus:outline-none focus-visible:underline focus-visible:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3" role="list">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sand text-[13px] hover:text-cream transition-colors focus:outline-none focus-visible:underline focus-visible:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <p className="eyebrow mb-5">Stay inspired</p>
            <p className="text-sand text-[13px] leading-relaxed mb-4">
              Migration timing, summit guides, and quiet corners of Tanzania — monthly.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright row */}
        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-clay text-[12px]">
            © {new Date().getFullYear()} African Genuine Tours &amp; Safaris Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
              About us
            </Link>
            <Link href="/contact" className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
