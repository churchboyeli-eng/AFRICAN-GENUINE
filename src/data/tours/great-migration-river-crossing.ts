import type { Tour } from './types';

const tour: Tour = {
  slug: 'great-migration-river-crossing',
  name: 'Great Migration River Crossing',
  meta: {
    title: 'Great Migration River Crossing in the Serengeti — African Genuine Tours & Safaris',
    description:
      '7-day Serengeti migration safari timed for the Mara River crossings, finishing in the Ngorongoro Crater. Tailor-made by an African-owned team.',
  },

  heroImage: '/img/tour/hero.webp',
  heroTags: ['★ Signature Migration Safari', 'Jul — Oct · River Crossing Season'],
  tagline: 'Great Migration River Crossing',
  subhead:
    "Seven days chasing the Serengeti’s greatest spectacle — from the Mara River crossings to a final morning on the Ngorongoro crater floor.",

  breadcrumb: [
    { label: 'Safaris', href: '/#tours' },
    { label: 'Tanzania', href: '/itineraries' },
    { label: 'Serengeti', href: '/itineraries?park=serengeti' },
  ],

  facts: [
    { label: 'Duration',    value: '7 days',    sub: '6 nights' },
    { label: 'Group size',  value: 'Max 6',     sub: 'Private available' },
    { label: 'Best season', value: 'Jul — Oct', sub: 'Crossing peak' },
    { label: 'Difficulty',  value: 'Easy',      sub: 'Vehicle-based' },
    { label: 'From',        value: '$4,950',    sub: 'per person' },
  ],

  overviewText: [
    "Between July and October the Serengeti’s wildebeest migration reaches its most dramatic chapter — over a million animals must cross the Mara River to reach fresh pasture, running a gauntlet of crocodiles and strong currents.",
    "This itinerary puts you at the crossing points when the odds of witnessing a stampede are highest, while balancing two days in the central Serengeti and a final morning in Ngorongoro.",
  ],
  highlights: [
    { num: '01', title: 'Front-row river crossings',       desc: 'Positioned on the Mara at the height of the season, where the herds run the gauntlet.' },
    { num: '02', title: 'Big-cat country',                 desc: "The Serengeti holds Africa’s densest lion population — plus cheetah and leopard." },
    { num: '03', title: 'Ngorongoro finale',               desc: 'A full day on the crater floor, home to the Big Five in a single caldera.' },
    { num: '04', title: 'Camps that move with the herds',  desc: "Seasonal mobile camps mean you’re never more than minutes from the action." },
  ],

  days: [
    { n: 1, title: 'Arrival in Arusha',               place: 'Arusha',       travel: 'Airport transfer',        stay: 'Arusha Coffee Lodge',       meals: 'Dinner',     desc: 'Land at Kilimanjaro International, where your guide meets you and drives you to a plantation lodge on the edge of town. Time to rest, enjoy dinner and meet your crew for a trip briefing.' },
    { n: 2, title: 'Fly to the Central Serengeti',    place: 'Seronera',     travel: 'Light aircraft + game drive', stay: 'Serengeti Mobile Camp', meals: 'B · L · D', desc: 'A scenic morning flight over the Rift Valley drops you into the heart of the Serengeti. An afternoon game drive through the Seronera valley eases you into big-cat country on the way to camp.' },
    { n: 3, title: 'Central Serengeti game drives',   place: 'Seronera',     travel: 'Full-day drives',         stay: 'Serengeti Mobile Camp',     meals: 'B · L · D', desc: 'A full day exploring the endless plains with a picnic lunch in the bush. Kopjes, rivers and acacia woodland hold lion, leopard, elephant and vast plains game.' },
    { n: 4, title: 'North to the Mara River',         place: 'Kogatende',    travel: 'Drive north',             stay: 'Northern Serengeti Camp',   meals: 'B · L · D', desc: 'Track the migration north to the Kogatende region on the Mara River. As the herds mass on the banks, tension builds for the crossings to come.' },
    { n: 5, title: 'River crossing day',              place: 'Mara River',   travel: 'Dawn-to-dusk drives',     stay: 'Northern Serengeti Camp',   meals: 'B · L · D', desc: 'The centrepiece. Your guide reads the herds and positions you at the best crossing points, where thousands plunge into crocodile-filled waters. An unforgettable, patient day in the field.' },
    { n: 6, title: 'Fly to the Ngorongoro Highlands', place: 'Ngorongoro',   travel: 'Light aircraft',          stay: 'The Highlands Lodge',       meals: 'B · L · D', desc: 'A farewell morning drive, then a flight south to the Ngorongoro Highlands. Settle into a domed lodge on the crater rim with sweeping views.' },
    { n: 7, title: 'Ngorongoro Crater & departure',   place: 'Crater floor', travel: 'Crater drive + transfer', stay: '—',                    meals: 'B · L',         desc: 'Descend to the crater floor for a morning game drive amid the Big Five, then transfer to the airstrip for onward flights, hearts and camera cards full.' },
  ],

  routeLabel: '7-day circuit',
  routeStops: ['Arusha', '→ Serengeti Central', '→ Kogatende / Mara', '→ Ngorongoro', '→ Departure'],
  routeDistance: '~1,400 km',
  routeNote: 'Road + 2 light aircraft legs',

  included: [
    'All park & conservation fees',
    'Internal flights (days 2 & 6)',
    'Private 4x4 with pop-up roof & expert guide',
    'All accommodation (6 nights)',
    'All meals as listed + drinking water',
    'Airport transfers & flying-doctor cover',
  ],
  excluded: [
    'International flights to Tanzania',
    'Tanzania visa & travel insurance',
    'Gratuities for guide & camp staff',
    'Personal items, drinks & premium wines',
  ],

  lodges: [
    { nights: 'NIGHTS 2–3', stars: '★★★★★', name: 'Serengeti Mobile Camp',    desc: 'A luxury tented camp that relocates with the herds — canvas suites, hot bucket showers and dinner under the stars in the middle of the plains.', image: '/img/tour/lodge-mobile.webp' },
    { nights: 'NIGHTS 4–5', stars: '★★★★★', name: 'Northern Serengeti Camp', desc: "Perched minutes from the Mara crossing points, so you’re first out at dawn and last back at dusk during the peak crossing days.", image: '/img/tour/lodge-northern.webp' },
    { nights: 'NIGHT 6',         stars: '★★★★★', name: 'The Highlands Lodge',     desc: 'Geodesic domes on the forested Ngorongoro rim — fireplaces, big views and easy access down to the crater floor.', image: '/img/tour/lodge-highlands.webp' },
  ],

  departures: [
    { window: '15 – 21 Jul 2026', note: 'Early season, herds gathering', avail: 'Available',    availColor: '#a9d0a0', price: '$4,950' },
    { window: '12 – 18 Aug 2026', note: 'Peak crossing window',          avail: '3 spots left', availColor: '#e7cf94', price: '$5,450' },
    { window: '09 – 15 Sep 2026', note: 'Peak crossing window',          avail: '2 spots left', availColor: '#e7cf94', price: '$5,450' },
    { window: '07 – 13 Oct 2026', note: 'Late season, quieter parks',    avail: 'Available',    availColor: '#a9d0a0', price: '$4,750' },
  ],

  galleryImages: [
    { src: '/img/tour/gallery-1.webp', alt: 'Wildebeest herd at the Mara River',                  large: true },
    { src: '/img/tour/gallery-2.webp', alt: 'Lion resting on Serengeti plains' },
    { src: '/img/tour/gallery-3.webp', alt: 'Savanna landscape with acacia trees at sunset' },
    { src: '/img/tour/gallery-4.webp', alt: 'Cheetah family on a mound overlooking the plains' },
    { src: '/img/tour/gallery-5.webp', alt: 'Buffalo herd in Ngorongoro Crater' },
    { src: '/img/tour/gallery-6.webp', alt: 'African sunset over the savanna', overlay: '+24 photos' },
  ],

  reviews: [
    { quote: 'We saw three crossings in a single afternoon. Our guide knew exactly where to wait — the patience paid off in the most spectacular way.', author: 'Marcus & Lena H.', date: 'August 2025' },
    { quote: 'Every camp was positioned perfectly. We woke up to lions calling and fell asleep to the sound of the plains. Flawless from start to finish.',   author: 'Sofia D.',       date: 'September 2025' },
  ],
  reviewScore: '4.96',
  reviewCount: '214',

  related: [
    { days: '8 DAYS',  rating: '5.0', price: '$4,950', name: 'Northern Circuit in Full',   blurb: 'Serengeti, Ngorongoro & the great herds, lodge to lodge.',  image: '/img/tours/northern-circuit.webp', href: '/itineraries/17-explorer-safari' },
    { days: '6 DAYS',  rating: '4.9', price: '$3,750', name: 'Migration & Crater Classic', blurb: 'The icons in one tight, unforgettable loop.',               image: '/img/tours/migration-crater.webp',  href: '/itineraries/4-serengeti-explorer' },
    { days: '11 DAYS', rating: '5.0', price: '$6,800', name: 'Serengeti & Zanzibar',       blurb: 'Plains by day, Indian Ocean by night.',                    image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/11-honeymoon-safari' },
  ],
};

export default tour;
