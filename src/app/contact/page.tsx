import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us — African Genuine Tours & Safaris',
  description:
    'Start planning your Tanzania safari or Kilimanjaro climb with African Genuine Tours & Safaris. Send us an enquiry and we respond within one working day.',
};

const contactDetails = [
  {
    label: 'Email us',
    value: 'info@africangenuinesafaris.com',
    sub: 'We reply within one working day',
    href: 'mailto:info@africangenuinesafaris.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+255 (Tanzania)',
    sub: 'Available 7 days a week',
    href: 'https://wa.me/255',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    label: 'Based in',
    value: 'Arusha, Tanzania',
    sub: 'Gateway to the northern safari circuit',
    href: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Office hours',
    value: 'Mon – Sat, 8 am – 6 pm EAT',
    sub: 'East Africa Time (UTC+3)',
    href: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <main>
        {/* Hero band */}
        <section className="py-20 border-b border-line" aria-label="Contact page header">
          <div className="shell text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="font-display text-[clamp(36px,5vw,60px)] font-extrabold tracking-tighter text-cream leading-tight mb-5">
              Start planning your Tanzania
            </h1>
            <p className="text-sand text-[17px] leading-relaxed">
              Tell us what you&rsquo;re dreaming of — we&rsquo;ll come back with ideas within one working day. No pressure, no generic quotes, no group departures.
            </p>
          </div>
        </section>

        {/* Main two-column layout */}
        <section className="py-[70px]" aria-label="Contact form and details">
          <div className="shell">
            <div className="grid gap-16 lg:grid-cols-[1fr_420px] items-start">

              {/* ── Left: form ────────────────────────────────── */}
              <div className="card-surface p-8 lg:p-12">
                <h2 className="font-display text-[26px] font-bold tracking-tighter text-cream mb-2">
                  Send us an enquiry
                </h2>
                <p className="text-sand text-[14px] leading-relaxed mb-8">
                  Fill in what you know — we&rsquo;ll handle the rest. Every itinerary is designed from scratch around you.
                </p>
                <ContactForm />
              </div>

              {/* ── Right: contact details ─────────────────────── */}
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="card-surface p-6 flex items-start gap-5">
                    <span className="text-gold mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <p className="eyebrow mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-display text-[17px] font-bold tracking-tighter text-cream hover:text-gold transition-colors focus:outline-none focus-visible:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-display text-[17px] font-bold tracking-tighter text-cream">
                          {item.value}
                        </p>
                      )}
                      <p className="text-clay text-[12px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Promise card */}
                <div className="card-surface p-6 border-l-2 border-gold">
                  <p className="eyebrow mb-3">Our promise</p>
                  <ul className="space-y-2.5">
                    {[
                      'No-obligation quote within 24 hours',
                      '100% tailor-made — no group tours',
                      'Free date and itinerary changes',
                      'Tanzanian-owned and operated',
                    ].map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px] text-sand">
                        <span className="text-gold text-[10px] mt-0.5 shrink-0">✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
