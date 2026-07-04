import Link from 'next/link';

export type GridCard = {
  id: number | string;
  slug: string;
  title: string;
  days: number;
  parks: string[];
  best_for: string;
};

export default function ItineraryCard({ itin }: { itin: GridCard }) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold h-full">
      <div className="p-6 flex flex-col flex-1">
        {/* Days badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="rounded-pill bg-gold/10 border border-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-gold">
            {itin.days} {itin.days === 1 ? 'Day' : 'Days'}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-[19px] font-bold tracking-tighter text-cream leading-snug mb-2">
          {itin.title}
        </h3>

        {/* Best for */}
        <p className="text-[13px] text-gold-bright font-body italic mb-4 leading-snug">
          {itin.best_for}
        </p>

        {/* Parks */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {itin.parks.map((p) => (
            <span
              key={p}
              className="rounded-pill border border-line px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-label text-sand"
            >
              {p}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/itineraries/${itin.slug}`}
          className="font-body text-[12px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
          aria-label={`View itinerary: ${itin.title}, ${itin.days} days`}
        >
          View itinerary →
        </Link>
      </div>
    </article>
  );
}
