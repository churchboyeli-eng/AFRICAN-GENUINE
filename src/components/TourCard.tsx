import Image from 'next/image';
import Link from 'next/link';
import { Tour } from '@/data/content';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold">
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={tour.image}
          alt={`${tour.name} — ${tour.category} in Tanzania`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-card-veil" />
        {/* Price tag */}
        <span className="absolute top-4 right-4 rounded-pill bg-ink/80 px-3 py-1.5 font-body text-[11px] font-bold text-gold backdrop-blur-sm border border-line">
          {tour.price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category + rating row */}
        <div className="mb-2 flex items-center gap-2">
          <span className="eyebrow">{tour.category}</span>
          <span className="ml-auto font-mono text-[11px] text-gold">★ {tour.rating}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-[18px] font-bold tracking-tighter text-cream leading-snug mb-2">
          {tour.name}
        </h3>

        {/* Blurb */}
        <p className="text-sand text-[13px] leading-relaxed mb-4">{tour.blurb}</p>

        {/* Highlights */}
        <ul className="mb-5 space-y-1.5" aria-label="Trip highlights">
          {tour.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[12px] text-sand">
              <span className="text-gold mt-0.5 shrink-0 text-[10px]">✦</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-line">
          <span className="eyebrow text-clay">{tour.days}</span>
          <Link
            href={tour.href}
            className="font-body text-[12px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
            aria-label={`View full itinerary for ${tour.name}`}
          >
            View itinerary →
          </Link>
        </div>
      </div>
    </article>
  );
}
