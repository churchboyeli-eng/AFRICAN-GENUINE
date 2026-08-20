import { SITE_URL, SITE_NAME } from '@/lib/metadata';

export default function TravelAgencyJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo/logo-dark.png`,
    image: `${SITE_URL}/img/og-image.jpg`,
    description:
      'Private guided safaris, Kilimanjaro routes and honeymoons across Tanzania, crafted by a Tanzanian-owned team.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Arusha',
      addressCountry: 'TZ',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tanzania',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
