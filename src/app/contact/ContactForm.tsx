'use client';

import { useState, FormEvent } from 'react';

type Fields = {
  name: string;
  email: string;
  phone: string;
  tripType: string;
  dates: string;
  guests: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const tripOptions = [
  'Migration Safari',
  'Kilimanjaro Trek',
  'Honeymoon Safari',
  'Beach & Safari Combo',
  'Private Fly-In Safari',
  'Family Safari',
  'Group Adventure',
  'Custom / Not sure yet',
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your full name.';
  if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email))
    errors.email = 'Please enter a valid email address.';
  if (!fields.tripType) errors.tripType = 'Please select a trip type.';
  return errors;
}

const inputClass =
  'w-full rounded-card border bg-white/40 px-4 py-3.5 font-body text-[14px] text-[#211d1a] placeholder:text-[#7a746c] focus:outline-none transition border-[rgba(33,29,26,0.22)] focus:border-[#d24d2e]';

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: '', email: '', phone: '', tripType: '', dates: '', guests: '', message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof Fields, val: string) {
    setFields((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Notify team via WhatsApp Cloud API (silent fail — doesn't block form)
    const lines = [
      '📋 New enquiry — African Genuine Tours & Safaris',
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      `Trip type: ${fields.tripType}`,
      fields.dates ? `Dates: ${fields.dates}` : null,
      fields.guests ? `Guests: ${fields.guests}` : null,
      fields.message ? `Message: ${fields.message}` : null,
    ].filter(Boolean).join('\n');

    fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: lines }),
    }).catch(() => {/* silent */});

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <span className="font-display text-[48px] text-ovl-accent block mb-6" aria-hidden="true">✦</span>
        <h2 className="font-display text-[30px] font-extrabold tracking-tighter text-[#211d1a] mb-4">
          We&rsquo;ll be in touch very soon.
        </h2>
        <p className="text-[#5c5750] text-[15px] leading-relaxed max-w-md mx-auto">
          Thank you, {fields.name}. A member of our team will reach out within one working day to start designing your Tanzania experience — no pressure, no generic quotes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full name */}
        <div>
          <label htmlFor="c-name" className="eyebrow block mb-2">Full name</label>
          <input
            id="c-name" type="text" autoComplete="name" required
            value={fields.name} onChange={(e) => set('name', e.target.value)}
            aria-describedby={errors.name ? 'err-c-name' : undefined}
            aria-invalid={!!errors.name}
            placeholder="Jane Doe"
            className={inputClass}
          />
          {errors.name && <p id="err-c-name" role="alert" className="mt-1.5 text-[12px] text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="c-email" className="eyebrow block mb-2">Email address</label>
          <input
            id="c-email" type="email" autoComplete="email" required
            value={fields.email} onChange={(e) => set('email', e.target.value)}
            aria-describedby={errors.email ? 'err-c-email' : undefined}
            aria-invalid={!!errors.email}
            placeholder="jane@example.com"
            className={inputClass}
          />
          {errors.email && <p id="err-c-email" role="alert" className="mt-1.5 text-[12px] text-red-400">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="c-phone" className="eyebrow block mb-2">
            Phone / WhatsApp <span className="text-clay normal-case tracking-normal font-body text-[11px]">(optional)</span>
          </label>
          <input
            id="c-phone" type="tel" autoComplete="tel"
            value={fields.phone} onChange={(e) => set('phone', e.target.value)}
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </div>

        {/* Trip type */}
        <div>
          <label htmlFor="c-trip" className="eyebrow block mb-2">Trip type</label>
          <select
            id="c-trip" required
            value={fields.tripType} onChange={(e) => set('tripType', e.target.value)}
            aria-describedby={errors.tripType ? 'err-c-trip' : undefined}
            aria-invalid={!!errors.tripType}
            className="w-full rounded-card border bg-ovl-bg px-4 py-3.5 font-body text-[14px] text-[#211d1a] focus:outline-none transition border-[rgba(33,29,26,0.22)] focus:border-[#d24d2e] appearance-none"
          >
            <option value="" disabled>Select…</option>
            {tripOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.tripType && <p id="err-c-trip" role="alert" className="mt-1.5 text-[12px] text-red-400">{errors.tripType}</p>}
        </div>

        {/* Travel dates */}
        <div>
          <label htmlFor="c-dates" className="eyebrow block mb-2">
            Travel dates <span className="text-clay normal-case tracking-normal font-body text-[11px]">(optional)</span>
          </label>
          <input
            id="c-dates" type="text"
            value={fields.dates} onChange={(e) => set('dates', e.target.value)}
            placeholder="e.g. July – August 2026"
            className={inputClass}
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="c-guests" className="eyebrow block mb-2">
            Number of guests <span className="text-clay normal-case tracking-normal font-body text-[11px]">(optional)</span>
          </label>
          <input
            id="c-guests" type="text"
            value={fields.guests} onChange={(e) => set('guests', e.target.value)}
            placeholder="e.g. 2 adults, 1 child"
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="c-message" className="eyebrow block mb-2">
          Tell us about your trip <span className="text-clay normal-case tracking-normal font-body text-[11px]">(optional)</span>
        </label>
        <textarea
          id="c-message" rows={5}
          value={fields.message} onChange={(e) => set('message', e.target.value)}
          placeholder="Any special interests, budget range, parks you'd like to visit, or questions for our team…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn-gold w-full justify-center text-center text-[15px] py-5"
      >
        Send my enquiry
      </button>

      <p className="text-center text-[#7a746c] text-[12px]">
        We respond within one working day — no pressure, no generic quotes.
      </p>
    </form>
  );
}
