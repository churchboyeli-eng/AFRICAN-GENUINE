import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import { WA_NUMBER, waUrl } from '@/config/whatsapp';

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
            <p className="eyebrow mb-5 !text-gold">Explore</p>
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
            <p className="eyebrow mb-5 !text-gold">Company</p>
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
            <p className="eyebrow mb-5 !text-gold">Stay inspired</p>
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
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
              About us
            </Link>
            <Link href="/contact" className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
              Contact
            </Link>
            {WA_NUMBER && (
              <a
                href={waUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="text-clay hover:text-[#25D366] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] rounded"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
