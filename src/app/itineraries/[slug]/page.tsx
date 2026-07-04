import { notFound } from 'next/navigation';
import { itineraries } from '@/data/itineraries';
import { itineraryToTour } from '@/data/tours/adapter';
import { richTours } from '@/data/tours/richTours';
import TourLayout from '@/components/tour/TourLayout';

export function generateStaticParams() {
  const richSlugs = Object.keys(richTours).map((slug) => ({ slug }));
  const itinSlugs = itineraries.map((it) => ({ slug: it.slug }));
  return [...richSlugs, ...itinSlugs];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const rich = richTours[params.slug];
  if (rich) {
    return { title: rich.meta.title, description: rich.meta.description };
  }
  const itin = itineraries.find((it) => it.slug === params.slug);
  if (!itin) return {};
  return {
    title: `${itin.title} — ${itin.days}-Day Tanzania Safari | African Genuine Tours & Safaris`,
    description: `${itin.title}: ${itin.days} days across ${itin.parks.join(', ')}. Best for: ${itin.best_for}.`,
  };
}

export default function ItineraryDetailPage({ params }: { params: { slug: string } }) {
  const rich = richTours[params.slug];
  if (rich) return <TourLayout tour={rich} />;

  const itin = itineraries.find((it) => it.slug === params.slug);
  if (!itin) notFound();

  const idx = itineraries.indexOf(itin);
  const prev = itineraries[idx - 1] ?? null;
  const next = itineraries[idx + 1] ?? null;

  const tour = itineraryToTour(
    itin,
    prev ? { slug: prev.slug, title: prev.title } : null,
    next ? { slug: next.slug, title: next.title } : null,
  );

  return <TourLayout tour={tour} />;
}
