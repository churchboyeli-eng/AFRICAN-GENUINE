import { SITE_URL } from '@/lib/metadata';
import type { Tour } from '@/data/tours/types';

interface Props {
  tour: Tour;
  path: string;
}

export default function TouristTripJsonLd({ tour, path }: Props) {
  // Only surface a real numeric price — skip "On request" / empty departures
  const priced = tour.departures?.find((d) => /\d/.test(d.price));

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.meta.description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${tour.heroImage}`,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.days.length,
      itemListElement: tour.days.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: d.title,
      })),
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'African Genuine Tours & Safaris',
      url: SITE_URL,
    },
  };

  if (priced) {
    const amount = priced.price.replace(/[^0-9.]/g, '');
    if (amount) {
      data.offers = {
        '@type': 'Offer',
        price: amount,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      };
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
