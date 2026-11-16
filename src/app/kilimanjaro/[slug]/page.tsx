import { notFound } from 'next/navigation';
import { climbs, climbsBySlug } from '@/data/climbs';
import TourLayout from '@/components/tour/TourLayout';
import { buildMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return climbs.map((c) => ({ slug: c.slug }));
}

type KilimanjaroDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: KilimanjaroDetailPageProps) {
  const { slug } = await params;
  const climb = climbsBySlug[slug];
  if (!climb) return {};
  return buildMetadata({
    title: climb.meta.title,
    description: climb.meta.description,
    path: `/kilimanjaro/${slug}`,
  });
}

export default async function KilimanjaroDetailPage({ params }: KilimanjaroDetailPageProps) {
  const { slug } = await params;
  const climb = climbsBySlug[slug];
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
