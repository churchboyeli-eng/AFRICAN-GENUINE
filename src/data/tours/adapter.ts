import type { Tour, TourFact } from './types';
import type { Itinerary } from '@/data/itineraries';
import { itineraryNotes } from '@/data/itineraries';
import {
  getHeroImage,
  generateGallery,
  generateRelated,
  generateInclusions,
} from './draftEnrichment';

export function itineraryToTour(
  itin: Itinerary,
  prev?: { slug: string; title: string } | null,
  next?: { slug: string; title: string } | null,
): Tour {
  const facts: TourFact[] = [
    { label: 'Duration',   value: `${itin.days} days`,    sub: `${itin.days - 1} nights` },
    { label: 'Parks',      value: `${itin.parks.length}`, sub: itin.parks.slice(0, 2).join(' · ') },
    { label: 'Best for',   value: itin.days <= 5 ? 'All levels' : itin.days <= 8 ? 'Intermediate' : 'Adventurous', sub: itin.best_for.split(',')[0].trim() },
    { label: 'Group size', value: 'On request',           sub: 'Private vehicle' },
    { label: 'From',       value: 'Price on request',     sub: undefined },
  ];

  const { included, excluded } = generateInclusions(itin);

  return {
    slug:  itin.slug,
    name:  itin.title,
    meta: {
      title:       `${itin.title} — ${itin.days}-Day Tanzania Safari | African Genuine Tours & Safaris`,
      description: `${itin.title}: ${itin.days} days across ${itin.parks.join(', ')}. Best for: ${itin.best_for}.`,
    },

    heroImage: getHeroImage(itin.parks),
    heroTags:  [
      `${itin.days} ${itin.days === 1 ? 'Day' : 'Days'}`,
      itin.best_for.split(',')[0].trim(),
    ],
    tagline: itin.title,
    subhead: `Explore ${itin.parks.join(' · ')} — ${itin.best_for.toLowerCase()}`,

    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Itineraries', href: '/itineraries' },
    ],

    facts,

    // Real content from the itinerary record
    overviewText:      itin.overview,
    startingLocations: itin.starting_locations,
    parksAndWildlife:  itin.parks_and_wildlife,
    bestTime:          itin.best_time,
    whyBook:           itin.why_book,

    // Days: real titles + descriptions; logistics fields left undefined (omitted cleanly)
    days: itin.day_by_day.map((d) => ({
      n:     d.day,
      title: d.title,
      desc:  d.description,
    })),
    notes: itineraryNotes,

    routeLabel: `${itin.days}-day safari`,
    routeStops: itin.parks,

    // Standard inclusions — genuinely true for every itinerary in this portfolio
    included,
    excluded,

    // Gallery uses real destination images matched to the parks visited
    galleryImages: generateGallery(itin.parks),

    // Related: links to other real pages in the project
    related: generateRelated(itin),

    prev: prev ?? undefined,
    next: next ?? undefined,

    // No invented departures, lodges, reviews, or prices — those sections
    // are hidden until real data is added.
  };
}
