import type { TourReview } from '@/data/tours/types';

interface Props {
  reviews: TourReview[];
  score?: string;
  count?: string;
}

export default function TourReviewsSection({ reviews, score = '4.96', count = '214' }: Props) {
  return (
    <section aria-label="Guest reviews" className="mt-10">
      <div className="flex items-baseline justify-between mb-6 gap-4">
        <h2 className="section-title">What guests say</h2>
        <div className="shrink-0 text-right">
          <span className="font-display text-[20px] font-bold tracking-tighter text-ovl-accent">{score}</span>
          <span className="font-mono text-[10px] uppercase tracking-label text-[#7a746c] ml-2 block sm:inline">
            from {count} trips
          </span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {reviews.map((r, i) => (
          <blockquote key={i} className="card-surface p-7 flex flex-col gap-5">
            <div className="flex gap-0.5" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-ovl-accent text-[14px]" aria-hidden="true">★</span>
              ))}
            </div>
            <p className="font-display text-[18px] font-bold tracking-tighter text-[#211d1a] leading-snug flex-1">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer className="flex items-center gap-3 border-t border-[rgba(33,29,26,0.22)] pt-4">
              <div
                className="h-9 w-9 rounded-full bg-[#d24d2e]/10 border border-[#d24d2e]/30 shrink-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-display text-[13px] font-bold text-[#d24d2e]">
                  {r.author[0]}
                </span>
              </div>
              <div>
                <p className="font-body text-[13px] font-semibold text-[#211d1a] leading-none">{r.author}</p>
                {r.date && (
                  <p className="font-mono text-[10px] uppercase tracking-label text-[#7a746c] mt-1">{r.date}</p>
                )}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
