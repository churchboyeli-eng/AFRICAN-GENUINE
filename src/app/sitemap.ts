import type { MetadataRoute } from 'next';
import { itineraries } from '@/data/itineraries';
import { richTours } from '@/data/tours/richTours';
import { climbs } from '@/data/climbs';
import { honeymoonTours } from '@/data/honeymoon';

const BASE_URL = 'https://african-genuine-safaris.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/day-trips`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/itineraries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/kilimanjaro`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/honeymoon`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${BASE_URL}/tanzania/serengeti/great-migration-river-crossing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // /itineraries/[slug] — served from richTours first, itineraries.ts as fallback (see page.tsx)
  const richTourRoutes: MetadataRoute.Sitemap = Object.keys(richTours).map((slug) => ({
    url: `${BASE_URL}/itineraries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  const itineraryRoutes: MetadataRoute.Sitemap = itineraries.map((it) => ({
    url: `${BASE_URL}/itineraries/${it.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // /kilimanjaro/[slug]
  const climbRoutes: MetadataRoute.Sitemap = climbs.map((c) => ({
    url: `${BASE_URL}/kilimanjaro/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // /honeymoon/[slug]
  const honeymoonRoutes: MetadataRoute.Sitemap = honeymoonTours.map((t) => ({
    url: `${BASE_URL}/honeymoon/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...richTourRoutes,
    ...itineraryRoutes,
    ...climbRoutes,
    ...honeymoonRoutes,
  ];
}
