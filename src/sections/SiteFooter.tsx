import NewsletterForm from '@/components/NewsletterForm';

const exploreLinks = [
  { label: 'All itineraries', href: '/itineraries' },
  { label: 'Kilimanjaro routes', href: '#kilimanjaro' },
  { label: 'Honeymoon escapes', href: '#honeymoon' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'The Journal', href: '#journal' },
];

const companyLinks = [
  { label: 'Our story', href: '#' },
  { label: 'Meet the team', href: '#' },
  { label: 'Responsible travel', href: '#' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact us', href: '#enquiry' },
];

const policyLinks = [
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Cookies Policy', href: '/cookies' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Editorial Policy', href: '/editorial' },
  { label: 'Sustainability Policy', href: '/sustainability' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink-deep border-t border-line" aria-label="Site footer">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-[20px] font-extrabold tracking-tighter text-cream">AFRICAN GENUINE</span>
              <span className="font-mono text-[8px] uppercase tracking-wider2 text-gold">TOURS &amp; SAFARIS</span>
            </div>
            <p className="text-sand text-[13px] leading-relaxed max-w-[220px]">
              Tanzanian-owned. Tailor-made. Every itinerary built from scratch for the way you travel.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore links">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3" role="list">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sand text-[13px] hover:text-cream transition-colors focus:outline-none focus-visible:underline focus-visible:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3" role="list">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sand text-[13px] hover:text-cream transition-colors focus:outline-none focus-visible:underline focus-visible:text-gold">
                    {l.label}
                  </a>
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

        {/* Extended Policy Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {policyLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright row */}
        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-clay text-[12px]">
            © {new Date().getFullYear()} African Genuine Tours &amp; Safaris Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy policy', 'Terms of use', 'Cookie settings'].map((t) => (
              <a key={t} href="#" className="text-clay text-[12px] hover:text-sand transition-colors focus:outline-none focus-visible:underline">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
