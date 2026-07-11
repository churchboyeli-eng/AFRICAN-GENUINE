import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import ItineraryGrid from './ItineraryGrid';
import { itineraryNotes } from '@/data/itineraries';

export const metadata = {
  title: 'All Itineraries — African Genuine Tours & Safaris',
  description:
    '21 original Tanzania safari itineraries from 1 to 14 days — fly-in day trips, river safaris, migration crossings, honeymoons and more.',
};

export default function ItinerariesPage() {
  return (
    <>
      <TopBar />
      <main className="bg-ovl-bg">
        {/* Hero band */}
        <section className="py-20 border-b border-[rgba(33,29,26,0.22)]" aria-label="Itineraries header">
          <div className="shell text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Explore all programmes</p>
            <h1 className="font-display text-[clamp(36px,5vw,60px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight mb-5">
              21 Tanzania itineraries
            </h1>
            <p className="text-[#5c5750] text-[17px] leading-relaxed mb-8">
              From a 3-day introduction to a 14-day north-to-south odyssey — every trip is an original African Genuine Tours &amp; Safaris programme, customised around your dates and group.
            </p>
            {/* Flexibility notes */}
            <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              {itineraryNotes.slice(1).map((note) => (
                <li key={note} className="flex items-start gap-2 text-left text-[12px] text-[#5c5750] max-w-xs">
                  <span className="text-ovl-accent mt-0.5 shrink-0">✦</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Filterable grid — client island */}
        <ItineraryGrid />
      </main>
      <SiteFooter />
    </>
  );
}
