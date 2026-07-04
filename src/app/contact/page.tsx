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
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '255'}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
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
