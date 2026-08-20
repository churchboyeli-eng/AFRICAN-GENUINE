import { notFound } from 'next/navigation';
import { honeymoonTours, honeymoonBySlug } from '@/data/honeymoon';
import TourLayout from '@/components/tour/TourLayout';
import { buildMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return honeymoonTours.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = honeymoonBySlug[params.slug];
  if (!tour) return {};
  return buildMetadata({
    title: tour.meta.title,
    description: tour.meta.description,
    path: `/honeymoon/${params.slug}`,
  });
}

export default function HoneymoonDetailPage({ params }: { params: { slug: string } }) {
  const tour = honeymoonBySlug[params.slug];
  if (!tour) notFound();

  const idx  = honeymoonTours.indexOf(tour);
  const prev = honeymoonTours[idx - 1] ?? null;
  const next = honeymoonTours[idx + 1] ?? null;

  return (
    <TourLayout
      tour={{
        ...tour,
        basePath: '/honeymoon',
        prev: prev ? { slug: prev.slug, title: prev.name } : undefined,
        next: next ? { slug: next.slug, title: next.name } : undefined,
      }}
    />
  );
}
