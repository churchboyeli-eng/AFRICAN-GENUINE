import type { Tour } from './types';
import { generateGallery } from './draftEnrichment';

function ac(avail: string): string {
  if (avail === 'Available') return '#a9d0a0';
  if (avail === 'Enquire')   return '#c8a55c';
  return '#9b9078';
}

const NOTES = [
  'All itineraries are original African Genuine Tours & Safaris programs.',
  'Any itinerary can be extended with a 2-night Zanzibar add-on after the final day.',
  'Day counts and park order can be adjusted to fit group size or budget.',
];

export const richTours: Record<string, Tour> = {

  /* ─── 4-Day Fly-In ─────────────────────────────────────────────────────── */
  '4-day-serengeti-ngorongoro-tarangire-fly-in': {
    slug: '4-day-serengeti-ngorongoro-tarangire-fly-in',
    name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In Safari',
    meta: {
      title: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In Safari | African Genuine Tours & Safaris',
      description: 'Fly from Zanzibar into Tanzania\'s finest northern parks. Three nights, three iconic parks, one seamless loop.',
    },
    heroImage:  '/img/dest/serengeti.webp',
    heroTags:  ['★ FLY-IN FROM ZANZIBAR', '3 PARKS · 4 DAYS · 3 NIGHTS'],
    tagline:   '4-Day Serengeti, Ngorongoro & Tarangire Fly-In Safari',
    subhead:   'Add the Big Five to your beach holiday. Fly in from Zanzibar, skip the long roads, and spend three unhurried days across Tanzania\'s finest northern parks before flying back to the coast.',
    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Northern Circuit', href: '/itineraries' },
    ],
    facts: [
      { label: 'Duration',    value: '4 days',     sub: '3 nights' },
      { label: 'Group size',  value: 'Max 6',       sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',   sub: 'Dry-season game viewing' },
      { label: 'Difficulty',  value: 'Easy',        sub: 'Vehicle-based' },
      { label: 'From',        value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'A short flight from Zanzibar lands you on Tanzania\'s northern safari circuit, so you trade a long day on the road for more time with the animals. Over three nights you follow the classic loop — the elephants and baobabs of Tarangire, the endless big-cat plains of the Serengeti, and the wildlife amphitheatre of the Ngorongoro Crater — travelling in a private 4×4 with your own guide.',
    ],
    highlights: [
      { num: '01', title: 'Fly in, skip the roads',           desc: 'A short flight from the coast to Arusha means more time on safari and far less time in the car.' },
      { num: '02', title: 'Elephants & baobabs of Tarangire', desc: 'Huge elephant herds, ancient baobabs and a river that pulls in wildlife year-round.' },
      { num: '03', title: 'The endless Serengeti',            desc: 'Big-cat country — lion, cheetah and leopard across the golden Seronera plains.' },
      { num: '04', title: 'Ngorongoro Crater finale',         desc: 'Descend into a collapsed volcano holding the Big Five, including the rare black rhino.' },
    ],
    days: [
      { n: 1, title: 'Zanzibar to Tarangire (fly-in)',          place: 'Tarangire N.P.',          travel: 'Flight + 2.5 hr drive',      stay: 'Tarangire / Karatu lodge', meals: 'Lunch · Dinner',              desc: 'We collect you from your hotel and fly you from Zanzibar to Arusha (about an hour). Your guide drives you to Tarangire for an afternoon game drive among its famous elephant herds and ancient baobabs, before dinner and your first night on safari.' },
      { n: 2, title: 'Tarangire to the Serengeti',              place: 'Central Serengeti',        travel: 'Scenic drive + game drives', stay: 'Serengeti tented camp',    meals: 'Breakfast · Lunch · Dinner', desc: 'Cross the Ngorongoro Conservation Area to the Serengeti, pausing at the Naabi Hill kopjes. The afternoon is spent game driving the Central Serengeti (Seronera), the richest year-round wildlife area, before reaching camp at dusk.' },
      { n: 3, title: 'Serengeti sunrise, Ngorongoro rim',       place: 'Seronera → Crater rim',   travel: 'AM game drive + drive',      stay: 'Ngorongoro rim lodge',    meals: 'Breakfast · Lunch · Dinner', desc: 'A sunrise game drive is prime time for big cats on the move; visit the hippo pools before a bush breakfast. Then a scenic drive climbs the highlands to the crater rim — perfectly placed for tomorrow\'s early descent.' },
      { n: 4, title: 'Ngorongoro Crater, fly back to Zanzibar', place: 'Crater floor → Zanzibar', travel: 'Crater drive + flight',      stay: '—',                       meals: 'Breakfast · Lunch',          desc: 'An early descent takes you onto the crater floor for a half-day game drive amid dense herds and predators — with luck, the black rhino. After a picnic beside Lake Magadi you ascend and drive to Arusha for your flight back to Zanzibar.' },
    ],
    notes: NOTES,
    routeLabel:  'Zanzibar ✈ Arusha → Tarangire → Serengeti → Ngorongoro ✈ Zanzibar',
    routeStops:  ['Zanzibar', 'Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro'],
    routeNote:   'Return flights Zanzibar–Arusha included.',
    included: ['Return flights Zanzibar – Arusha', 'All park & conservation fees', 'Private 4×4 with pop-up roof & expert guide', 'Accommodation (3 nights) on safari', 'All meals as listed + drinking water', 'Hotel & airport transfers · free Zanzibar luggage storage'],
    excluded: ['International flights to Tanzania', 'Tanzania visa & travel insurance', 'Gratuities for your guide & staff', 'Drinks, personal items & optional excursions'],
    lodges: [
      { nights: 'Night 1',  stars: 'Comfort / Luxury', name: 'Tarangire or Karatu Lodge', desc: 'A relaxed lodge or tented camp near Tarangire or in the green Karatu highlands, well placed for an early start toward the Serengeti.', image: '/img/dest/tarangire.webp' },
      { nights: 'Night 2',  stars: 'Comfort / Luxury', name: 'Central Serengeti Camp',    desc: 'A classic tented camp in the Seronera area, minutes from year-round game viewing, with canvas suites and dinner under the stars.', image: '/img/tour/lodge-northern.webp' },
      { nights: 'Night 3',  stars: 'Comfort / Luxury', name: 'Ngorongoro Rim Lodge',      desc: 'Perched on the forested crater rim with sweeping views, so you can descend to the crater floor first thing.', image: '/img/tour/lodge-highlands.webp' },
    ],
    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, excellent visibility', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak dry season',                  avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season / green-season value', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Calving season, southern plains',  avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: generateGallery(['Serengeti', 'Ngorongoro', 'Tarangire']),
    reviews: [
      { quote: 'Flying in from Zanzibar was the best decision — we were on a game drive within hours instead of a whole day in the car. Three parks in four days, and it never felt rushed.', author: 'Marcus & Lena H.', date: 'August 2025' },
      { quote: 'Our guide read the bush brilliantly. We had the crater almost to ourselves at first light and watched a black rhino cross right in front of us.', author: 'Sophie K.', date: 'September 2025' },
    ],
    related: [
      { days: '5 DAYS', rating: '4.9', price: 'On request', name: '5-Day Northern Circuit & Lake Manyara', blurb: 'Tarangire, Serengeti, Ngorongoro and the tree-climbing lions of Manyara.', image: '/img/dest/serengeti.webp', href: '/itineraries/5-day-northern-circuit-lake-manyara' },
      { days: '3 DAYS', rating: '4.8', price: 'On request', name: '3-Day Nyerere (Selous) River Safari',   blurb: 'Boat and walking safaris on the Rufiji from Dar or Zanzibar.',               image: '/img/dest/nyerere.webp',   href: '/itineraries/3-day-nyerere-selous-river-safari' },
      { days: '1 DAY',  rating: '4.8', price: 'On request', name: '1-Day Mikumi Fly-In from Zanzibar',     blurb: 'A quick big-game day on the Mkata floodplain and back to the coast.',        image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/1-day-mikumi-fly-in-from-zanzibar' },
    ],
  },

  /* ─── 5-Day Fly-In ─────────────────────────────────────────────────────── */
  '5-day-northern-circuit-lake-manyara': {
    slug: '5-day-northern-circuit-lake-manyara',
    name: '5-Day Northern Circuit & Lake Manyara Fly-In Safari',
    meta: {
      title: '5-Day Northern Circuit & Lake Manyara Fly-In Safari | African Genuine Tours & Safaris',
      description: 'The full northern loop from the coast — Tarangire, Serengeti, Ngorongoro and the tree-climbing lions of Lake Manyara.',
    },
    heroImage:  '/img/dest/manyara.webp',
    heroTags:  ['★ FLY-IN FROM ZANZIBAR', '4 PARKS · 5 DAYS · 4 NIGHTS'],
    tagline:   '5-Day Northern Circuit & Lake Manyara Fly-In Safari',
    subhead:   'The full northern loop from the coast — Tarangire, the Serengeti, the Ngorongoro Crater and the tree-climbing lions of Lake Manyara, without a single long transfer.',
    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Northern Circuit', href: '/itineraries' },
    ],
    facts: [
      { label: 'Duration',    value: '5 days',     sub: '4 nights' },
      { label: 'Group size',  value: 'Max 6',       sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',   sub: 'Dry-season game viewing' },
      { label: 'Difficulty',  value: 'Easy',        sub: 'Vehicle-based' },
      { label: 'From',        value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Fly in from Zanzibar and cover Tanzania\'s four headline northern parks in five unhurried days. You start among the elephants of Tarangire, spend two nights on the Serengeti\'s big-cat plains, descend into the Ngorongoro Crater, and finish at Lake Manyara — famous for flamingos and its tree-climbing lions. Private 4×4, your own guide, and lodges chosen to keep you close to the wildlife throughout.',
    ],
    highlights: [
      { num: '01', title: 'Four parks, one seamless loop',    desc: 'Tarangire, the Serengeti, Ngorongoro and Lake Manyara — the whole northern circuit without long transfers.' },
      { num: '02', title: 'Two nights in the Serengeti',      desc: 'More time on the big-cat plains, and the great herds too if you travel in season.' },
      { num: '03', title: 'Ngorongoro Crater',                desc: 'Descend into a collapsed volcano holding the Big Five, including the rare black rhino.' },
      { num: '04', title: 'Tree-climbing lions of Manyara',   desc: 'A flamingo-fringed lake and lions that drape themselves in the acacias.' },
    ],
    days: [
      { n: 1, title: 'Zanzibar to Tarangire (fly-in)',    place: 'Tarangire N.P.',           travel: 'Flight + 2.5 hr drive',      stay: 'Tarangire / Karatu lodge', meals: 'Lunch · Dinner',              desc: 'We collect you from your hotel and fly you from Zanzibar to Arusha (about an hour). Your guide drives you to Tarangire for an afternoon game drive among its famous elephant herds and ancient baobabs, before dinner and your first night on safari.' },
      { n: 2, title: 'Tarangire to the Serengeti',        place: 'Central Serengeti',         travel: 'Scenic drive + game drives', stay: 'Serengeti tented camp',    meals: 'Breakfast · Lunch · Dinner', desc: 'Cross the Ngorongoro Conservation Area to the Serengeti, pausing at the Naabi Hill kopjes. The afternoon is spent game driving the Central Serengeti (Seronera), the richest year-round wildlife area, before reaching camp at dusk.' },
      { n: 3, title: 'Full day in the Serengeti',          place: 'Seronera',                 travel: 'Dawn-to-dusk drives',        stay: 'Serengeti tented camp',    meals: 'Breakfast · Lunch · Dinner', desc: 'A full day on the plains with a picnic lunch in the bush. Kopjes, rivers and acacia woodland hold lion, leopard, cheetah and elephant — and in season, the great herds of the migration.' },
      { n: 4, title: 'Serengeti to the Ngorongoro rim',   place: 'Crater rim',                travel: 'AM drive + drive to rim',    stay: 'Ngorongoro rim lodge',    meals: 'Breakfast · Lunch · Dinner', desc: 'A final morning game drive, then a scenic drive out via Naabi Gate and up into the highlands to the crater rim, arriving in the late afternoon — perfectly placed for tomorrow\'s early descent.' },
      { n: 5, title: 'Ngorongoro Crater & Lake Manyara',  place: 'Crater → Manyara → Arusha', travel: 'Crater drive + flight',      stay: '—',                       meals: 'Breakfast · Lunch',          desc: 'An early descent onto the crater floor for a game drive amid dense herds and predators — with luck, the black rhino. Later, drop down to Lake Manyara for its flamingos and famous tree-climbing lions on the way to Arusha and your flight back to Zanzibar.' },
    ],
    notes: NOTES,
    routeLabel:  'Zanzibar ✈ Arusha → Tarangire → Serengeti → Ngorongoro → Lake Manyara ✈ Zanzibar',
    routeStops:  ['Zanzibar', 'Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Manyara'],
    routeNote:   'Return flights Zanzibar–Arusha included.',
    included: ['Return flights Zanzibar – Arusha', 'All park & conservation fees', 'Private 4×4 with pop-up roof & expert guide', 'Accommodation (4 nights) on safari', 'All meals as listed + drinking water', 'Hotel & airport transfers · free Zanzibar luggage storage'],
    excluded: ['International flights to Tanzania', 'Tanzania visa & travel insurance', 'Gratuities for your guide & staff', 'Drinks, personal items & optional excursions'],
    lodges: [
      { nights: 'Night 1',    stars: 'Comfort / Luxury', name: 'Tarangire or Karatu Lodge', desc: 'A relaxed lodge or tented camp near Tarangire or in the green Karatu highlands, well placed for the drive to the Serengeti.', image: '/img/dest/tarangire.webp' },
      { nights: 'Nights 2–3', stars: 'Comfort / Luxury', name: 'Central Serengeti Camp',    desc: 'A classic tented camp in the Seronera area, minutes from year-round game viewing, with canvas suites and dinner under the stars.', image: '/img/tour/lodge-northern.webp' },
      { nights: 'Night 4',    stars: 'Comfort / Luxury', name: 'Ngorongoro Rim Lodge',      desc: 'Perched on the forested crater rim with sweeping views, so you can descend to the crater floor first thing.', image: '/img/tour/lodge-highlands.webp' },
    ],
    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, excellent visibility', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak dry season',                  avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season / green-season value', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Calving season, southern plains',  avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: generateGallery(['Serengeti', 'Ngorongoro', 'Tarangire', 'Lake Manyara']),
    reviews: [
      { quote: 'Five days felt like ten — four parks, and never once rushed. Manyara\'s tree-climbing lions on the final morning were the perfect send-off.', author: 'James & Rachel T.', date: 'July 2025' },
      { quote: 'Flying in from Zanzibar saved us a whole day. Our guide was superb and the crater at first light was unforgettable.', author: 'Elena M.', date: 'October 2025' },
    ],
    related: [
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In', blurb: 'The classic northern loop from the coast in four days.',   image: '/img/dest/serengeti.webp', href: '/itineraries/4-day-serengeti-ngorongoro-tarangire-fly-in' },
      { days: '3 DAYS', rating: '4.8', price: 'On request', name: '3-Day Nyerere (Selous) River Safari',            blurb: 'Boat and walking safaris on the Rufiji from Dar or Zanzibar.', image: '/img/dest/nyerere.webp',   href: '/itineraries/3-day-nyerere-selous-river-safari' },
      { days: '1 DAY',  rating: '4.8', price: 'On request', name: '1-Day Mikumi Fly-In from Zanzibar',              blurb: 'A quick big-game day on the Mkata floodplain and back to the coast.', image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/1-day-mikumi-fly-in-from-zanzibar' },
    ],
  },

  /* ─── 3-Day Nyerere ────────────────────────────────────────────────────── */
  '3-day-nyerere-selous-river-safari': {
    slug: '3-day-nyerere-selous-river-safari',
    name: '3-Day Nyerere (Selous) River Safari',
    meta: {
      title: '3-Day Nyerere (Selous) River Safari | African Genuine Tours & Safaris',
      description: 'Boat safaris on the Rufiji River, walking safaris with armed rangers, and game drives in Tanzania\'s vast southern wilderness.',
    },
    heroImage:  '/img/dest/nyerere.webp',
    heroTags:  ['★ SOUTHERN CIRCUIT', 'BOAT · WALK · GAME DRIVES'],
    tagline:   '3-Day Nyerere (Selous) River Safari',
    subhead:   'Raw southern Tanzania in a tight window — boat safaris on the Rufiji, dawn and dusk game drives and a guided walk, easily reached from Dar es Salaam or Zanzibar.',
    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Southern Circuit', href: '/itineraries' },
    ],
    facts: [
      { label: 'Duration',    value: '3 days',     sub: '2 nights' },
      { label: 'Group size',  value: 'Max 6',       sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',   sub: 'Dry-season game viewing' },
      { label: 'Difficulty',  value: 'Easy–Mod',    sub: 'Some walking' },
      { label: 'From',        value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Nyerere National Park — the heart of the former Selous — is built around the wide, bronze Rufiji River, home to one of Africa\'s densest populations of hippo and crocodile. This short trip mixes what the south does best: a boat safari on the delta, game drives at first and last light, and a walking safari with an armed ranger. Ideal if you\'re coming from the coast and want a genuine hit of the bush in three days.',
    ],
    highlights: [
      { num: '01', title: 'Boat safari on the Rufiji', desc: 'Drift past hippo pods and basking crocodiles on one of Africa\'s great rivers.' },
      { num: '02', title: 'Big cats & wild dog',        desc: 'Dawn and dusk drives in one of Tanzania\'s most predator-rich parks.' },
      { num: '03', title: 'Walking safari',             desc: 'Track game on foot with an armed ranger — the bush at eye level.' },
      { num: '04', title: 'Easy from the coast',        desc: 'Reached by road from Dar es Salaam, with a Zanzibar connection on request.' },
    ],
    days: [
      { n: 1, title: 'Drive to Nyerere · afternoon boat safari',      place: 'Nyerere (Selous)',        travel: 'Road transfer + boat',    stay: 'Rufiji riverside camp', meals: 'Lunch · Dinner',              desc: 'Leave the coast early and drive south to Nyerere, stopping at Kibiti for lunch. At the gate the Rufiji spreads wide and bronze; you trade the vehicle for a boat, drifting past pods of hippo and basking crocodiles as fish eagles wheel overhead. Check in to your riverside camp as the light fades.' },
      { n: 2, title: 'Dawn & dusk game drives · village at twilight', place: 'Nyerere (Selous)',        travel: 'Full-day game drives',    stay: 'Rufiji riverside camp', meals: 'Breakfast · Lunch · Dinner', desc: 'At first light the bush exhales mist and the tracks are fresh. Game-drive through the morning, picnic beneath a sausage tree, then rest through the heat. Late afternoon turns everything bronze as you head out again, scanning for wild dog. After dark, visit a nearby village where elders share stories by the fire.' },
      { n: 3, title: 'Dawn walking safari · return',                  place: 'Nyerere → Dar es Salaam', travel: 'Walking safari + transfer', stay: '—', meals: 'Breakfast', desc: 'Set out on foot with your guide and an armed ranger, who reads the ground ahead — fresh tracks, the sweet-hay scent of buffalo. The bush feels bigger when you walk it. Return to camp for breakfast, then transfer back to Dar es Salaam, arriving in the late afternoon.' },
    ],
    notes: NOTES,
    routeLabel: 'Dar es Salaam / Zanzibar → Nyerere N.P. (Rufiji River)',
    routeStops: ['Dar es Salaam', 'Nyerere (Selous)'],
    routeNote:  'Return road transfers from Dar included.',
    included: ['Park & concession fees', 'Boat safari on the Rufiji', 'Guided walking safari with an armed ranger', 'Private 4×4 with pop-up roof & expert guide', 'Accommodation (2 nights) + all meals & water', 'Return road transfers from Dar es Salaam'],
    excluded: ['Flights or ferry to Dar es Salaam / Zanzibar', 'Tanzania visa & travel insurance', 'Gratuities for your guide & staff', 'Drinks, personal items & optional excursions'],
    lodges: [
      { nights: 'Nights 1–2', stars: 'Comfort / Luxury', name: 'Rufiji Riverside Camp', desc: 'A tented camp under jackal-berry trees on the bank of the Rufiji, with the river murmuring just beyond your deck and hippos grunting through the night.', image: '/img/dest/nyerere.webp' },
    ],
    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, excellent visibility', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak dry season',                  avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season / green-season value', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Green season, lush & quiet',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: generateGallery(['Nyerere (Selous)', 'Tarangire']),
    reviews: [
      { quote: 'The boat safari at sunset was magic — hippos everywhere and not another vehicle in sight. Three days, but it felt like a real expedition.', author: 'Thomas & Ana P.', date: 'July 2025' },
      { quote: 'Walking in the bush with our ranger was the highlight of our whole trip. The south is wild in a way the north simply isn\'t.', author: 'Nadia R.', date: 'September 2025' },
    ],
    related: [
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Selous & Mikumi Safari',                   blurb: 'The Rufiji by boat and on foot, then the plains of Mikumi.',        image: '/img/dest/nyerere.webp',   href: '/itineraries/4-day-selous-mikumi-safari' },
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In', blurb: 'The classic northern loop from the coast in four days.',            image: '/img/dest/serengeti.webp', href: '/itineraries/4-day-serengeti-ngorongoro-tarangire-fly-in' },
      { days: '1 DAY',  rating: '4.8', price: 'On request', name: '1-Day Mikumi Fly-In from Zanzibar',              blurb: 'A quick big-game day on the Mkata floodplain and back to the coast.', image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/1-day-mikumi-fly-in-from-zanzibar' },
    ],
  },

  /* ─── 4-Day Selous & Mikumi ────────────────────────────────────────────── */
  '4-day-selous-mikumi-safari': {
    slug: '4-day-selous-mikumi-safari',
    name: '4-Day Selous & Mikumi Safari',
    meta: {
      title: '4-Day Selous & Mikumi Safari | African Genuine Tours & Safaris',
      description: 'Four days across Tanzania\'s southern wilderness — boat safaris on the Rufiji, walking with rangers, and the open Mikumi plains.',
    },
    heroImage:  '/img/dest/nyerere.webp',
    heroTags:  ['★ SOUTHERN CIRCUIT', 'RIVER · WALK · 2 PARKS'],
    tagline:   '4-Day Selous & Mikumi Safari',
    subhead:   'Four days across Tanzania\'s southern wilderness — the Rufiji River and walking safaris of Nyerere, then the open plains of Mikumi, all from Dar es Salaam.',
    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Southern Circuit', href: '/itineraries' },
    ],
    facts: [
      { label: 'Duration',    value: '4 days',     sub: '3 nights' },
      { label: 'Group size',  value: 'Max 6',       sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',   sub: 'Dry-season game viewing' },
      { label: 'Difficulty',  value: 'Easy–Mod',    sub: 'Some walking' },
      { label: 'From',        value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'This loop pairs Tanzania\'s two great southern parks. In Nyerere (Selous) you explore the Rufiji by boat and on foot; in Mikumi you swap the river for wide floodplains that feel like a quieter Serengeti. Between them you get game drives, a boat safari and a walking safari — a fast, varied introduction to the south, all from Dar es Salaam.',
    ],
    highlights: [
      { num: '01', title: 'Boat safari on the Rufiji', desc: 'Drift past hippo pods and basking crocodiles on one of Africa\'s great rivers.' },
      { num: '02', title: 'Walking safari',             desc: 'Track game on foot with an armed ranger — the bush at eye level.' },
      { num: '03', title: 'The Mkata floodplain',       desc: 'Mikumi\'s open plains, often called a quieter mini-Serengeti.' },
      { num: '04', title: 'Two parks, no crowds',       desc: 'The south\'s wide horizons and uncrowded game viewing, from Dar es Salaam.' },
    ],
    days: [
      { n: 1, title: 'Dar es Salaam → Nyerere · Rufiji by boat', place: 'Nyerere (Selous)',        travel: 'Road transfer + boat',    stay: 'Rufiji riverside camp', meals: 'Lunch · Dinner',              desc: 'Leave Dar early; the city gives way to red-dust roads and roadside mango stalls before a hot lunch at Kibiti. At the gate the Rufiji spreads wide and bronze — you trade the vehicle for a boat, skimming past yawning hippos and glinting crocodiles to your riverside camp.' },
      { n: 2, title: 'Nyerere game drives, dawn & dusk',          place: 'Nyerere (Selous)',        travel: 'Full-day game drives',    stay: 'Rufiji riverside camp', meals: 'Breakfast · Lunch · Dinner', desc: 'First light brings lion tracks across the sand and elephant herds filing down to drink. Game-drive until the sun climbs high, picnic beneath a sausage tree, then head out again in the bronze late-afternoon light, scanning for wild dog. Dinner under a sky thick with stars.' },
      { n: 3, title: 'Drive to Mikumi · afternoon game drive',    place: 'Mikumi N.P.',              travel: 'Transfer + game drive',   stay: 'Mikumi tented camp',   meals: 'Breakfast · Lunch · Dinner', desc: 'Leave the river behind and cross to Mikumi, where the road opens onto wide plains. Drive straight into the park in the afternoon — elephants fanning their ears, giraffes at the acacias, buffalo clustered at a waterhole — before pulling into camp for the night.' },
      { n: 4, title: 'Morning in Mikumi · return to Dar',         place: 'Mikumi → Dar es Salaam',  travel: 'AM drive + transfer',     stay: '—',                   meals: 'Breakfast · Lunch',          desc: 'A final morning game drive on the Mkata floodplain as the park wakes — a lion\'s roar, birds through the trees, a zebra kicking up dust. As the sun climbs you begin the drive back to Dar es Salaam.' },
    ],
    notes: NOTES,
    routeLabel: 'Dar es Salaam → Nyerere (Rufiji) → Mikumi → Dar es Salaam',
    routeStops: ['Dar es Salaam', 'Nyerere (Selous)', 'Mikumi'],
    routeNote:  'Return road transfers from Dar included.',
    included: ['Park fees (both parks)', 'Boat safari on the Rufiji', 'Guided walking safari with an armed ranger', 'Private 4×4 with pop-up roof & expert guide', 'Accommodation (3 nights) + all meals & water', 'Return road transfers from Dar es Salaam'],
    excluded: ['Flights or ferry to Dar es Salaam / Zanzibar', 'Tanzania visa & travel insurance', 'Gratuities for your guide & staff', 'Drinks, personal items & optional excursions'],
    lodges: [
      { nights: 'Nights 1–2', stars: 'Comfort / Luxury', name: 'Rufiji Riverside Camp', desc: 'Canvas rooms under jackal-berry trees on the bank of the Rufiji, with the river just beyond the deck.', image: '/img/dest/nyerere.webp' },
      { nights: 'Night 3',    stars: 'Comfort / Luxury', name: 'Mikumi Tented Camp',    desc: 'A comfortable camp on the edge of the Mkata floodplain, perfectly placed for an early morning game drive.', image: '/img/tours/northern-circuit.webp' },
    ],
    departures: [
      { window: 'Jun — Jul 2026', note: 'Dry season, excellent visibility', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Aug — Sep 2026', note: 'Peak dry season',                  avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Oct — Nov 2026', note: 'Late season / green-season value', avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Feb 2027', note: 'Green season, lush & quiet',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: generateGallery(['Nyerere (Selous)', 'Serengeti']),
    reviews: [
      { quote: 'Two completely different parks in one short trip — the river in Selous, then the plains of Mikumi. Superb value, and never a crowd.', author: 'Greg & Miriam L.', date: 'August 2025' },
      { quote: 'Our guide made the drives fly by and the walking safari was genuinely thrilling. The south deserves far more visitors than it gets.', author: 'Yusuf A.', date: 'June 2025' },
    ],
    related: [
      { days: '3 DAYS', rating: '4.8', price: 'On request', name: '3-Day Nyerere (Selous) River Safari',            blurb: 'Boat and walking safaris on the Rufiji from Dar or Zanzibar.',        image: '/img/dest/nyerere.webp',   href: '/itineraries/3-day-nyerere-selous-river-safari' },
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In', blurb: 'The classic northern loop from the coast in four days.',            image: '/img/dest/serengeti.webp', href: '/itineraries/4-day-serengeti-ngorongoro-tarangire-fly-in' },
      { days: '1 DAY',  rating: '4.8', price: 'On request', name: '1-Day Mikumi Fly-In from Zanzibar',              blurb: 'A quick big-game day on the Mkata floodplain and back to the coast.', image: '/img/tours/serengeti-zanzibar.webp', href: '/itineraries/1-day-mikumi-fly-in-from-zanzibar' },
    ],
  },

  /* ─── 1-Day Mikumi ─────────────────────────────────────────────────────── */
  '1-day-mikumi-fly-in-from-zanzibar': {
    slug: '1-day-mikumi-fly-in-from-zanzibar',
    name: '1-Day Mikumi Fly-In Safari from Zanzibar',
    meta: {
      title: '1-Day Mikumi Fly-In Safari from Zanzibar | African Genuine Tours & Safaris',
      description: 'A genuine big-game day from the beach — fly to Mikumi\'s Mkata floodplain, game-drive all day, and return to Zanzibar the same evening.',
    },
    heroImage:  '/img/tours/serengeti-zanzibar.webp',
    heroTags:  ['★ FLY-IN FROM ZANZIBAR', '1 DAY · NO OVERNIGHT'],
    tagline:   '1-Day Mikumi Fly-In Safari from Zanzibar',
    subhead:   'A real big-game day from the beach — fly to Mikumi\'s Mkata floodplain in the morning, game-drive all day, and be back on the coast by evening.',
    breadcrumb: [
      { label: 'Safaris',          href: '/itineraries' },
      { label: 'Tanzania',         href: '/itineraries' },
      { label: 'Southern Circuit', href: '/itineraries' },
    ],
    facts: [
      { label: 'Duration',    value: '1 day',       sub: 'no overnight' },
      { label: 'Group size',  value: 'Max 6',        sub: 'Private available' },
      { label: 'Best season', value: 'Jun — Oct',    sub: 'Dry-season game viewing' },
      { label: 'Difficulty',  value: 'Easy',         sub: 'Vehicle-based' },
      { label: 'From',        value: 'On request',   sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Mikumi\'s open plains and good roads make it the most efficient safari you can do from Zanzibar. Fly in for the morning and spend the day looking for elephant, giraffe, zebra, buffalo and lion across the Mkata floodplain — often called a mini-Serengeti — pause for a picnic at the Hippo Pools, and fly back the same evening. Bring a daypack; we store your luggage on the island.',
    ],
    highlights: [
      { num: '01', title: 'Return flights, same day',  desc: 'Morning out, evening back — a real safari without giving up beach time.' },
      { num: '02', title: 'The Mkata floodplain',      desc: 'Open plains and high wildlife density, often called a mini-Serengeti.' },
      { num: '03', title: 'Picnic at the Hippo Pools', desc: 'A classic Mikumi viewpoint with hippos, crocodiles and colourful birdlife.' },
      { num: '04', title: 'Daypack only',              desc: 'Fly light — we store your larger bags on Zanzibar at no charge.' },
    ],
    days: [
      { n: 1, title: 'Zanzibar → Mikumi → Zanzibar', place: 'Mikumi N.P.', travel: 'Return flights + game drives', stay: '—', meals: 'Lunch', desc: 'A morning pickup from your hotel and a short flight land you at Kikoboga (direct when available, or via Dar). Enter through Kikoboga Gate and game-drive the Mkata floodplain — elephant, giraffe, zebra, buffalo, and a fair chance of lion. Picnic at the Hippo Pools, then explore the baobab valleys and miombo woodland before your afternoon flight back to Zanzibar and a hotel transfer that evening.' },
    ],
    notes: NOTES,
    routeLabel: 'Zanzibar ✈ Kikoboga (Mikumi) ✈ Zanzibar',
    routeStops: ['Zanzibar', 'Mikumi'],
    routeNote:  'Return flights & lunch included.',
    included: ['Return domestic flights Zanzibar – Mikumi', 'All park & conservation fees', 'Private 4×4 with pop-up roof & expert guide', 'Hotel & airport transfers on Zanzibar', 'Picnic lunch & drinking water', 'Free Zanzibar luggage storage'],
    excluded: ['International flights to Tanzania', 'Tanzania visa & travel insurance', 'Gratuities for your guide', 'Drinks, personal items & optional extras'],
    lodges: [
      { nights: 'No overnight', stars: 'Day Trip', name: 'You stay on Zanzibar', desc: 'This is a same-day safari — you sleep in your own Zanzibar hotel the night before and after. Fly with a daypack only; we store larger bags securely on the island while you\'re away.', image: '/img/dest/zanzibar.webp' },
    ],
    departures: [
      { window: 'Jun — Oct 2026', note: 'Best wildlife visibility',         avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Nov — Dec 2026', note: 'Short-rains green season',         avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jan — Mar 2027', note: 'Green season, fewer crowds',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Year-round',     note: 'Departures most days on request',  avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: generateGallery(['Zanzibar', 'Serengeti']),
    reviews: [
      { quote: 'We couldn\'t believe how much we saw in one day — elephants, giraffe, even lions — and were back at our hotel for dinner.', author: 'Chloe & Ben S.', date: 'August 2025' },
      { quote: 'The perfect add-on to a beach holiday. Smooth flights and a brilliant guide who made every minute count.', author: 'Rahul K.', date: 'July 2025' },
    ],
    related: [
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Serengeti, Ngorongoro & Tarangire Fly-In', blurb: 'The classic northern loop from the coast in four days.',        image: '/img/dest/serengeti.webp', href: '/itineraries/4-day-serengeti-ngorongoro-tarangire-fly-in' },
      { days: '4 DAYS', rating: '4.9', price: 'On request', name: '4-Day Selous & Mikumi Safari',                   blurb: 'The Rufiji by boat and on foot, then the plains of Mikumi.',   image: '/img/dest/nyerere.webp',   href: '/itineraries/4-day-selous-mikumi-safari' },
      { days: '3 DAYS', rating: '4.8', price: 'On request', name: '3-Day Nyerere (Selous) River Safari',            blurb: 'Boat and walking safaris on the Rufiji from Dar or Zanzibar.', image: '/img/dest/nyerere.webp',   href: '/itineraries/3-day-nyerere-selous-river-safari' },
    ],
  },
};
