import type { Tour, GalleryTile } from './tours/types';

function ac(avail: string): string {
  if (avail === 'Available') return '#a9d0a0';
  if (avail === 'Enquire')   return '#c8a55c';
  return '#9b9078';
}

const NOTES = [
  'All itineraries are original African Genuine Tours & Safaris programmes — pace and order can be adjusted.',
  'Both tours can be extended or shortened; a beach add-on before or after the safari is always possible.',
  'Private vehicle and guide throughout — your group only, your pace.',
];

const WHY_BOOK = [
  'African Genuine Tours & Safaris is Tanzanian-owned — we know these parks and coastlines intimately',
  'Private guide and 4×4 throughout — no shared vehicles, no group departures',
  'Internal flights included so you spend more time in the bush and less on the road',
  'Carefully chosen lodges and camps positioned close to the wildlife',
  'Free itinerary changes up to departure — we design around your dates and interests',
  'Real-time support from our Arusha operations desk throughout your trip',
];

function gallery(tiles: { src: string; alt: string; large?: boolean }[]): GalleryTile[] {
  return tiles.map((t) => ({ src: t.src, alt: t.alt, large: t.large }));
}

export const honeymoonTours: Tour[] = [

  /* ─── 5-Day Tanzania Safari from Zanzibar ───────────────────────────────── */
  {
    slug: '5-day-tanzania-safari-from-zanzibar',
    name: '5-Day Tanzania Safari from Zanzibar',
    meta: {
      title: '5-Day Tanzania Safari from Zanzibar | African Genuine Tours & Safaris',
      description: 'Fly in from the coast and give the Serengeti the time it deserves — two full days on the plains, Tarangire elephants and the Ngorongoro Crater, ending in Arusha.',
    },

    heroImage: '/img/dest/serengeti.webp',
    heroTags:  ['★ FLY-IN FROM ZANZIBAR', '3 PARKS · 5 DAYS · 4 NIGHTS'],
    tagline:   'More time on the plains',
    subhead:   'Fly in from the coast and give the Serengeti the time it deserves — two full days on the plains, plus the elephants of Tarangire and the Ngorongoro Crater, ending in Arusha.',

    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Northern Circuit', href: '/itineraries' },
    ],

    facts: [
      { label: 'Duration',    value: '5 days',      sub: '4 nights' },
      { label: 'Group size',  value: 'Max 6',        sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',    sub: 'Migration & dry season' },
      { label: 'Route',       value: 'ZNZ → JRO',   sub: 'ends in Arusha' },
      { label: 'From',        value: 'On request',   sub: 'tailor-made quote' },
    ],

    overviewText: [
      'A short flight from Zanzibar to Arusha trades a long day on the road for more time with the animals. Over four nights you follow the northern circuit — the elephants and baobabs of Tarangire, two unhurried days across the endless Serengeti plains, and the wildlife amphitheatre of the Ngorongoro Crater — in a private 4×4 with your own guide.',
      'The extra Serengeti day is what sets this trip apart, giving you the best chance of big cats and, in season, the great herds. The safari ends in Arusha, ready for your onward flight or a beach extension.',
    ],
    highlights: [
      { num: '01', title: 'Two full days in the Serengeti',  desc: 'More time on the plains means better big-cat sightings and, in season, the great herds.' },
      { num: '02', title: 'Fly in, skip the roads',          desc: 'A short flight from the coast to Arusha means more time on safari and far less time in the car.' },
      { num: '03', title: 'Elephants & baobabs of Tarangire',desc: 'Huge elephant herds, ancient baobabs and a river that pulls in wildlife year-round.' },
      { num: '04', title: 'Ngorongoro Crater finale',        desc: 'Descend into a collapsed volcano holding the Big Five, including the rare black rhino.' },
    ],

    days: [
      { n: 1, title: 'Zanzibar to Tarangire (fly-in)',       place: 'Tarangire N.P.',         travel: 'Flight + 2 hr drive',        stay: 'Tarangire / Karatu lodge',  meals: 'Lunch · Dinner',             desc: 'We collect you from your hotel and fly you from Zanzibar to Arusha (about an hour), where your guide meets you. A scenic drive brings you to Tarangire for an afternoon game drive among its famous elephant herds and ancient baobabs — giraffe, zebra and buffalo are common, with a good chance of lion — before dinner and your first night on safari.' },
      { n: 2, title: 'Tarangire to the Serengeti',           place: 'Central Serengeti',       travel: 'Scenic drive + game drives', stay: 'Serengeti tented camp',     meals: 'Breakfast · Lunch · Dinner', desc: 'You cross the Ngorongoro Conservation Area, pausing at a crater viewpoint, then descend toward the Serengeti through Maasai country. At Naabi Hill Gate the endless plains open ahead; the afternoon is spent game driving the wildlife-rich Seronera area on the way to camp.' },
      { n: 3, title: 'Full day in the Serengeti',            place: 'Seronera',                travel: 'Dawn-to-dusk drives',        stay: 'Serengeti tented camp',     meals: 'Breakfast · Lunch · Dinner', desc: 'A sunrise game drive catches the cats still on the move and animals gathering by the roadside in the cool of the morning. After breakfast, a full day exploring the plains with a picnic lunch in the bush — leopard, cheetah, elephant, and in season the great herds of the migration.' },
      { n: 4, title: 'Serengeti to the Ngorongoro rim',      place: 'Seronera → Crater rim',   travel: 'AM drive + transfer',        stay: 'Ngorongoro rim lodge',      meals: 'Breakfast · Lunch · Dinner', desc: 'One last morning game drive in the Serengeti — another chance at predators and, in season, the migration — then a scenic drive across the open country to the Ngorongoro highlands. You reach the crater rim by late afternoon, perfectly placed for the early descent.' },
      { n: 5, title: 'Ngorongoro Crater, then Arusha',       place: 'Crater floor → Arusha',   travel: 'Crater drive + transfer',    stay: '—',                         meals: 'Breakfast · Lunch',          desc: 'An early descent onto the crater floor for a morning game drive amid one of the highest densities of wildlife in Africa — lion, elephant, buffalo, hippo and, with luck, the endangered black rhino. After a picnic beside the hippo pool, you ascend the rim and drive back to Arusha in the late afternoon, in time for your onward flight or a beach extension.' },
    ],

    notes: NOTES,
    routeLabel:  'Zanzibar ✈ Arusha → Tarangire → Serengeti → Ngorongoro → Arusha',
    routeStops:  ['Zanzibar', 'Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Arusha'],
    routeNote:   'Flight Zanzibar–Arusha included; safari ends in Arusha.',
    whyBook:     WHY_BOOK,

    included: [
      'Flight Zanzibar – Arusha',
      'All park & conservation fees',
      'Private 4×4 with pop-up roof & expert guide',
      'Accommodation (4 nights) on safari',
      'All meals as listed + drinking water',
      'Hotel & airport transfers · free Zanzibar luggage storage',
    ],
    excluded: [
      'International flights to Tanzania',
      'Tanzania visa & travel insurance',
      'Gratuities for your guide & staff',
      'Drinks, personal items & optional excursions',
    ],

    lodges: [
      { nights: 'Night 1',    stars: 'Comfort / Luxury', name: 'Tarangire or Karatu Lodge', desc: 'A relaxed lodge or tented camp near Tarangire or in the green Karatu highlands, well placed for the drive to the Serengeti.',         image: '/img/dest/tarangire.webp' },
      { nights: 'Nights 2–3', stars: 'Comfort / Luxury', name: 'Central Serengeti Camp',    desc: 'A classic tented camp in the Seronera area, minutes from year-round game viewing, with canvas suites and dinner under the stars.',    image: '/img/dest/serengeti.webp' },
      { nights: 'Night 4',    stars: 'Comfort / Luxury', name: 'Ngorongoro Rim Lodge',      desc: 'Perched on the forested crater rim with sweeping views, so you can descend to the crater floor first thing the next morning.',         image: '/img/dest/ngorongoro.webp' },
    ],

    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, excellent visibility',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak dry season',                     avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season / green-season value',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Calving season, southern plains',     avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],

    galleryImages: gallery([
      { src: '/img/dest/serengeti.webp',          alt: 'Endless Serengeti plains at dawn',       large: true },
      { src: '/img/dest/tarangire.webp',           alt: 'Elephant herds beneath the baobabs' },
      { src: '/img/dest/ngorongoro.webp',          alt: 'Ngorongoro Crater from the rim' },
      { src: '/img/tours/migration-crater.webp',   alt: 'Big cats on the open plains' },
    ]),

    reviews: [
      { quote: 'The extra day in the Serengeti made the whole trip — we found a leopard with a kill and watched it for an hour with nobody else around.',              author: 'Elena M.',    date: 'September 2025' },
      { quote: 'Flew in from Zanzibar and were on a game drive by lunchtime. Superbly organised, and the crater on the last morning was breathtaking.',               author: 'Marcus H.',   date: 'July 2025' },
    ],
    reviewScore: '4.9',
    reviewCount: '2',

    related: [
      { days: '12 DAYS', rating: '5.0', price: 'On request', name: '12-Day Tanzania Safari & Zanzibar Beach',          blurb: 'The great herds, the Big Five and a slow week of white sand.',                 image: '/img/tours/serengeti-zanzibar.webp', href: '/honeymoon/12-day-tanzania-safari-zanzibar-beach' },
      { days: '4 DAYS',  rating: '4.9', price: 'On request', name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In',   blurb: 'The classic northern loop from the coast in four days.',                       image: '/img/dest/serengeti.webp',           href: '/itineraries/4-day-serengeti-ngorongoro-tarangire-fly-in' },
      { days: '5 DAYS',  rating: '4.9', price: 'On request', name: '5-Day Northern Circuit & Lake Manyara',            blurb: 'The full northern loop plus the tree-climbing lions of Manyara.',              image: '/img/dest/manyara.webp',             href: '/itineraries/5-day-northern-circuit-lake-manyara' },
    ],

    basePath: '/honeymoon',
  },

  /* ─── 12-Day Tanzania Safari & Zanzibar Beach ───────────────────────────── */
  {
    slug: '12-day-tanzania-safari-zanzibar-beach',
    name: '12-Day Tanzania Safari & Zanzibar Beach',
    meta: {
      title: '12-Day Tanzania Safari & Zanzibar Beach | African Genuine Tours & Safaris',
      description: 'The complete Tanzania — the great herds and the Big Five across the northern parks, the drama of the Mara River crossing, then a slow week of white sand on Zanzibar.',
    },

    heroImage: '/img/tours/serengeti-zanzibar.webp',
    heroTags:  ['★ SAFARI + BEACH', '4 PARKS · 12 DAYS · 11 NIGHTS'],
    tagline:   'Bush and beach, the complete trip',
    subhead:   'The complete Tanzania — the great herds and the Big Five across the northern parks, the drama of the Mara River crossing, then a slow week of white sand and warm water on Zanzibar.',

    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Northern Circuit', href: '/itineraries' },
    ],

    facts: [
      { label: 'Duration',    value: '12 days',     sub: '11 nights' },
      { label: 'Group size',  value: 'Max 6',        sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',    sub: 'Migration & dry season' },
      { label: 'Route',       value: 'JRO → ZNZ',   sub: 'Arusha to Zanzibar' },
      { label: 'From',        value: 'On request',   sub: 'tailor-made quote' },
    ],

    overviewText: [
      'This is Tanzania in one unhurried journey. You begin on the northern safari circuit — the elephants and baobabs of Tarangire, the endless plains of the Serengeti, and the wildlife amphitheatre of the Ngorongoro Crater — with time set aside in the Serengeti for the Great Migration and, in season, the Mara River crossing.',
      'From the plains you fly to Zanzibar for four full days on the coast: a guided wander through historic Stone Town, then the simple pleasure of warm water, white sand and nothing to do. Private guiding and vehicles throughout, and an optional dawn balloon flight over the herds.',
    ],
    highlights: [
      { num: '01', title: 'The full northern circuit',    desc: 'Tarangire, Ngorongoro and the Serengeti — the Big Five and the great plains.' },
      { num: '02', title: 'The Mara River crossing',      desc: 'Days set aside in the northern Serengeti for the migration, in season.' },
      { num: '03', title: 'Optional balloon at dawn',     desc: 'Drift over the herds at sunrise, ending with a bush breakfast.' },
      { num: '04', title: 'A week on Zanzibar',           desc: 'Historic Stone Town and four full days of white-sand beach.' },
    ],

    days: [
      { n: 1,  title: 'Arrive in Tanzania · Arusha',         place: 'Arusha',                travel: 'Airport transfer',           stay: 'Arusha lodge',              meals: 'Dinner',                     desc: 'You land at Kilimanjaro International Airport, where your driver-guide meets you and drives you the short distance to Arusha. Settle in, enjoy dinner and rest ahead of the safari, with a full trip briefing from your guide.' },
      { n: 2,  title: 'Tarangire National Park',              place: 'Tarangire',              travel: 'Drive + game drive',         stay: 'Tarangire / Karatu lodge',  meals: 'Breakfast · Lunch · Dinner', desc: 'After breakfast you set out for Tarangire, a park defined by its ancient baobabs and some of the largest elephant herds in Tanzania. You game-drive the river country — giraffe, zebra, buffalo and, with luck, lion — with a picnic lunch in the park before dinner and your overnight.' },
      { n: 3,  title: 'Ngorongoro Crater to the Serengeti',   place: 'Ngorongoro → Serengeti', travel: 'Crater drive + transfer',    stay: 'Serengeti camp',            meals: 'Breakfast · Lunch · Dinner', desc: 'An early descent of some 600 m onto the crater floor for a morning game drive amid dense herds and predators — lion, elephant, buffalo, hippo and flamingo, with a chance of black rhino. After lunch you climb out and drive on toward the Serengeti for dinner and an overnight in the bush.' },
      { n: 4,  title: 'Full day in the Serengeti',            place: 'Seronera',               travel: 'Dawn-to-dusk drives',        stay: 'Serengeti camp',            meals: 'Breakfast · Lunch · Dinner', desc: 'Wake to birdsong on the plains and head out early, when the light is best and the cats are still on the move. A full day exploring the Seronera valley — leopard in the sausage trees, cheetah on the termite mounds, and vast plains game — with a picnic lunch overlooking the endless horizon.' },
      { n: 5,  title: 'Serengeti & the Great Migration',      place: 'Northern Serengeti',     travel: 'Full-day drives',            stay: 'Serengeti camp',            meals: 'Breakfast · Lunch · Dinner', desc: 'Days given to the migration. Your guide tracks the herds — well over a million wildebeest and zebra, trailed by predators — and, in season, positions you at the Mara River for the drama of a crossing. An optional dawn balloon flight over the plains, ending with a bush breakfast, can be arranged.' },
      { n: 6,  title: 'Migration & river crossing country',   place: 'Northern Serengeti',     travel: 'Full-day drives',            stay: 'Serengeti camp',            meals: 'Breakfast · Lunch · Dinner', desc: 'A second full day in migration country lets you be patient with the herds and the crossings, which happen on their own schedule. Unhurried game drives, long lunches in the shade, and the sounds of the wild by night.' },
      { n: 7,  title: 'Fly to Zanzibar · Stone Town',         place: 'Serengeti → Zanzibar',   travel: 'Game drive + flight',        stay: 'Stone Town hotel',          meals: 'Breakfast',                  desc: 'A final morning game drive, then a transfer to the airstrip for your flight to Zanzibar. You are met on arrival and taken to historic Stone Town, where the pace slows and the salt air replaces the dust of the plains.' },
      { n: 8,  title: 'Stone Town tour',                      place: 'Stone Town',             travel: 'Guided walking tour',        stay: 'Beach resort',              meals: 'Breakfast',                  desc: 'A guided morning through the old city — the Arab and Swahili architecture, carved doors, spice-scented lanes and bustling market. In the afternoon you transfer to your beach resort on the coast to begin the seaside half of the trip.' },
      { n: 9,  title: 'Zanzibar beach',                       place: 'Zanzibar coast',         travel: 'At leisure',                 stay: 'Beach resort',              meals: 'Breakfast',                  desc: 'The days are yours. Swim, snorkel or simply rest on the sand, with optional excursions — a spice-farm tour, a dhow sail, or a trip to the sandbanks — arranged through your resort whenever you feel like it.' },
      { n: 10, title: 'Zanzibar beach',                       place: 'Zanzibar coast',         travel: 'At leisure',                 stay: 'Beach resort',              meals: 'Breakfast',                  desc: 'Another unhurried day on the coast — warm water, long lunches and full access to your beach room. Do everything or nothing at all.' },
      { n: 11, title: 'Zanzibar beach',                       place: 'Zanzibar coast',         travel: 'At leisure',                 stay: 'Beach resort',              meals: 'Breakfast',                  desc: 'A final full day to make the most of the island before you head home — one last swim, one last sunset over the Indian Ocean.' },
      { n: 12, title: 'Departure',                            place: 'Zanzibar → ZNZ',         travel: 'Airport transfer',           stay: '—',                         meals: 'Breakfast',                  desc: 'Check out mid-morning and relax until your driver collects you for the transfer to Zanzibar airport and your onward flight. We look forward to hearing about your trip — and welcoming you back.' },
    ],

    notes: NOTES,
    routeLabel:  'Arusha → Tarangire → Ngorongoro → Serengeti (Mara) ✈ Zanzibar',
    routeStops:  ['Arusha', 'Tarangire', 'Ngorongoro', 'Serengeti', 'Northern Serengeti', 'Zanzibar'],
    routeNote:   'Internal flight Serengeti–Zanzibar included.',
    whyBook:     WHY_BOOK,

    included: [
      'Internal flight Serengeti – Zanzibar',
      'All park & conservation fees',
      'Private 4×4 with pop-up roof & expert guide',
      'Accommodation throughout (11 nights)',
      'All safari meals + drinking water; B&B on Zanzibar',
      'Airport transfers & Stone Town guided tour',
    ],
    excluded: [
      'International flights & the Zanzibar arrival fee',
      'Tanzania visa & travel insurance',
      'Optional balloon flight & Zanzibar excursions',
      'Lunches & dinners on Zanzibar, drinks & gratuities',
    ],

    lodges: [
      { nights: 'Night 1',    stars: 'Comfort / Luxury', name: 'Arusha Lodge',              desc: 'A relaxed lodge near Arusha to rest after your flight and meet your guide before the safari begins.',                                               image: '/img/dest/serengeti.webp' },
      { nights: 'Nights 2–6', stars: 'Comfort / Luxury', name: 'Safari Camps & Lodges',     desc: 'Carefully chosen tented camps and lodges across Tarangire, the Ngorongoro highlands and the Serengeti — positioned close to the wildlife.',          image: '/img/dest/tarangire.webp' },
      { nights: 'Night 7',    stars: 'Comfort / Luxury', name: 'Stone Town Hotel',           desc: 'A characterful hotel in the heart of historic Stone Town, steps from the seafront and the old city lanes.',                                         image: '/img/dest/zanzibar.webp' },
      { nights: 'Nights 8–11',stars: 'Comfort / Luxury', name: 'Zanzibar Beach Resort',     desc: 'A beachfront resort on the coast with full access to your room — white sand, warm water and optional island excursions.',                            image: '/img/tours/serengeti-zanzibar.webp' },
    ],

    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, herds in the north',      avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak migration & river crossings',    avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season, quieter parks',          avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Calving season, southern plains',     avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],

    galleryImages: gallery([
      { src: '/img/tours/serengeti-zanzibar.webp',  alt: 'Plains and coastline, the Tanzania combination', large: true },
      { src: '/img/dest/serengeti.webp',             alt: 'Great Migration on the Serengeti plains' },
      { src: '/img/dest/zanzibar.webp',              alt: 'White sand and turquoise water, Zanzibar' },
      { src: '/img/tours/migration-crater.webp',     alt: 'Mara River crossing country, northern Serengeti' },
      { src: '/img/dest/ngorongoro.webp',            alt: 'Ngorongoro Crater wildlife' },
      { src: '/img/dest/tarangire.webp',             alt: 'Elephants and baobabs, Tarangire' },
    ]),

    reviews: [
      { quote: 'The perfect two weeks — the migration in the Serengeti left us speechless, and then Zanzibar was the reward. Bush and beach done exactly right.',                                   author: 'Marcus & Lena H.', date: 'August 2025' },
      { quote: 'We saw a river crossing on day five and a black rhino in the crater, then spent a week barefoot on the sand. Our guide and the whole team were superb.',                            author: 'Sophie K.',        date: 'September 2025' },
    ],
    reviewScore: '5.0',
    reviewCount: '2',

    related: [
      { days: '5 DAYS',  rating: '4.9', price: 'On request', name: '5-Day Tanzania Safari from Zanzibar',                blurb: 'The northern circuit from the coast — two days in the Serengeti.',             image: '/img/dest/serengeti.webp',           href: '/honeymoon/5-day-tanzania-safari-from-zanzibar' },
      { days: '5 DAYS',  rating: '4.9', price: 'On request', name: '5-Day Northern Circuit & Lake Manyara',              blurb: 'The full northern loop plus the tree-climbing lions of Manyara.',              image: '/img/dest/manyara.webp',             href: '/itineraries/5-day-northern-circuit-lake-manyara' },
      { days: '3 DAYS',  rating: '4.8', price: 'On request', name: '3-Day Nyerere (Selous) River Safari',                blurb: 'Boat and walking safaris on the Rufiji from Dar or Zanzibar.',                 image: '/img/dest/nyerere.webp',             href: '/itineraries/3-day-nyerere-selous-river-safari' },
    ],

    basePath: '/honeymoon',
  },

];

export const honeymoonBySlug: Record<string, Tour> = Object.fromEntries(
  honeymoonTours.map((t) => [t.slug, t]),
);
