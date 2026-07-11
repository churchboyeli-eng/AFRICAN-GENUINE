import type { TourFact } from '@/data/tours/types';

interface Props {
  facts: TourFact[];
}

export default function QuickFacts({ facts }: Props) {
  return (
    <section aria-label="Tour quick facts" className="shell py-6">
      <div className="card-surface">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-line">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 px-6 py-5">
              <dt className="eyebrow text-ovl-faint">{f.label}</dt>
              <dd className="font-display text-[22px] font-bold tracking-tighter text-[#211d1a] leading-none mt-1">
                {f.value}
              </dd>
              {f.sub && (
                <span className="font-body text-[11px] text-[#5c5750] mt-0.5">{f.sub}</span>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
