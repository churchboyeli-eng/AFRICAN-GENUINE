import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import KilimanjaroGrid from './KilimanjaroGrid';

export const metadata = {
  title: 'Kilimanjaro Climbs — African Genuine Tours & Safaris',
  description:
    '6 Kilimanjaro routes — Machame, Lemosho, Rongai, Northern Circuit, Umbwe and Marangu. Private climbs with Tanzanian guides, all park fees, tents, meals and Moshi hotel included.',
};

const kiliNotes = [
  'All climbs are private — your group only, your pace',
  'Chief guide, assistant guide, cook and porters included on every route',
  'All national park fees, camping/hut fees and rescue levy included',
];

export default function KilimanjaroPage() {
  return (
    <>
      <TopBar />
      <main className="bg-ovl-bg">
        {/* Hero band */}
        <section className="py-20 border-b border-[rgba(33,29,26,0.22)]" aria-label="Kilimanjaro climbs header">
          <div className="shell text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Roof of Africa</p>
            <h1 className="font-display text-[clamp(36px,5vw,60px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight mb-5">
              6 Kilimanjaro routes
            </h1>
            <p className="text-[#5c5750] text-[17px] leading-relaxed mb-8">
              From the classic Machame 7-day to the quieter Northern Circuit at 10 — every climb is an original African Genuine Tours &amp; Safaris programme, run privately for your group with experienced Tanzanian guides.
            </p>
            <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              {kiliNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-left text-[12px] text-[#5c5750] max-w-xs">
                  <span className="text-ovl-accent mt-0.5 shrink-0">✦</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Filterable grid — client island */}
        <KilimanjaroGrid />
      </main>
      <SiteFooter />
    </>
  );
}
