import { notFound } from 'next/navigation';
import { honeymoonTours, honeymoonBySlug } from '@/data/honeymoon';
import TourLayout from '@/components/tour/TourLayout';
import { buildMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return honeymoonTours.map((t) => ({ slug: t.slug }));
}

type HoneymoonDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: HoneymoonDetailPageProps) {
  const { slug } = await params;
  const tour = honeymoonBySlug[slug];
  if (!tour) return {};
  return buildMetadata({
    title: tour.meta.title,
    description: tour.meta.description,
    path: `/honeymoon/${slug}`,
  });
}

export default async function HoneymoonDetailPage({ params }: HoneymoonDetailPageProps) {
  const { slug } = await params;
  const tour = honeymoonBySlug[slug];
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
