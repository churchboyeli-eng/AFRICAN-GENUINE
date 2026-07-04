import FadeUp from '@/components/FadeUp';

const AWARDS = [
  {
    year: '2024',
    body: 'Safari Awards East Africa',
    title: 'Best Cultural Safari Operator',
  },
  {
    year: '2024',
    body: 'African Travel & Tourism Association',
    title: 'Sustainability Excellence Award',
  },
  {
    year: '2023',
    body: 'SafariBookings Travellers Choice',
    title: 'Top Rated Tanzania Operator',
  },
  {
    year: '2023',
    body: 'Tanzania Tourism Board',
    title: 'Responsible Tourism Recognition',
  },
];

export default function Awards() {
  return (
    <section className="py-24 border-b border-line" aria-label="Awards and recognition">
      <div className="shell">
        <FadeUp>
          <p className="eyebrow mb-4 text-center">Recognition</p>
          <h2 className="section-title text-center mb-16">Honoured for what we do right.</h2>
        </FadeUp>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((award, i) => (
            <FadeUp key={award.title} delay={i * 0.08}>
              <div className="card-surface p-8 h-full flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-clay">{award.year}</span>
                  <span className="text-gold text-[18px]">✦</span>
                </div>
                <h3 className="font-display text-[19px] font-bold tracking-tighter text-cream leading-snug flex-1">
                  {award.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-label text-clay leading-snug">
                  {award.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
