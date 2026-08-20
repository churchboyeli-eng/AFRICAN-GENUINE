import { notFound } from 'next/navigation';
import { climbs, climbsBySlug } from '@/data/climbs';
import TourLayout from '@/components/tour/TourLayout';
import { buildMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return climbs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const climb = climbsBySlug[params.slug];
  if (!climb) return {};
  return buildMetadata({
    title: climb.meta.title,
    description: climb.meta.description,
    path: `/kilimanjaro/${params.slug}`,
  });
}

export default function KilimanjaroDetailPage({ params }: { params: { slug: string } }) {
  const climb = climbsBySlug[params.slug];
  if (!climb) notFound();

  const idx  = climbs.indexOf(climb);
  const prev = climbs[idx - 1] ?? null;
  const next = climbs[idx + 1] ?? null;

  const tour = {
    ...climb,
    basePath: '/kilimanjaro',
    prev: prev ? { slug: prev.slug, title: prev.name } : undefined,
    next: next ? { slug: next.slug, title: next.name } : undefined,
  };

  return <TourLayout tour={tour} />;
}
