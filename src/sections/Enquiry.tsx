'use client';

import { useState, FormEvent } from 'react';

type Fields = {
  name: string;
  email: string;
  tripType: string;
  dates: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const tripOptions = [
  'Migration Safari',
  'Kilimanjaro Trek',
  'Honeymoon',
  'Beach Escape',
  'Private Fly-In Safari',
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

export default function Enquiry() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', tripType: '', dates: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof Fields, val: string) {
    setFields((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Stub — wire to real API / form provider
    setSubmitted(true);
  }

  return (
    <section id="enquiry" className="py-[70px] bg-ink-deep/80" aria-label="Enquiry form">
      <div className="shell">
        <div className="mx-auto max-w-2xl card-surface p-10 lg:p-14">
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-4xl mb-6 block" aria-hidden="true">✦</span>
              <h2 className="font-display text-[30px] font-extrabold tracking-tighter text-cream mb-3">
                We&rsquo;ll be in touch very soon.
              </h2>
              <p className="text-sand text-[15px] leading-relaxed max-w-md mx-auto">
                Thank you, {fields.name}. A member of our team will reach out within one working day to start designing your Tanzania.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <p className="eyebrow mb-3">Start planning</p>
                <h2 className="font-display text-[32px] lg:text-[38px] font-extrabold tracking-tighter text-cream leading-tight mb-3">
                  Let&rsquo;s design your Tanzania
                </h2>
                <p className="text-sand text-[15px] leading-relaxed max-w-md mx-auto">
                  Tell us a little about your trip and we&rsquo;ll come back with ideas within one working day — no pressure, no generic quotes.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate aria-label="Safari enquiry form">
                <div className="grid gap-5 sm:grid-cols-2 mb-5">
                  {/* Full name */}
                  <div>
                    <label htmlFor="enq-name" className="eyebrow block mb-2">
                      Full name
                    </label>
                    <input
                      id="enq-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={fields.name}
                      onChange={(e) => set('name', e.target.value)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      aria-invalid={!!errors.name}
                      placeholder="Jane Doe"
                      className="w-full rounded-card border bg-white/5 px-4 py-3.5 font-body text-[14px] text-cream placeholder:text-clay focus:outline-none transition border-line focus:border-gold"
                    />
                    {errors.name && (
                      <p id="err-name" role="alert" className="mt-1.5 text-[12px] text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enq-email" className="eyebrow block mb-2">
                      Email
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={fields.email}
                      onChange={(e) => set('email', e.target.value)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      aria-invalid={!!errors.email}
                      placeholder="jane@example.com"
                      className="w-full rounded-card border bg-white/5 px-4 py-3.5 font-body text-[14px] text-cream placeholder:text-clay focus:outline-none transition border-line focus:border-gold"
                    />
                    {errors.email && (
                      <p id="err-email" role="alert" className="mt-1.5 text-[12px] text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Trip type */}
                  <div>
                    <label htmlFor="enq-trip" className="eyebrow block mb-2">
                      Trip type
                    </label>
                    <select
                      id="enq-trip"
                      required
                      value={fields.tripType}
                      onChange={(e) => set('tripType', e.target.value)}
                      aria-describedby={errors.tripType ? 'err-trip' : undefined}
                      aria-invalid={!!errors.tripType}
                      className="w-full rounded-card border bg-[#1a160d] px-4 py-3.5 font-body text-[14px] text-cream focus:outline-none transition border-line focus:border-gold appearance-none"
                    >
                      <option value="" disabled>Select…</option>
                      {tripOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    {errors.tripType && (
                      <p id="err-trip" role="alert" className="mt-1.5 text-[12px] text-red-400">
                        {errors.tripType}
                      </p>
                    )}
                  </div>

                  {/* Travel dates */}
                  <div>
                    <label htmlFor="enq-dates" className="eyebrow block mb-2">
                      Travel dates <span className="text-clay normal-case tracking-normal font-body text-[11px]">(optional)</span>
                    </label>
                    <input
                      id="enq-dates"
                      type="text"
                      value={fields.dates}
                      onChange={(e) => set('dates', e.target.value)}
                      placeholder="e.g. July – August 2025"
                      className="w-full rounded-card border bg-white/5 px-4 py-3.5 font-body text-[14px] text-cream placeholder:text-clay focus:outline-none transition border-line focus:border-gold"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold w-full justify-center text-center text-[15px] py-5"
                >
                  Send my enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
