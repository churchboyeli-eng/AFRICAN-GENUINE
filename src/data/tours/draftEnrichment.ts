/**
 * Enrichment helpers for itinerary → Tour conversion.
 * Only genuinely true content lives here — no invented prices, dates, reviews, or lodge names.
 */

import type { GalleryTile } from './types';
import type { Itinerary } from '@/data/itineraries';

// ─── Park → hero image ─────────────────────────────────────────────────────

export const PARK_HERO: Record<string, string> = {
  'Serengeti':            '/img/dest/serengeti.webp',
  'Serengeti (North)':   '/img/tours/migration-crater.webp',
  'Ndutu':               '/img/tours/migration-crater.webp',
  'Ndutu/Serengeti':     '/img/tours/migration-crater.webp',
  'Ngorongoro':          '/img/dest/ngorongoro.webp',
  'Empakaai':            '/img/dest/ngorongoro.webp',
  'Tarangire':           '/img/dest/tarangire.webp',
  'Lake Manyara':        '/img/dest/manyara.webp',
  'Nyerere (Selous)':    '/img/dest/nyerere.webp',
  'Ruaha':               '/img/dest/nyerere.webp',
  'Zanzibar':            '/img/dest/zanzibar.webp',
  'Lake Natron':         '/img/tours/serengeti-zanzibar.webp',
  'Mkomazi':             '/img/tours/machame.webp',
  'Arusha NP':           '/img/hero/hero-main.webp',
  'Arusha':              '/img/hero/hero-main.webp',
};

export function getHeroImage(parks: string[]): string {
  for (const park of parks) {
    if (PARK_HERO[park]) return PARK_HERO[park];
  }
  return '/img/hero/hero-main.webp';
}

// ─── Park → gallery images ──────────────────────────────────────────────────

const PARK_GALLERY: Record<string, string> = {
  'Serengeti':           '/img/dest/serengeti.webp',
  'Serengeti (North)':   '/img/tours/migration-crater.webp',
  'Ndutu':               '/img/tours/migration-crater.webp',
  'Ndutu/Serengeti':     '/img/tours/migration-crater.webp',
  'Ngorongoro':          '/img/dest/ngorongoro.webp',
  'Empakaai':            '/img/dest/ngorongoro.webp',
  'Tarangire':           '/img/dest/tarangire.webp',
  'Lake Manyara':        '/img/dest/manyara.webp',
  'Nyerere (Selous)':    '/img/dest/nyerere.webp',
  'Ruaha':               '/img/dest/nyerere.webp',
  'Zanzibar':            '/img/dest/zanzibar.webp',
  'Lake Natron':         '/img/tours/serengeti-zanzibar.webp',
  'Mkomazi':             '/img/tours/machame.webp',
  'Arusha NP':           '/img/hero/hero-main.webp',
  'Arusha':              '/img/hero/hero-main.webp',
};

const FALLBACK_GALLERY = [
  '/img/dest/serengeti.webp',
  '/img/dest/ngorongoro.webp',
  '/img/dest/tarangire.webp',
  '/img/dest/manyara.webp',
  '/img/hero/hero-main.webp',
  '/img/tours/northern-circuit.webp',
];

export function generateGallery(parks: string[]): GalleryTile[] {
  const imgs: string[] = [];
  for (const park of parks) {
    const img = PARK_GALLERY[park];
    if (img && !imgs.includes(img)) imgs.push(img);
  }
  for (const fb of FALLBACK_GALLERY) {
    if (imgs.length >= 6) break;
    if (!imgs.includes(fb)) imgs.push(fb);
  }
  const labels = [
    'Wildlife in their natural habitat',
    'Savanna landscape at golden hour',
    'Game drive across open plains',
    'Big cats on the prowl',
    'Safari camp at dusk',
    'African sunrise over the bush',
  ];
  return imgs.slice(0, 6).map((src, i) => ({
    src,
    alt: labels[i] ?? 'Safari scene',
    large: i === 0,
    overlay: i === 5 ? '+18 photos' : undefined,
  }));
}

// ─── Standard inclusions (true for every itinerary in this portfolio) ───────

export function generateInclusions(itin: Itinerary): { included: string[]; excluded: string[] } {
  return {
    included: [
      'All national park and conservation area fees',
      'Private 4×4 safari vehicle with pop-top roof',
      'Expert TANAPA-licensed driver-guide',
      `All accommodation (${itin.days - 1} nights)`,
      'All meals as listed + purified drinking water',
      'Airport transfers (start and end of safari)',
      'Flying-doctor emergency cover',
    ],
    excluded: [
      'International flights to/from Tanzania',
      'Tanzania visa and travel insurance',
      'Gratuities for guide and lodge staff',
      'Drinks, laundry, and personal items',
      'Optional activities not listed',
    ],
  };
}

// ─── Related tours (links to real pages in the project) ─────────────────────

const RELATED_POOL = [
  { days: '7 DAYS',  rating: '5.0', name: 'Great Migration River Crossing',     blurb: 'Mara River crossings at the height of the season.',       image: '/img/tours/migration-crater.webp',   href: '/tanzania/serengeti/great-migration-river-crossing' },
  { days: '5 DAYS',  rating: '4.9', name: 'Classic Northern Circuit',           blurb: "Tanzania's most popular route in five seamless days.",     image: '/img/tours/northern-circuit.webp',   href: '/itineraries/3-classic-northern-circuit' },
  { days: '6 DAYS',  rating: '4.9', name: 'Serengeti Explorer',                 blurb: 'An extra full day in the Serengeti — worth every night.',  image: '/img/dest/serengeti.webp',            href: '/itineraries/4-serengeti-explorer' },
  { days: '6 DAYS',  rating: '5.0', name: 'Calving Season in Ndutu',            blurb: 'January–March big-cat drama on the calving plains.',       image: '/img/tours/migration-crater.webp',   href: '/itineraries/6-calving-season-ndutu' },
  { days: '7 DAYS',  rating: '5.0', name: 'Comfort Safari with Balloon Ride',   blurb: 'Five parks plus a sunrise balloon over the Serengeti.',    image: '/img/dest/serengeti.webp',            href: '/itineraries/8-comfort-safari-balloon-ride' },
  { days: '8 DAYS',  rating: '5.0', name: 'Honeymoon Safari',                   blurb: 'Romance, balloon rides, and a private bush lunch for two.', image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/11-honeymoon-safari' },
  { days: '8 DAYS',  rating: '4.9', name: 'Explorer Safari',                    blurb: 'The complete northern circuit at an unhurried pace.',       image: '/img/tours/northern-circuit.webp',   href: '/itineraries/17-explorer-safari' },
  { days: '9 DAYS',  rating: '5.0', name: 'Ultimate Tanzania Safari',           blurb: 'Natron, the calving plains, and the full Serengeti story.', image: '/img/dest/serengeti.webp',            href: '/itineraries/18-ultimate-tanzania-safari' },
  { days: '5 DAYS',  rating: '4.8', name: 'Big Cats Special',                   blurb: 'Focused predator tracking across Ndutu and Ngorongoro.',   image: '/img/tours/migration-crater.webp',    href: '/itineraries/9-big-cats-special' },
  { days: '14 DAYS', rating: '5.0', name: 'Northern Icons to Southern Wilderness', blurb: 'North and south combined — the complete Tanzania story.', image: '/img/dest/nyerere.webp',             href: '/itineraries/19-northern-icons-to-southern-wilderness' },
  { days: '4 DAYS',  rating: '4.9', name: '4 Days Tanzania Safari',             blurb: 'Tarangire, Serengeti and Ngorongoro in four days.',         image: '/img/dest/tarangire.webp',            href: '/itineraries/21-4-days-tanzania-safari' },
];

export function generateRelated(itin: Itinerary) {
  return RELATED_POOL
    .filter((r) => r.href !== `/itineraries/${itin.slug}`)
    .slice(0, 3);
}
