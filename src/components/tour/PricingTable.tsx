import type { TourDeparture } from '@/data/tours/types';

interface Props {
  departures?: TourDeparture[];
}

export default function PricingTable({ departures }: Props) {
  /* ── No real departures: show enquire banner ─────────── */
  if (!departures || departures.length === 0) {
    return (
      <section id="departures" aria-label="Departure dates and pricing" className="mt-10">
        <h2 className="section-title mb-6">Departures &amp; Pricing</h2>
        <div className="card-surface p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-[18px] font-bold tracking-tighter text-cream mb-2">
              Departures tailored to you
            </p>
            <p className="text-sand text-[14px] leading-relaxed max-w-md">
              We design departure windows around your preferred travel month and group size — enquire for 2026/27 availability and pricing.
            </p>
          </div>
          <a
            href="/contact"
            className="btn-gold whitespace-nowrap shrink-0"
          >
            Enquire for dates
          </a>
        </div>
      </section>
    );
  }

  /* ── Real departures: full table ─────────────────────── */
  return (
    <section id="departures" aria-label="Departure dates and pricing" className="mt-10">
      <h2 className="section-title mb-6">Departures &amp; pricing</h2>
      <div className="card-surface overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="eyebrow text-clay px-6 py-4 font-medium">Departure window</th>
              <th className="eyebrow text-clay px-6 py-4 font-medium hidden sm:table-cell">Note</th>
              <th className="eyebrow text-clay px-6 py-4 font-medium">Availability</th>
              <th className="eyebrow text-clay px-6 py-4 font-medium text-right">Price pp</th>
              <th className="px-4 py-4 hidden md:table-cell" />
            </tr>
          </thead>
          <tbody>
            {departures.map((d, i) => (
              <tr key={i} className="border-b border-line last:border-none hover:bg-white/[.02] transition-colors">
                <td className="px-6 py-4 font-body text-[14px] font-semibold text-cream">{d.window}</td>
                <td className="px-6 py-4 font-body text-[13px] text-sand hidden sm:table-cell">{d.note}</td>
                <td className="px-6 py-4">
                  <span
                    className="rounded-pill px-3 py-1 font-mono text-[10px] uppercase tracking-label"
                    style={{
                      color: d.availColor,
                      border: `1px solid ${d.availColor}33`,
                      background: `${d.availColor}11`,
                    }}
                  >
                    {d.avail}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-display text-[18px] font-bold tracking-tighter text-gold">
                  {d.price}
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <a
                    href="/contact"
                    className="rounded-pill border border-gold/40 px-4 py-2 font-body text-[11px] font-bold text-gold hover:bg-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold whitespace-nowrap"
                  >
                    Reserve
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
