'use client';

import { useState, FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Fields = { name: string; email: string; tripType: string; dates: string; };
type Errors = Partial<Record<keyof Fields, string>>;

const TRIP_OPTIONS = [
  'Migration Safari',
  'Kilimanjaro Trek',
  'Honeymoon',
  'Beach Escape',
  'Private Fly-In Safari',
  'Group Adventure',
  'Custom / Not sure yet',
];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your full name.';
  if (!f.email.trim() || !/\S+@\S+\.\S+/.test(f.email)) e.email = 'Please enter a valid email address.';
  if (!f.tripType) e.tripType = 'Please select a trip type.';
  return e;
}

export default function Enquiry() {
  const ref = useReveal();
  const [fields, setFields] = useState<Fields>({ name: '', email: '', tripType: '', dates: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function set(key: keyof Fields, val: string) {
    setFields((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Fire-and-forget WhatsApp notification
    const msg = `New enquiry from ${fields.name} (${fields.email}). Trip: ${fields.tripType}. Dates: ${fields.dates || 'not specified'}.`;
    fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: msg }),
    }).catch(() => {});

    setSent(true);
  }

  return (
    <section className="ov-reveal" ref={ref} id="enquiry" aria-label="Enquiry">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        {/* Left — image */}
        <div
          className="relative min-h-[360px] lg:min-h-[640px] bg-ov-deep"
          style={{
            backgroundImage: 'url(/img/dest/kilimanjaro.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(16,14,10,0.6) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Right — form */}
        <div className="flex flex-col justify-center px-14 py-20 bg-ovl-bg">
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ovl-faint mb-6 block">
            Start planning
          </span>
          <h2 className="font-cormorant text-[clamp(28px,3vw,42px)] font-light leading-[1.15] tracking-[-0.02em] text-ovl-text mb-4">
            Let us compose your Tanzania
          </h2>
          <p className="font-jost text-[14px] font-light text-ovl-body mb-10 leading-relaxed max-w-sm">
            Tell us a little about your trip and we&apos;ll come back with ideas within one working day — no pressure, no generic quotes.
          </p>

          {sent ? (
            <div className="border border-[rgba(33,29,26,0.22)] px-8 py-12 text-center">
              <span className="block text-ovl-accent text-2xl mb-5">✦</span>
              <p className="font-cormorant text-[30px] font-light text-ovl-text mb-3">
                We&apos;ll be in touch very soon.
              </p>
              <p className="font-jost text-[13px] font-light text-ovl-body leading-relaxed max-w-xs mx-auto">
                Thank you, {fields.name}. A member of our team will reach out within one working day to start designing your Tanzania.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Safari enquiry form" className="flex flex-col gap-0">
              <p className="font-jost text-[11px] text-ovl-faint mb-8 tracking-[.04em]">
                ✦ 4 fields, 60 seconds — we&apos;ll ask the rest by email
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {/* Full name */}
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="enq-name" className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">
                    Full name
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jane Doe"
                    value={fields.name}
                    onChange={(e) => set('name', e.target.value)}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    aria-invalid={!!errors.name}
                    className="bg-transparent border-b border-[rgba(33,29,26,0.22)] pb-3 font-jost text-[14px] font-light text-ovl-text placeholder:text-ovl-faint/50 focus:outline-none focus:border-ovl-accent transition-colors duration-300"
                  />
                  {errors.name && (
                    <p id="err-name" role="alert" className="font-jost text-[11px] text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="enq-email" className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">
                    Email
                  </label>
                  <input
                    id="enq-email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="jane@example.com"
                    value={fields.email}
                    onChange={(e) => set('email', e.target.value)}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    aria-invalid={!!errors.email}
                    className="bg-transparent border-b border-[rgba(33,29,26,0.22)] pb-3 font-jost text-[14px] font-light text-ovl-text placeholder:text-ovl-faint/50 focus:outline-none focus:border-ovl-accent transition-colors duration-300"
                  />
                  {errors.email && (
                    <p id="err-email" role="alert" className="font-jost text-[11px] text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Trip type */}
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="enq-trip" className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">
                    Trip type
                  </label>
                  <select
                    id="enq-trip"
                    required
                    value={fields.tripType}
                    onChange={(e) => set('tripType', e.target.value)}
                    aria-describedby={errors.tripType ? 'err-trip' : undefined}
                    aria-invalid={!!errors.tripType}
                    className="bg-ovl-bg border-b border-[rgba(33,29,26,0.22)] pb-3 font-jost text-[14px] font-light text-ovl-text focus:outline-none focus:border-ovl-accent transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select…</option>
                    {TRIP_OPTIONS.map((o) => (
                      <option key={o} value={o} className="bg-ovl-bg">{o}</option>
                    ))}
                  </select>
                  {errors.tripType && (
                    <p id="err-trip" role="alert" className="font-jost text-[11px] text-red-400 mt-1">{errors.tripType}</p>
                  )}
                </div>

                {/* Travel dates */}
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="enq-dates" className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">
                    Travel dates <span className="normal-case tracking-normal font-light text-ovl-faint/70">(optional)</span>
                  </label>
                  <input
                    id="enq-dates"
                    type="text"
                    placeholder="e.g. July – August 2026"
                    value={fields.dates}
                    onChange={(e) => set('dates', e.target.value)}
                    className="bg-transparent border-b border-[rgba(33,29,26,0.22)] pb-3 font-jost text-[14px] font-light text-ovl-text placeholder:text-ovl-faint/50 focus:outline-none focus:border-ovl-accent transition-colors duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 self-start font-jost text-[12px] uppercase tracking-[.16em] text-ovl-text border border-[rgba(33,29,26,0.22)] px-8 py-4 transition-all duration-300 hover:border-ovl-accent hover:bg-ovl-accent hover:text-white"
              >
                Send my enquiry
              </button>

              <p className="mt-6 font-jost text-[11px] font-light text-ovl-faint tracking-[.02em]">
                ✦ No spam, ever. Your details are shared only with the guide assigned to your trip.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
