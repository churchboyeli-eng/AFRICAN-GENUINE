import Image from 'next/image';
import Link from 'next/link';
import type { RelatedTour } from '@/data/tours/types';

interface Props {
  tours: RelatedTour[];
  heading?: string;
  allHref?: string;
  allLabel?: string;
}

export default function RelatedTours({
  tours,
  heading = 'Related safaris',
  allHref = '/itineraries',
  allLabel = 'All safaris →',
}: Props) {
  return (
    <section aria-label={heading} className="py-[70px] border-t border-[rgba(33,29,26,0.22)] bg-ovl-bg">
      <div className="shell">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="eyebrow mb-3">You might also like</p>
            <h2 className="section-title">{heading}</h2>
          </div>
          <Link
            href={allHref}
            className="hidden sm:block font-body text-[13px] font-semibold text-ovl-accent hover:text-[#a83a20] transition-colors focus:outline-none focus-visible:underline"
          >
            {allLabel}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <article
              key={t.href}
              className="card-surface group overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#d24d2e]"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={t.image}
                  alt={`${t.name} safari in Tanzania`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-card-veil" />
                {t.price && (
                  <span className="absolute top-3 right-3 rounded-pill bg-ink/80 px-3 py-1 font-body text-[11px] font-bold text-gold backdrop-blur-sm border border-line">
                    {t.price}
                  </span>
                )}
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="eyebrow text-ovl-faint">{t.days}</span>
                  <span className="ml-auto font-mono text-[11px] text-ovl-accent">★ {t.rating}</span>
                </div>
                <h3 className="font-display text-[17px] font-bold tracking-tighter text-[#211d1a] leading-snug mb-2">
                  {t.name}
                </h3>
                <p className="text-[#5c5750] text-[13px] leading-relaxed mb-4 flex-1">{t.blurb}</p>
                <Link
                  href={t.href}
                  className="font-body text-[12px] font-semibold text-ovl-accent hover:text-[#a83a20] transition-colors focus:outline-none focus-visible:underline"
                  aria-label={`View itinerary for ${t.name}`}
                >
                  View itinerary →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
