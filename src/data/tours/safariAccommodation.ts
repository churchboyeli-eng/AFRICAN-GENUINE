import type { TourLodge } from './types';

type AccommodationOption = Omit<TourLodge, 'nights'>;

const REGION_OPTIONS: Record<string, AccommodationOption[]> = {
  Arusha: [
    {
      stars: 'Luxury',
      name: 'Elewana Arusha Coffee Lodge',
      desc: 'Illustrative luxury start or end stay on a coffee estate outside Arusha; final room type and dates are confirmed with your quote.',
      image: '/img/hero/hero-main.webp',
    },
  ],
  'Arusha NP': [
    {
      stars: 'Luxury',
      name: 'Hatari Lodge',
      desc: 'Illustrative luxury stay for an Arusha National Park itinerary; the final route fit and room type are confirmed with your quote.',
      image: '/img/hero/hero-main.webp',
    },
  ],
  Tarangire: [
    {
      stars: 'Mid-range',
      name: 'Tarangire Sopa Lodge',
      desc: 'Illustrative mid-range lodge option in Tarangire; the final room type and park access are confirmed with your quote.',
      image: '/img/dest/tarangire.webp',
    },
    {
      stars: 'Luxury',
      name: 'Elewana Tarangire Treetops',
      desc: 'Illustrative luxury tented option on the Tarangire park border; final dates and room type are confirmed with your quote.',
      image: '/img/dest/tarangire.webp',
    },
  ],
  'Lake Manyara': [
    {
      stars: 'Luxury',
      name: '&Beyond Lake Manyara Tree Lodge',
      desc: 'Illustrative luxury treehouse stay in Lake Manyara National Park; operating dates and room allocation are confirmed with your quote.',
      image: '/img/dest/manyara.webp',
    },
  ],
  Ngorongoro: [
    {
      stars: 'Mid-range',
      name: 'Heart & Soul Lodge',
      desc: 'Illustrative mid-range Karatu base for the Ngorongoro Conservation Area; final driving plan and room category are confirmed with your quote.',
      image: '/img/accommodation/heart-and-soul-lodge.webp',
    },
    {
      stars: 'Luxury',
      name: 'Ngorongoro Oldeani Mountain Lodge',
      desc: 'Illustrative luxury highlands stay near Ngorongoro; final room type and next-day crater access are confirmed with your quote.',
      image: '/img/accommodation/ngorongoro-oldeani-mountain-lodge.webp',
    },
  ],
  Serengeti: [
    {
      stars: 'Mid-range',
      name: 'Safari Haven Serengeti',
      desc: 'Illustrative mid-range Serengeti camp option; the final camp area, season and transfer plan are confirmed with your quote.',
      image: '/img/accommodation/safari-haven-serengeti.webp',
    },
    {
      stars: 'Luxury',
      name: 'Baobab Naabi Luxury Camp',
      desc: 'Illustrative luxury Serengeti camp option; the final camp area, season and transfer plan are confirmed with your quote.',
      image: '/img/accommodation/baobab-naabi-luxury-camp.webp',
    },
  ],
  Ndutu: [
    {
      stars: 'Mid-range',
      name: 'Ndutu Safari Lodge',
      desc: 'Illustrative mid-range lake-side base for the Ndutu plains; migration-season access and room type are confirmed with your quote.',
      image: '/img/tours/migration-crater.webp',
    },
  ],
  'Lake Natron': [
    {
      stars: 'Mid-range',
      name: 'Lake Natron Camp',
      desc: 'Illustrative mid-range camp near Ngare Sero; current operating status and the final route plan are confirmed with your quote.',
      image: '/img/tours/serengeti-zanzibar.webp',
    },
  ],
  Ruaha: [
    {
      stars: 'Mid-range',
      name: 'Mwagusi Safari Camp',
      desc: 'Illustrative mid-range Ruaha camp option; season, operating dates and transfer arrangements are confirmed with your quote.',
      image: '/img/dest/nyerere.webp',
    },
    {
      stars: 'Luxury',
      name: 'Jabali Ridge',
      desc: 'Illustrative luxury Ruaha stay; the current opening period and exact itinerary fit are confirmed with your quote.',
      image: '/img/dest/nyerere.webp',
    },
  ],
  'Nyerere (Selous)': [
    {
      stars: 'Mid-range',
      name: 'Selous River Camp',
      desc: 'Illustrative mid-range Rufiji River camp option in Nyerere; seasonal opening dates and room type are confirmed with your quote.',
      image: '/img/dest/nyerere.webp',
    },
    {
      stars: 'Luxury',
      name: 'Serena Mivumo River Lodge',
      desc: 'Illustrative luxury Nyerere lodge on the Rufiji; final room allocation and seasonal operations are confirmed with your quote.',
      image: '/img/dest/nyerere.webp',
    },
  ],
  Mikumi: [
    {
      stars: 'Mid-range',
      name: 'Mikumi Safari Lodge',
      desc: 'Illustrative mid-range Mikumi option near the park gate; final room type and game-drive timing are confirmed with your quote.',
      image: '/img/tours/northern-circuit.webp',
    },
    {
      stars: 'Luxury',
      name: 'Mikumi Wildlife Lodge',
      desc: 'Illustrative higher-end Mikumi option in the Kikoboga area; final room type and dates are confirmed with your quote.',
      image: '/img/tours/northern-circuit.webp',
    },
  ],
  Zanzibar: [
    {
      stars: 'Luxury',
      name: 'Zuri Zanzibar',
      desc: 'Illustrative luxury Kendwa beach stay; coast preference, board basis and room category are confirmed with your quote.',
      image: '/img/dest/zanzibar.webp',
    },
  ],
};

function regionFor(stop: string): string | undefined {
  if (stop === 'Serengeti (North)' || stop === 'Ndutu/Serengeti') return stop === 'Ndutu/Serengeti' ? 'Ndutu' : 'Serengeti';
  if (stop === 'Karatu') return 'Ngorongoro';
  if (stop === 'Manyara') return 'Lake Manyara';
  return REGION_OPTIONS[stop] ? stop : undefined;
}

export function buildSafariAccommodation(stops: string[]): TourLodge[] {
  const regions = [...new Set(stops.map(regionFor).filter((region): region is string => Boolean(region)))];

  return regions.flatMap((region) =>
    (REGION_OPTIONS[region] ?? []).map((option) => ({
      ...option,
      nights: `While visiting ${region}`,
    })),
  );
}
