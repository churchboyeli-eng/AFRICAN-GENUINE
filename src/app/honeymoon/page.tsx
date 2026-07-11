import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import HoneymoonGrid from './HoneymoonGrid';

export const metadata = {
  title: 'Honeymoon Safaris — African Genuine Tours & Safaris',
  description:
    '2 tailor-made Tanzania honeymoon itineraries — fly-in safari from Zanzibar or the complete bush-and-beach experience. Private guides, no group tours.',
};

const notes = [
  'Every itinerary is private — your guide, your 4×4, your pace',
  'Internal flights included so you spend more time in the bush',
  'Safari and beach combined in a single seamless journey',
];

export default function HoneymoonPage() {
  return (
    <>
      <TopBar />
      <main className="bg-ovl-bg">
        {/* Hero band */}
        <section className="py-20 border-b border-[rgba(33,29,26,0.22)]" aria-label="Honeymoon safaris header">
          <div className="shell text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Tanzania for two</p>
            <h1 className="font-display text-[clamp(36px,5vw,60px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight mb-5">
              Honeymoon safaris
            </h1>
            <p className="text-[#5c5750] text-[17px] leading-relaxed mb-8">
              Two itineraries designed for couples — a five-day fly-in safari from Zanzibar, or the full twelve-day bush-and-beach journey across Tanzania&rsquo;s northern parks and the Indian Ocean coast.
            </p>
            <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-left text-[12px] text-[#5c5750] max-w-xs">
                  <span className="text-ovl-accent mt-0.5 shrink-0">✦</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Filterable grid */}
        <HoneymoonGrid />
      </main>
      <SiteFooter />
    </>
  );
}
