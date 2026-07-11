import FadeUp from '@/components/FadeUp';

const STATS: { num: string; label: string }[] = [
  { num: '5',    label: 'Years in Tanzania' },
  { num: '20',   label: 'Signature itineraries' },
  { num: '7',    label: 'Key ecosystems' },
  { num: '52',   label: 'Guests hosted every year' },
  { num: '100%', label: 'Locally guided' },
  { num: '1',    label: 'Mission: real Africa' },
];

export default function StatsBand() {
  return (
    <section className="py-24 border-b border-[rgba(33,29,26,0.22)] bg-ovl-bg" aria-label="Company statistics">
      <div className="shell">
        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[rgba(33,29,26,0.22)] border border-[rgba(33,29,26,0.22)] rounded-card-lg overflow-hidden">
            {STATS.map(({ num, label }) => (
              <div
                key={label}
                className="bg-white/40 px-6 py-10 flex flex-col items-center text-center gap-3"
              >
                <span className="font-display text-[clamp(34px,4vw,52px)] font-extrabold tracking-tightest text-ovl-accent leading-none">
                  {num}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-label text-ovl-faint leading-snug max-w-[80px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
