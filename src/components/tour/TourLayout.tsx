import Link from 'next/link';
import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import TourBreadcrumb from './TourBreadcrumb';
import TourHero from './TourHero';
import QuickFacts from './QuickFacts';
import SectionTabs from './SectionTabs';
import BookingCard from './BookingCard';
import PricingTable from './PricingTable';
import Gallery from './Gallery';
import TourReviewsSection from './TourReviewsSection';
import RelatedTours from './RelatedTours';
import type { Tour } from '@/data/tours/types';

interface Props {
  tour: Tour;
}

export default function TourLayout({ tour }: Props) {
  const base = tour.basePath ?? '/itineraries';
  const isKili = base === '/kilimanjaro';
  return (
    <>
      <TopBar />
      {/* pb-24 reserves space for the mobile sticky bottom bar */}
      <main className="pb-24 lg:pb-0 bg-ovl-bg">
        {tour.breadcrumb && (
          <TourBreadcrumb crumbs={tour.breadcrumb} current={tour.name} />
        )}

        <TourHero
          image={tour.heroImage}
          alt={tour.name}
          tags={tour.heroTags}
          tagline={tour.tagline ?? tour.name}
          subhead={tour.subhead}
        />

        {tour.facts && tour.facts.length > 0 && (
          <QuickFacts facts={tour.facts} />
        )}

        {/* Two-column body: main content + sticky booking card */}
        <section className="shell mt-8 mb-0">
          <div className="grid gap-8 items-start lg:grid-cols-[1fr_372px]">

            {/* ── Left column ─────────────────────────── */}
            <div className="min-w-0">
              <SectionTabs
                overviewText={tour.overviewText}
                highlights={tour.highlights}
                startingLocations={tour.startingLocations}
                parksAndWildlife={tour.parksAndWildlife}
                bestTime={tour.bestTime}
                whyBook={tour.whyBook}
                days={tour.days}
                notes={tour.notes}
                routeLabel={tour.routeLabel}
                routeStops={tour.routeStops}
                routeDistance={tour.routeDistance}
                routeNote={tour.routeNote}
                included={tour.included}
                excluded={tour.excluded}
                lodges={tour.lodges}
              />

              {/* Pricing table (or enquire banner if no real departures) */}
              <PricingTable departures={tour.departures} />

              {tour.galleryImages && tour.galleryImages.length > 0 && (
                <Gallery tiles={tour.galleryImages} />
              )}

              {tour.reviews && tour.reviews.length > 0 && (
                <TourReviewsSection
                  reviews={tour.reviews}
                  score={tour.reviewScore}
                  count={tour.reviewCount}
                />
              )}
            </div>

            {/* ── Right column: sticky booking / request card ── */}
            <div className="hidden lg:block">
              <div className="sticky top-6">
                <BookingCard departures={tour.departures} tourName={tour.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile booking card (below main content, above footer) */}
        <div id="book-mobile" className="lg:hidden shell mt-10">
          <BookingCard departures={tour.departures} tourName={tour.name} />
        </div>

        {/* Prev / Next nav */}
        {(tour.prev || tour.next) && (
          <nav className="border-t border-[rgba(33,29,26,0.22)]" aria-label="Navigate between itineraries">
            <div className="shell py-8 flex justify-between gap-4">
              {tour.prev ? (
                <Link
                  href={`${base}/${tour.prev.slug}`}
                  className="group flex flex-col max-w-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  <span className="font-mono text-[9px] uppercase tracking-label text-[#7a746c] mb-1">← Previous</span>
                  <span className="font-display text-[15px] font-bold tracking-tighter text-[#5c5750] group-hover:text-[#211d1a] transition-colors">
                    {tour.prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {tour.next && (
                <Link
                  href={`${base}/${tour.next.slug}`}
                  className="group flex flex-col items-end max-w-xs text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  <span className="font-mono text-[9px] uppercase tracking-label text-[#7a746c] mb-1">Next →</span>
                  <span className="font-display text-[15px] font-bold tracking-tighter text-[#5c5750] group-hover:text-[#211d1a] transition-colors">
                    {tour.next.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </main>

      {tour.related && tour.related.length > 0 && (
        <RelatedTours
          tours={tour.related}
          heading={isKili ? 'Related climbs' : 'Related safaris'}
          allHref={base}
          allLabel={isKili ? 'All climbs →' : 'All safaris →'}
        />
      )}

      <SiteFooter />

      {/* Reserves scroll space so the mobile sticky booking bar doesn't cover the footer */}
      <div className="h-24 lg:h-0" aria-hidden="true" />
    </>
  );
}
