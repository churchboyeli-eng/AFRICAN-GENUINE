import type { Tour, GalleryTile } from './tours/types';

function ac(avail: string): string {
  if (avail === 'Available') return '#a9d0a0';
  if (avail === 'Enquire')   return '#c8a55c';
  return '#9b9078';
}

const INCLUDED = [
  'Airport transfers on arrival and departure',
  "Two nights' hotel in Moshi (B&B) before and after the climb",
  'All national park entry, camping/hut and rescue fees',
  'Professional chief & assistant guides, cook and porters',
  'All meals on the mountain and treated drinking water',
  'Quality four-season tents and sleeping mats (camping routes)',
  'Emergency oxygen, first-aid kit and daily health checks',
  'Summit certificate',
];

const EXCLUDED = [
  'International flights and Tanzania visa',
  'Travel insurance with high-altitude & evacuation cover (mandatory)',
  'Personal climbing gear and sleeping bag (rental available)',
  'Tips for your mountain crew',
  'Drinks, snacks and personal expenses',
  'Anything not listed under "included"',
];

const NOTES = [
  'All Kilimanjaro programmes are original African Genuine Tours & Safaris itineraries — pace and camp placement can be adjusted for your group.',
  'Summit success depends on weather, acclimatisation, and personal pace. Your chief guide will always advise the right decision.',
  'Health & Safety: Open to fit travellers aged 12–70. Guides check oxygen saturation and pulse twice daily, carry emergency oxygen, and are trained to respond to altitude sickness. Drink 3–4 L water per day, keep the guide\'s pace, and report any symptoms immediately. Comprehensive insurance covering high-altitude trekking and emergency evacuation is required.',
];

const WHY_BOOK = [
  'African Genuine Tours & Safaris is a Tanzanian-owned operator — our guides have grown up in the shadow of Kilimanjaro',
  'Private climb for your group only: your pace, your crew, your mess tent',
  'Chief guide with a minimum of five years on the mountain and a current First Aid certificate',
  'Transparent all-inclusive pricing — park fees, tents, meals, crew, and two Moshi hotel nights all included',
  'Daily health checks with pulse-oximetry readings, plus emergency oxygen always on hand',
  'Real-time WhatsApp updates from our Moshi operations desk throughout your climb',
  'Summit certificate presentation at the gate and a celebration dinner in Moshi',
];

const GALLERY: GalleryTile[] = [
  { src: '/img/tours/machame.webp',         alt: 'Trail through the heather zone',          large: true },
  { src: '/img/tours/lemosho.webp',          alt: 'Open moorland on the western approach' },
  { src: '/img/tours/northern-circuit.webp', alt: 'High alpine desert approaching the summit' },
  { src: '/img/tours/migration-crater.webp', alt: 'Summit glaciers and crater rim' },
];

export const climbs: Tour[] = [

  /* ── Machame 7-Day ─────────────────────────────────────────────────────── */
  {
    slug:     'machame-7-day',
    name:     'Machame Route — 7 Days',
    meta: {
      title:       'Machame Route — 7 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'The most popular Kilimanjaro route — five climate zones, the Barranco Wall, and a climb-high sleep-low profile with an excellent summit-success record.',
    },
    heroImage:  '/img/tours/machame.webp',
    heroTags:   ['★ THE CLASSIC · "WHISKEY ROUTE"', '7 DAYS · CAMPING'],
    tagline:    'Machame Route — 7 Days',
    subhead:    'The most popular way up Kilimanjaro — five climate zones, the famous Barranco Wall, and a climb-high sleep-low profile with an excellent success record.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',      value: '7 days',      sub: '6 nights on the mountain' },
      { label: 'Grade',         value: 'Moderate',    sub: 'non-technical' },
      { label: 'Distance',      value: '≈ 62 km',     sub: 'south-west approach' },
      { label: 'Sleeps',        value: 'Camping',      sub: 'four-season tents' },
      { label: 'From',          value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Machame is the most popular way up Kilimanjaro, and it earns that popularity. Starting in dense tropical forest on the south-west side, it climbs through all five of the mountain\'s climate zones, takes in the celebrated Barranco Wall, and follows a natural climb-high, sleep-low profile that gives it one of the best acclimatisation and summit-success records of the week-long routes. Demanding but non-technical — an excellent choice for a fit first-time climber who wants scenery and a strong chance of the summit.',
    ],
    highlights: [
      { num: '01', title: 'Five climate zones',   desc: 'From rainforest to arctic summit in a single week.' },
      { num: '02', title: 'The Barranco Wall',    desc: 'A thrilling hands-and-feet scramble with big views of Kibo.' },
      { num: '03', title: 'Strong success rate',  desc: 'A natural climb-high, sleep-low profile aids acclimatisation.' },
      { num: '04', title: 'Private & supported',  desc: 'Your own guide team, cook and porters for your party alone.' },
    ],
    days: [
      { n: 1, title: 'Arrival in Moshi',                             place: 'Moshi',               travel: 'Airport transfer',                                          stay: 'Hotel, Moshi',        meals: 'B&B',    desc: 'Met at Kilimanjaro International Airport and driven to your hotel in Moshi. In the evening your guide hosts a full briefing and equipment check, so you begin rested and prepared.' },
      { n: 2, title: 'Machame Gate to Machame Camp',                  place: 'Rainforest',           travel: 'Trek 5–7 hrs · ≈11 km · 1,640 m → 2,835 m',               stay: 'Machame Camp',        meals: 'B·L·D',  desc: 'Drive to the Machame Gate for registration, then climb a steady forest trail beneath a dripping canopy of giant heather and fig — a waterproof is essential — before easing into your first night under canvas.' },
      { n: 3, title: 'Machame Camp to Shira Camp',                    place: 'Moorland',             travel: 'Trek 5–6 hrs · ≈5 km · 2,835 m → 3,750 m',                stay: 'Shira Camp',          meals: 'B·L·D',  desc: 'The forest thins into open moorland and the Shira Plateau opens ahead. A shorter day by distance, but you feel the altitude, so the pace stays gentle; a short acclimatisation walk toward Lava Tower follows before you sleep low.' },
      { n: 4, title: 'Shira to Barranco, via Lava Tower',             place: 'High point 4,600 m',  travel: 'Trek 6–8 hrs · ≈11 km · sleep 3,900 m',                    stay: 'Barranco Camp',       meals: 'B·L·D',  desc: 'The climb-high, sleep-low day: ascend to Lava Tower at 4,600 m for lunch and acclimatisation, then descend into the dramatic Barranco Valley to camp beneath the wall you climb tomorrow.' },
      { n: 5, title: 'Barranco Wall to Barafu, via Karanga',          place: 'Alpine desert',        travel: 'Trek 8–10 hrs · ≈11 km · 3,900 m → 4,673 m',              stay: 'Barafu Camp',         meals: 'B·L·D',  desc: 'An early start up the Barranco Wall before the crowds — a scramble, not a technical climb — then through the Karanga Valley for lunch and up to Barafu, the summit camp. Dinner is early; the summit push begins near midnight.' },
      { n: 6, title: 'Summit day — Uhuru Peak, then Millennium Camp', place: 'Summit 5,895 m',       travel: 'Trek 8–12 hrs · 4,673 m → 5,895 m → 3,950 m',             stay: 'Millennium Camp',     meals: 'B·L·D',  desc: 'Leave around midnight for the cold climb to Stella Point on the crater rim, reaching Uhuru Peak — the highest point in Africa — near sunrise. Every two climbers are paired with a guide. After photographs by the glaciers, descend to Barafu to rest, then continue to the softer air of Millennium Camp.' },
      { n: 7, title: 'Millennium Camp to Mweka Gate',                 place: 'Rainforest',           travel: 'Trek 4–6 hrs · ≈12 km · 3,950 m → 1,640 m',               stay: '—',                   meals: 'B·L',    desc: 'A last easy descent through cloud forest to Mweka Gate, where your summit certificate is presented before the drive back to Moshi for a hot shower and celebration.' },
    ],
    notes:         NOTES,
    routeLabel:    'Machame Gate → Shira → Barranco → Barafu → Uhuru Peak → Mweka Gate',
    routeStops:    ['Machame Gate', 'Shira', 'Lava Tower', 'Barranco', 'Barafu', 'Uhuru Peak', 'Mweka Gate'],
    routeDistance: '5 climate zones',
    routeNote:     'Best months: Jan–Mar & Jun–Oct.',
    included:      INCLUDED,
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',  stars: 'Camping', name: 'Machame Camp',     desc: 'Your first night on the mountain at 2,835 m in the heather zone, with private four-season tent and mess tent.',                                          image: '/img/tours/machame.webp' },
      { nights: 'Night 2',  stars: 'Camping', name: 'Shira Camp',       desc: 'Exposed camp on the open Shira Plateau at 3,750 m — panoramic views of Kibo and cold, brilliantly starlit nights.',                                        image: '/img/tours/machame.webp' },
      { nights: 'Night 3',  stars: 'Camping', name: 'Barranco Camp',    desc: 'Sheltered in the dramatic Barranco Valley at 3,900 m, directly beneath the famous wall you scramble at dawn.',                                             image: '/img/tours/machame.webp' },
      { nights: 'Night 4',  stars: 'Camping', name: 'Barafu Camp',      desc: 'The exposed summit base camp at 4,673 m on a rocky ridge. A few hours here before the midnight start.',                                                    image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 5',  stars: 'Camping', name: 'Millennium Camp',  desc: 'Post-summit rest camp at 3,950 m in a sheltered valley, where you sleep deeply after reaching the Roof of Africa.',                                        image: '/img/tours/machame.webp' },
    ],
    departures: [
      { window: 'Jan — Mar 2026',       note: 'Dry, clear season',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jun — Oct 2026',       note: 'Peak climbing season',    avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Dec 2026 — Mar 2027',  note: 'Dry, clear season',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'The Barranco Wall was the highlight — exhilarating, never scary, and the views from the top were unreal. Our guides got all four of us to the summit.', author: 'Daniel R.', date: 'September 2025' },
      { quote: 'Perfectly paced. Slow where it mattered, and summit morning at Uhuru is something I\'ll never forget.', author: 'Priya M.', date: 'August 2025' },
    ],
    reviewScore: '4.8', reviewCount: '42 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '8 DAYS',  rating: '4.9', price: 'On request', name: 'Lemosho Route — 8 Days',         blurb: 'Scenic, quiet and the highest success rate.',          image: '/img/tours/lemosho.webp',          href: '/kilimanjaro/lemosho-8-day' },
      { days: '7 DAYS',  rating: '4.7', price: 'On request', name: 'Marangu Route — 7 Days',          blurb: 'The classic hut route with the gentlest gradient.',    image: '/img/tour/lodge-highlands.webp',   href: '/kilimanjaro/marangu-7-day' },
      { days: '10 DAYS', rating: '4.9', price: 'On request', name: 'Northern Circuit — 10 Days',      blurb: 'The longest, quietest route with the best acclimatisation.', image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/northern-circuit-10-day' },
    ],
  },

  /* ── Lemosho 8-Day ─────────────────────────────────────────────────────── */
  {
    slug:     'lemosho-8-day',
    name:     'Lemosho Route — 8 Days',
    meta: {
      title:       'Lemosho Route — 8 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'Our first recommendation — remote western forests, the Shira Plateau, and the length your body needs for one of the highest summit-success rates on the mountain.',
    },
    heroImage:  '/img/tours/lemosho.webp',
    heroTags:   ['★ THE SCENIC FAVOURITE', '8 DAYS · CAMPING'],
    tagline:    'Lemosho Route — 8 Days',
    subhead:    'Our first recommendation — remote western forests, the beautiful Shira Plateau, and the length your body needs for one of the highest summit-success rates on the mountain.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',  value: '8 days',      sub: '7 nights on the mountain' },
      { label: 'Grade',     value: 'Moderate',    sub: 'non-technical' },
      { label: 'Distance',  value: '≈ 70 km',     sub: 'western approach' },
      { label: 'Sleeps',    value: 'Camping',      sub: 'four-season tents' },
      { label: 'From',      value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Lemosho is our first recommendation for most climbers. It begins quietly in the forests of the remote western side, crosses the beautiful Shira Plateau, and only later joins the busier trails — so you enjoy solitude and outstanding scenery through the early days. Above all, its length gives your body the best possible time to acclimatise, which is why it carries one of the highest summit-success rates on the mountain.',
    ],
    highlights: [
      { num: '01', title: 'Quiet western start',           desc: 'Remote forest and the Shira Plateau, away from the crowds.' },
      { num: '02', title: 'Best-in-class acclimatisation', desc: 'Eight days give your body time to adjust — and improve your odds.' },
      { num: '03', title: 'The Barranco Wall',             desc: 'A fun scramble with a big reward at the top.' },
      { num: '04', title: 'Sunrise from Uhuru',            desc: 'Reach the Roof of Africa as the sun breaks over the plains.' },
    ],
    days: [
      { n: 1, title: 'Arrival in Moshi',                             place: 'Moshi',              travel: 'Airport transfer',                                      stay: 'Hotel, Moshi',     meals: 'B&B',   desc: 'Met at the airport and transferred to your hotel, with an evening briefing and gear check so nothing is left to chance.' },
      { n: 2, title: 'Londorossi Gate to Big Tree Camp',             place: 'Rainforest',          travel: 'Trek ≈3 hrs · ≈7 km · 2,350 m → 2,750 m',             stay: 'Big Tree Camp',    meals: 'B·L·D', desc: 'A scenic drive west through farmland to the Londorossi Gate for registration, then a short, gentle walk through untouched rainforest — watch the canopy for colobus monkeys — to the quiet Big Tree Camp.' },
      { n: 3, title: 'Big Tree Camp to Shira 1 Camp',                place: 'Moorland',            travel: 'Trek 6–7 hrs · ≈10 km · 2,750 m → 3,550 m',            stay: 'Shira 1 Camp',     meals: 'B·L·D', desc: 'The forest opens into heath and moorland dotted with giant lobelia. You cross the Shira Ridge with Mount Meru glowing to the west and Kibo ahead, then drop to Shira 1 Camp.' },
      { n: 4, title: 'Shira 1 to Shira 2 Camp',                     place: 'Moorland',            travel: 'Trek 3–4 hrs · ≈8 km · 3,550 m → 3,840 m',             stay: 'Shira 2 Camp',     meals: 'B·L·D', desc: 'A gentler day across the open plateau with some of the finest views of Kibo on the whole route. After lunch and a short acclimatisation walk, the afternoon is yours to rest under a brilliant night sky.' },
      { n: 5, title: 'Shira 2 to Barranco, via Lava Tower',         place: 'High point 4,600 m', travel: 'Trek 6–7 hrs · ≈11 km · sleep 3,950 m',                 stay: 'Barranco Camp',    meals: 'B·L·D', desc: 'A classic acclimatisation day: climb past the jagged Shark\'s Tooth to Lava Tower at 4,600 m, then descend into the Barranco Valley to sleep nearly 700 m lower.' },
      { n: 6, title: 'Barranco Wall to Barafu, via Karanga',        place: 'Alpine desert',       travel: 'Trek 6–7 hrs · ≈9 km · 3,950 m → 4,700 m',             stay: 'Barafu Camp',      meals: 'B·L·D', desc: 'Start with the Barranco Wall — a fun scramble — then cross streams and the Karanga Valley for lunch. A final climb up a rocky ridge brings you to Barafu. Rest early; the midnight start is close.' },
      { n: 7, title: 'Summit day — Uhuru Peak, then Mweka Camp',    place: 'Summit 5,895 m',      travel: 'Up 6–8 hrs · down 4–5 hrs · 4,700 m → 5,895 m → 3,100 m', stay: 'Mweka Camp',    meals: 'B·L·D', desc: 'Woken before midnight, you climb the switchbacks toward Stella Point, passing the Rebmann and Ratzel glaciers as the sky pales, then a gentle hour along the rim to Uhuru Peak for sunrise. Descend to Barafu to rest, then on to the forest edge at Mweka Camp.' },
      { n: 8, title: 'Mweka Camp to Mweka Gate',                    place: 'Rainforest',          travel: 'Trek 4–5 hrs · ≈10 km · 3,100 m → 1,640 m',            stay: '—',                meals: 'B·L',   desc: 'A relaxed final descent through forest to Mweka Gate, where your summit certificate is presented before the drive back to your Moshi hotel.' },
    ],
    notes:         NOTES,
    routeLabel:    'Londorossi Gate → Shira → Barranco → Barafu → Uhuru Peak → Mweka Gate',
    routeStops:    ['Londorossi Gate', 'Big Tree Camp', 'Shira Plateau', 'Lava Tower', 'Barranco', 'Barafu', 'Uhuru Peak', 'Mweka Gate'],
    routeDistance: 'Highest success rate',
    routeNote:     'Best months: Jan–Mar & Jun–Oct.',
    included:      INCLUDED,
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',  stars: 'Camping', name: 'Big Tree Camp',   desc: 'Quiet forest camp at 2,750 m beneath enormous podocarpus trees, often shared with colobus monkeys overhead.',                                               image: '/img/tours/lemosho.webp' },
      { nights: 'Night 2',  stars: 'Camping', name: 'Shira 1 Camp',    desc: 'Camp on the edge of the Shira Plateau at 3,550 m with open moorland views — one of Lemosho\'s most scenic overnights.',                                     image: '/img/tours/lemosho.webp' },
      { nights: 'Night 3',  stars: 'Camping', name: 'Shira 2 Camp',    desc: 'Open plateau camp at 3,840 m with Kibo filling the eastern skyline and brilliant stargazing.',                                                              image: '/img/tours/lemosho.webp' },
      { nights: 'Night 4',  stars: 'Camping', name: 'Barranco Camp',   desc: 'Dramatic valley camp at 3,950 m beneath the Barranco Wall, which you scale the following morning.',                                                         image: '/img/tours/machame.webp' },
      { nights: 'Night 5',  stars: 'Camping', name: 'Barafu Camp',     desc: 'The stark summit base at 4,700 m — a few hours of rest before the midnight start.',                                                                         image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 6',  stars: 'Camping', name: 'Mweka Camp',      desc: 'A sheltered forest-edge camp at 3,100 m where you sleep deeply after the summit, the mountain still towering behind you.',                                   image: '/img/tours/lemosho.webp' },
    ],
    departures: [
      { window: 'Jan — Mar 2026',       note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jun — Oct 2026',       note: 'Peak climbing season', avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Dec 2026 — Mar 2027',  note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'Eight days made all the difference — we felt strong on summit night while others were struggling. The scenery in the first few days is stunning and almost empty.', author: 'Sofia D.', date: 'October 2025' },
      { quote: 'The best decision we made was the longer route. Highly recommend Lemosho to anyone serious about summiting.', author: 'Marcus H.', date: 'July 2025' },
    ],
    reviewScore: '4.9', reviewCount: '58 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '7 DAYS',  rating: '4.8', price: 'On request', name: 'Machame Route — 7 Days',    blurb: 'The classic; great value and scenery.',          image: '/img/tours/machame.webp',          href: '/kilimanjaro/machame-7-day' },
      { days: '10 DAYS', rating: '4.9', price: 'On request', name: 'Northern Circuit — 10 Days', blurb: 'Longest and quietest, best acclimatisation.',    image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/northern-circuit-10-day' },
      { days: '8 DAYS',  rating: '4.7', price: 'On request', name: 'Rongai Route — 8 Days',      blurb: 'The quiet northern approach.',                   image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/rongai-8-day' },
    ],
  },

  /* ── Rongai 8-Day ──────────────────────────────────────────────────────── */
  {
    slug:     'rongai-8-day',
    name:     'Rongai Route — 8 Days',
    meta: {
      title:       'Rongai Route — 8 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'The only climb from the north — drier slopes, true wilderness, and a descent down the classic Marangu trail.',
    },
    heroImage:  '/img/tours/northern-circuit.webp',
    heroTags:   ['★ THE QUIET ONE', '8 DAYS · CAMPING'],
    tagline:    'Rongai Route — 8 Days',
    subhead:    'The only climb from the north, and the most peaceful — drier slopes, true wilderness, and a descent of the classic Marangu trail.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',  value: '8 days',      sub: '7 nights on the mountain' },
      { label: 'Grade',     value: 'Moderate',    sub: 'non-technical' },
      { label: 'Distance',  value: '≈ 73 km',     sub: 'northern approach' },
      { label: 'Sleeps',    value: 'Camping',      sub: 'four-season tents' },
      { label: 'From',      value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Rongai is the only route to climb Kilimanjaro from the north, near the Kenyan border, and it is the most peaceful of them all. The northern side is drier, which makes Rongai a strong choice in the wetter months, and the approach crosses true wilderness — open savannah and cave-dotted moorland where buffalo, jackal and abundant birdlife are often seen. A gentle, steady climb that finishes down the classic Marangu trail.',
    ],
    highlights: [
      { num: '01', title: 'The mountain\'s quietest trail', desc: 'Far fewer climbers than the southern routes.' },
      { num: '02', title: 'Good in the wetter months',     desc: 'The drier northern slopes hold up when the south is soaked.' },
      { num: '03', title: 'Mawenzi Tarn',                  desc: 'Camp in a dramatic cirque beneath the spires of Mawenzi.' },
      { num: '04', title: 'Wilderness & wildlife',          desc: 'Buffalo, jackal and rich birdlife on the northern approach.' },
    ],
    days: [
      { n: 1, title: 'Arrival in Moshi',                            place: 'Moshi',              travel: 'Airport transfer',                                          stay: 'Hotel, Moshi',     meals: 'B&B',   desc: 'Airport pick-up, transfer to your hotel, and an evening briefing and gear check with your guide.' },
      { n: 2, title: 'Nalemoru Gate to Simba Camp',                 place: 'Farmland & forest',  travel: 'Trek 3–4 hrs · ≈6.5 km · 1,950 m → 2,650 m',              stay: 'Simba Camp',       meals: 'B·L·D', desc: 'A long, scenic drive to the north side brings you to the Nalemoru trailhead. The path climbs through maize fields into pine and podocarpus forest — listen for colobus and blue monkeys — to Simba Camp beneath Kibo.' },
      { n: 3, title: 'Simba Camp to Second Cave Camp',              place: 'Moorland',            travel: 'Trek 3–4 hrs · ≈4 km · 2,650 m → 3,150 m',                stay: 'Second Cave Camp', meals: 'B·L·D', desc: 'A steady climb across open moorland, Kibo drawing closer and the serrated peak of Mawenzi coming into view. An optional acclimatisation walk toward Third Cave rounds off the day.' },
      { n: 4, title: 'Second Cave to Kikelewa Caves Camp',          place: 'Moorland',            travel: 'Trek 3–4 hrs · ≈5 km · 3,150 m → 3,600 m',                stay: 'Kikelewa Caves',   meals: 'B·L·D', desc: 'The trail turns toward Kibo across exposed heath; the vegetation thins as you gain height, and buffalo are sometimes seen. Lunch at the sheltered Kikelewa Caves.' },
      { n: 5, title: 'Kikelewa Caves to Mawenzi Tarn',             place: 'Alpine desert',       travel: 'Trek 3–4 hrs · ≈6 km · 3,600 m → 4,330 m',                stay: 'Mawenzi Tarn',     meals: 'B·L·D', desc: 'A short but steep climb up grassy slopes to Mawenzi Tarn, set in a dramatic cirque beneath the spires of Mawenzi Peak. The afternoon is for gentle acclimatisation walks and rest.' },
      { n: 6, title: 'Mawenzi Tarn to Kibo Hut',                   place: 'Alpine desert',       travel: 'Trek 4–5 hrs · ≈9 km · 4,330 m → 4,700 m',                stay: 'Kibo Hut',         meals: 'B·L·D', desc: 'Cross The Saddle, the wide lunar expanse of lava rubble between Mawenzi and Kibo, with the summit rising ahead. An early hot meal and an early night at Kibo Hut set you up for the midnight start.' },
      { n: 7, title: 'Summit day — Uhuru Peak, then Horombo Hut',  place: 'Summit 5,895 m',      travel: 'Up 6–8 hrs · down 5–6 hrs · 4,700 m → 5,895 m → 3,700 m', stay: 'Horombo Hut',      meals: 'B·L·D', desc: 'Leaving shortly after midnight, climb a long scree slope to Gilman\'s Point on the crater rim, then follow the rim past ice cliffs to Uhuru Peak for sunrise. Descend to Kibo Hut to rest, then on to Horombo Hut for a deep sleep.' },
      { n: 8, title: 'Horombo Hut to Marangu Gate',                place: 'Rainforest',          travel: 'Trek 5–6 hrs · ≈20 km · 3,700 m → 1,800 m',               stay: '—',                meals: 'B·L',   desc: 'A long, pleasant descent past Mandara Hut and down through lush rainforest to the Marangu Gate, where your summit certificate is presented before the transfer back to your hotel.' },
    ],
    notes:         NOTES,
    routeLabel:    'Nalemoru Gate → Simba → Mawenzi Tarn → Kibo Hut → Uhuru Peak → Marangu Gate',
    routeStops:    ['Nalemoru Gate', 'Simba Camp', 'Mawenzi Tarn', 'Kibo Hut', 'Uhuru Peak', 'Horombo Hut', 'Marangu Gate'],
    routeDistance: 'Northern wilderness',
    routeNote:     'Best months: Jun–Oct; good in shoulder seasons.',
    included:      INCLUDED,
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',  stars: 'Camping', name: 'Simba Camp',       desc: 'Peaceful northern-side camp at 2,650 m — far fewer climbers than the southern routes, with Kibo dominating the sky.',                                   image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 2',  stars: 'Camping', name: 'Second Cave Camp', desc: 'Named for a lava cave shelter at 3,150 m on the open northern moorland, with views across the Kenyan plains.',                                          image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 3',  stars: 'Camping', name: 'Kikelewa Caves',   desc: 'A sheltered camp at 3,600 m among scattered cave formations, one of the most unusual overnight spots on the mountain.',                                  image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 4',  stars: 'Camping', name: 'Mawenzi Tarn',     desc: 'A spectacular cirque camp at 4,330 m beneath the rock spires of Mawenzi — one of the most dramatic sleeping spots on all Kilimanjaro routes.',          image: '/img/tours/migration-crater.webp' },
      { nights: 'Night 5',  stars: 'Hut',     name: 'Kibo Hut',         desc: 'A stone hut at 4,700 m on The Saddle, used briefly before the midnight start. Bring your sleeping bag — the hut is basic.',                            image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 6',  stars: 'Hut',     name: 'Horombo Hut',      desc: 'The large, comfortable hut complex at 3,720 m on the Marangu trail, with dormitory beds and a heated dining room — a well-earned rest after the summit.', image: '/img/tour/lodge-highlands.webp' },
    ],
    departures: [
      { window: 'Jun — Oct 2026',   note: 'Prime northern-side season',       avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Mar — May 2026',   note: 'Drier than the south in the rains', avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Nov — Dec 2026',   note: 'Short-rains shoulder',              avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'We barely saw another group until summit night. Mawenzi Tarn camp is the most beautiful place I\'ve ever slept.', author: 'Elena M.', date: 'September 2025' },
      { quote: 'Chose Rongai for the quiet and it delivered — peaceful, wild, and a superb crew.', author: 'Yusuf A.', date: 'June 2025' },
    ],
    reviewScore: '4.7', reviewCount: '31 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '8 DAYS',  rating: '4.9', price: 'On request', name: 'Lemosho Route — 8 Days',    blurb: 'Scenic, quiet and highest success.',    image: '/img/tours/lemosho.webp',          href: '/kilimanjaro/lemosho-8-day' },
      { days: '7 DAYS',  rating: '4.7', price: 'On request', name: 'Marangu Route — 7 Days',    blurb: 'The classic hut route.',                image: '/img/tour/lodge-highlands.webp',   href: '/kilimanjaro/marangu-7-day' },
      { days: '10 DAYS', rating: '4.9', price: 'On request', name: 'Northern Circuit — 10 Days', blurb: 'Longest and most remote.',             image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/northern-circuit-10-day' },
    ],
  },

  /* ── Northern Circuit 10-Day ───────────────────────────────────────────── */
  {
    slug:     'northern-circuit-10-day',
    name:     'Northern Circuit — 10 Days',
    meta: {
      title:       'Northern Circuit — 10 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'The longest and quietest route on Kilimanjaro — almost all the way around the mountain, with the most gradual acclimatisation and the highest summit-success rate.',
    },
    heroImage:  '/img/tours/northern-circuit.webp',
    heroTags:   ['★ THE LONG WAY ROUND', '10 DAYS · CAMPING'],
    tagline:    'Northern Circuit — 10 Days',
    subhead:    'The longest and quietest route on Kilimanjaro — almost all the way around the mountain, with the most gradual acclimatisation and the highest success rate of all.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',  value: '10 days',     sub: '9 nights on the mountain' },
      { label: 'Grade',     value: 'Moderate',    sub: 'non-technical' },
      { label: 'Distance',  value: '≈ 98 km',     sub: 'full circuit' },
      { label: 'Sleeps',    value: 'Camping',      sub: 'four-season tents' },
      { label: 'From',      value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'The Northern Circuit is the longest and quietest route on Kilimanjaro, tracing almost the full way around the mountain. Its great length means the most gradual acclimatisation of any route — and therefore the highest summit-success rate — while the northern slopes it crosses are seen by very few climbers. If you have the time and want the most complete, most comfortable ascent, this is the one.',
    ],
    highlights: [
      { num: '01', title: 'Highest success rate',    desc: 'Nine days on the mountain give the most gradual acclimatisation.' },
      { num: '02', title: 'The quietest slopes',     desc: 'The remote northern flank is seen by very few climbers.' },
      { num: '03', title: 'Full 360° of the mountain', desc: 'Almost the whole circumference, through every zone.' },
      { num: '04', title: 'Views into Kenya',         desc: 'The northern circuit looks out over the plains far below.' },
    ],
    days: [
      { n: 1,  title: 'Arrival in Moshi',                         place: 'Moshi',            travel: 'Airport transfer',                                             stay: 'Hotel, Moshi',     meals: 'B&B',   desc: 'Airport pick-up, hotel transfer, evening briefing and gear check.' },
      { n: 2,  title: 'Londorossi Gate to Big Tree Camp',         place: 'Rainforest',        travel: 'Trek ≈3 hrs · ≈7 km · 2,350 m → 2,750 m',                  stay: 'Big Tree Camp',    meals: 'B·L·D', desc: 'A drive west to the Londorossi Gate and the trailhead, then a short forest walk — colobus overhead, occasional sign of elephant or buffalo — to the Big Tree Camp.' },
      { n: 3,  title: 'Big Tree Camp to Shira 1 Camp',            place: 'Moorland',          travel: 'Trek 6–7 hrs · ≈10 km · 2,750 m → 3,550 m',                 stay: 'Shira 1 Camp',     meals: 'B·L·D', desc: 'The forest gives way to moorland and the vast Shira Plateau — the floor of an ancient collapsed crater. Cross the Shira Ridge to camp on the plateau\'s edge.' },
      { n: 4,  title: 'Shira 1 to Shira 2 Camp',                 place: 'Moorland',          travel: 'Trek 3–4 hrs · ≈8 km · 3,550 m → 3,840 m',                  stay: 'Shira 2 Camp',     meals: 'B·L·D', desc: 'A short day across the plateau with grand views of Kibo, and time to visit the Shira Cathedral rock formation and take short acclimatisation walks.' },
      { n: 5,  title: 'Shira 2 to Moir Hut Camp',                place: 'Alpine desert',     travel: 'Trek 5–7 hrs · ≈14 km · 3,840 m → 4,200 m',                 stay: 'Moir Hut Camp',    meals: 'B·L·D', desc: 'Leave the popular trails and turn north into high alpine desert, passing the Lava Tower area to the secluded Moir Hut camp beneath the Lent Hills. A short acclimatisation climb rounds off the day.' },
      { n: 6,  title: 'Moir Hut to Buffalo Camp',                place: 'Alpine desert',     travel: 'Trek 5–7 hrs · ≈12 km · 4,200 m → 4,020 m',                 stay: 'Buffalo Camp',     meals: 'B·L·D', desc: 'The circuit proper begins, rolling over the northern slopes with the plains of Kenya far below. An optional detour to the top of the Lent Hills rewards you with sweeping views before you drop to Buffalo Camp.' },
      { n: 7,  title: 'Buffalo Camp to Third Cave Camp',         place: 'Alpine desert',     travel: 'Trek 5–7 hrs · ≈8 km · 4,020 m → 3,870 m',                  stay: 'Third Cave Camp',  meals: 'B·L·D', desc: 'Over the Buffalo Ridge and eastward around the quiet northern flank, the vegetation ever sparser. By Third Cave you are thoroughly acclimatised — the point of this patient route.' },
      { n: 8,  title: 'Third Cave to School Hut',                place: 'Alpine desert',     travel: 'Trek 4–6 hrs · ≈6 km · 3,870 m → 4,800 m',                  stay: 'School Hut',       meals: 'B·L·D', desc: 'A climb up and over The Saddle, the lunar plain between Kibo and Mawenzi, to School Hut — your summit base. Your guide checks your gear for the early start, and you rest.' },
      { n: 9,  title: 'Summit day — Uhuru Peak, then Mweka Camp', place: 'Summit 5,895 m',   travel: '11–15 hrs · ≈19 km · 4,800 m → 5,895 m → 3,060 m',          stay: 'Mweka Camp',       meals: 'B·L·D', desc: 'A pre-dawn start up to Gilman\'s Point on the crater rim, then along the rim past glaciers and ice cliffs to Uhuru Peak for sunrise. After the summit, retrace the rim and descend the Mweka trail to camp at the forest edge.' },
      { n: 10, title: 'Mweka Camp to Mweka Gate',                place: 'Rainforest',        travel: 'Trek 3–4 hrs · ≈10 km · 3,060 m → 1,640 m',                 stay: '—',                meals: 'B·L',   desc: 'A short descent through forest to Mweka Gate, certificates, and the drive back to Moshi for a hot shower and a soft bed.' },
    ],
    notes:         NOTES,
    routeLabel:    'Londorossi Gate → Shira → Moir → Buffalo → School Hut → Uhuru Peak → Mweka Gate',
    routeStops:    ['Londorossi Gate', 'Shira Plateau', 'Moir Hut', 'Buffalo Camp', 'School Hut', 'Uhuru Peak', 'Mweka Gate'],
    routeDistance: 'Best acclimatisation',
    routeNote:     'Best months: Jan–Mar & Jun–Oct.',
    included:      INCLUDED,
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',  stars: 'Camping', name: 'Big Tree Camp',   desc: 'Quiet forest camp at 2,750 m at the trailhead, well away from the crowds of the southern routes.',                                                            image: '/img/tours/lemosho.webp' },
      { nights: 'Nights 2–3', stars: 'Camping', name: 'Shira Plateau', desc: 'Two nights on the open Shira Plateau (Shira 1 at 3,550 m and Shira 2 at 3,840 m) give your body time to begin adjusting before the northern traverse.',      image: '/img/tours/lemosho.webp' },
      { nights: 'Night 4',  stars: 'Camping', name: 'Moir Hut Camp',   desc: 'Secluded alpine desert camp at 4,200 m beneath the Lent Hills — quiet, remote, and rarely visited by other groups.',                                         image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 5',  stars: 'Camping', name: 'Buffalo Camp',    desc: 'The most remote overnight on any Kilimanjaro route, at 4,020 m on the northern flank with Kenya\'s plains stretching below.',                                  image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 6',  stars: 'Camping', name: 'Third Cave Camp', desc: 'Camp at 3,870 m in the cave formations of the eastern circuit — you are now thoroughly acclimatised and ready for the summit.',                               image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 7',  stars: 'Camping', name: 'School Hut',      desc: 'The summit staging camp at 4,800 m, just below the crater rim — an early meal and brief rest before the midnight start.',                                      image: '/img/tours/migration-crater.webp' },
      { nights: 'Night 8',  stars: 'Camping', name: 'Mweka Camp',      desc: 'Post-summit rest camp at 3,060 m in the forest zone — a peaceful end to the longest, quietest route on the mountain.',                                        image: '/img/tours/lemosho.webp' },
    ],
    departures: [
      { window: 'Jan — Mar 2026',       note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jun — Oct 2026',       note: 'Peak climbing season', avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Dec 2026 — Mar 2027',  note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'Ten days sounds like a lot until you\'re striding to the summit feeling strong. The most remote, beautiful days were on the north side with nobody else around.', author: 'James & Rachel T.', date: 'August 2025' },
      { quote: 'If you can spare the time, this is THE route. Our whole group summited comfortably.', author: 'Nadia R.', date: 'October 2025' },
    ],
    reviewScore: '4.9', reviewCount: '24 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '8 DAYS', rating: '4.9', price: 'On request', name: 'Lemosho Route — 8 Days',  blurb: 'Scenic and high success in eight days.',  image: '/img/tours/lemosho.webp',          href: '/kilimanjaro/lemosho-8-day' },
      { days: '8 DAYS', rating: '4.7', price: 'On request', name: 'Rongai Route — 8 Days',   blurb: 'The quiet northern approach.',            image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/rongai-8-day' },
      { days: '7 DAYS', rating: '4.8', price: 'On request', name: 'Machame Route — 7 Days',  blurb: 'The classic, in a week.',                 image: '/img/tours/machame.webp',          href: '/kilimanjaro/machame-7-day' },
    ],
  },

  /* ── Umbwe 7-Day ───────────────────────────────────────────────────────── */
  {
    slug:     'umbwe-7-day',
    name:     'Umbwe Route — 7 Days',
    meta: {
      title:       'Umbwe Route — 7 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'The most direct and demanding way up Kilimanjaro — steep, strenuous and gloriously quiet, for fit and experienced walkers.',
    },
    heroImage:  '/img/tours/machame.webp',
    heroTags:   ['★ THE STEEP CHALLENGE', '7 DAYS · CAMPING'],
    tagline:    'Umbwe Route — 7 Days',
    subhead:    'The most direct and demanding way up Kilimanjaro — steep, strenuous and gloriously quiet, for fit and experienced walkers.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',  value: '7 days',       sub: '6 nights on the mountain' },
      { label: 'Grade',     value: 'Challenging',  sub: 'steep · experienced walkers' },
      { label: 'Distance',  value: '≈ 53 km',      sub: 'direct southern approach' },
      { label: 'Sleeps',    value: 'Camping',       sub: 'four-season tents' },
      { label: 'From',      value: 'On request',   sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Umbwe is the most direct and demanding way up Kilimanjaro — steep and strenuous in its early days, and gloriously quiet as a result. It suits fit, experienced walkers who have hiked at altitude before and want a wilder, less-travelled trail. We run it over seven days, which builds in the acclimatisation the shorter version sacrifices; the first days are hard, but the trail soon joins the scenic southern circuit for a well-paced finish. Less-experienced climbers should consider Machame or Lemosho instead.',
    ],
    highlights: [
      { num: '01', title: 'The most direct ascent',   desc: 'A short, steep line straight up the southern face.' },
      { num: '02', title: 'Blissfully quiet',          desc: 'One of the least-travelled trails on the mountain.' },
      { num: '03', title: 'Dramatic forest ridge',     desc: 'A narrow ridge with the ground falling away on both sides.' },
      { num: '04', title: 'Scenic southern finish',   desc: 'Joins the Barranco–Barafu circuit for a well-paced summit.' },
    ],
    days: [
      { n: 1, title: 'Arrival in Moshi',                             place: 'Moshi',         travel: 'Airport transfer',                                          stay: 'Hotel, Moshi',   meals: 'B&B',   desc: 'Airport pick-up and transfer to your hotel; time to explore Moshi\'s markets and coffee houses if you arrive early. Evening briefing and gear check.' },
      { n: 2, title: 'Umbwe Gate to Umbwe Camp',                     place: 'Rainforest',    travel: 'Trek 5–7 hrs · ≈11 km · 1,800 m → 2,850 m',               stay: 'Umbwe Camp',     meals: 'B·L·D', desc: 'A short drive through banana and coffee smallholdings to the Umbwe Gate. A steep, direct climb through dense rainforest — at times using tree roots as hand-holds — with sudden glimpses of Kibo. Camp among the giant trees near Umbwe Cave.' },
      { n: 3, title: 'Umbwe Camp to Barranco Camp',                  place: 'Moorland',      travel: 'Trek 4–6 hrs · ≈6 km · 2,850 m → 3,900 m',                stay: 'Barranco Camp',  meals: 'B·L·D', desc: 'Climb a spectacular narrow ridge out of the forest into moorland, the ground falling away steeply on either side and Meru appearing to the west. The trail eases into the Barranco Valley; a lunchtime arrival leaves the afternoon to rest and acclimatise.' },
      { n: 4, title: 'Barranco Wall to Karanga Camp',                place: 'High point ~4,200 m', travel: 'Trek 4–6 hrs · ≈6 km · sleep 3,995 m',              stay: 'Karanga Camp',   meals: 'B·L·D', desc: 'An early start on the Barranco Wall — a scramble, not a technical climb — tops out with glorious glacier views. The trail rolls over ridges and valleys to Karanga Camp; an afternoon acclimatisation walk improves your summit chances.' },
      { n: 5, title: 'Karanga Camp to Barafu Camp',                  place: 'Alpine desert', travel: 'Trek 4–5 hrs · ≈5 km · 3,995 m → 4,673 m',                stay: 'Barafu Camp',    meals: 'B·L·D', desc: 'A steady climb through stark high-alpine desert to Barafu, the exposed summit camp on a rocky ridge with clouds far below. A short acclimatisation walk, an early dinner, and an early night.' },
      { n: 6, title: 'Summit day — Uhuru Peak, then Millennium Camp', place: 'Summit 5,895 m', travel: 'Trek 8–12 hrs · 4,673 m → 5,895 m → 3,950 m',           stay: 'Millennium Camp', meals: 'B·L·D', desc: 'Set out around midnight for the long climb to Stella Point, then along to Uhuru Peak for sunrise over Africa with the glaciers glowing gold. Each pair of climbers has a guide watching closely. Descend to Barafu to rest, then continue to Millennium Camp.' },
      { n: 7, title: 'Millennium Camp to Mweka Gate',                place: 'Rainforest',    travel: 'Trek 3–4 hrs · ≈10 km · 3,950 m → 1,640 m',               stay: '—',              meals: 'B·L',   desc: 'A final, gentler descent through cloud forest — watch for colobus monkeys — to Mweka Gate, where your summit certificate is presented before the drive back to Moshi.' },
    ],
    notes:         NOTES,
    routeLabel:    'Umbwe Gate → Barranco → Karanga → Barafu → Uhuru Peak → Mweka Gate',
    routeStops:    ['Umbwe Gate', 'Umbwe Camp', 'Barranco', 'Karanga', 'Barafu', 'Uhuru Peak', 'Mweka Gate'],
    routeDistance: 'Steepest approach',
    routeNote:     'For experienced walkers. Best months: Jan–Mar & Jun–Oct.',
    included:      INCLUDED,
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',  stars: 'Camping', name: 'Umbwe Camp',      desc: 'Remote, quiet camp at 2,850 m near Umbwe Cave in the deep rainforest — rarely visited and genuinely wild.',                                                    image: '/img/tours/machame.webp' },
      { nights: 'Night 2',  stars: 'Camping', name: 'Barranco Camp',   desc: 'Sheltered in the dramatic Barranco Valley at 3,900 m, directly beneath the wall you scramble the next morning.',                                              image: '/img/tours/machame.webp' },
      { nights: 'Night 3',  stars: 'Camping', name: 'Karanga Camp',    desc: 'A small, exposed camp at 3,995 m on a saddle between the Karanga Valley and the higher alpine desert — the gateway to Barafu.',                               image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 4',  stars: 'Camping', name: 'Barafu Camp',     desc: 'The exposed summit base at 4,673 m on a rocky ridge — a few cold hours before the midnight start.',                                                           image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 5',  stars: 'Camping', name: 'Millennium Camp', desc: 'Post-summit rest camp at 3,950 m in a sheltered valley, where you sleep deeply after the Roof of Africa.',                                                    image: '/img/tours/machame.webp' },
    ],
    departures: [
      { window: 'Jan — Mar 2026',       note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jun — Oct 2026',       note: 'Peak climbing season', avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Dec 2026 — Mar 2027',  note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'Tough first two days but so rewarding — we had the forest ridge entirely to ourselves. Not for beginners, but unforgettable.', author: 'Greg L.', date: 'September 2025' },
      { quote: 'The wildest, quietest way up. Our guides paced it perfectly and we all summited.', author: 'Thomas P.', date: 'July 2025' },
    ],
    reviewScore: '4.7', reviewCount: '18 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '7 DAYS', rating: '4.8', price: 'On request', name: 'Machame Route — 7 Days',  blurb: 'A gentler classic with great scenery.',      image: '/img/tours/machame.webp',          href: '/kilimanjaro/machame-7-day' },
      { days: '8 DAYS', rating: '4.9', price: 'On request', name: 'Lemosho Route — 8 Days',  blurb: 'More acclimatisation, highest success.',     image: '/img/tours/lemosho.webp',          href: '/kilimanjaro/lemosho-8-day' },
      { days: '10 DAYS',rating: '4.9', price: 'On request', name: 'Northern Circuit — 10 Days', blurb: 'The longest, most gradual ascent.',       image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/northern-circuit-10-day' },
    ],
  },

  /* ── Marangu 7-Day ─────────────────────────────────────────────────────── */
  {
    slug:     'marangu-7-day',
    name:     'Marangu Route — 7 Days',
    meta: {
      title:       'Marangu Route — 7 Days | Kilimanjaro | African Genuine Tours & Safaris',
      description: 'The classic hut route — the only climb where you sleep in mountain huts, with a gentle gradient and an added acclimatisation day for a stronger summit chance.',
    },
    heroImage:  '/img/tour/lodge-highlands.webp',
    heroTags:   ['★ THE CLASSIC HUT ROUTE · "COCA-COLA ROUTE"', '7 DAYS · HUTS'],
    tagline:    'Marangu Route — 7 Days',
    subhead:    'The classic hut route — the only climb where you sleep in mountain huts, with a gentle gradient and an added acclimatisation day for a stronger summit chance.',
    breadcrumb: [
      { label: 'Home',        href: '/' },
      { label: 'Kilimanjaro', href: '/kilimanjaro' },
    ],
    facts: [
      { label: 'Duration',  value: '7 days',      sub: 'incl. acclimatisation day' },
      { label: 'Grade',     value: 'Moderate',    sub: 'non-technical' },
      { label: 'Distance',  value: '≈ 72 km',     sub: 'up and down same trail' },
      { label: 'Sleeps',    value: 'Huts',         sub: 'shared dormitory' },
      { label: 'From',      value: 'On request',  sub: 'tailor-made quote' },
    ],
    overviewText: [
      'Marangu is the oldest and best-known route, and the only one where you sleep in mountain huts rather than tents. Its gradual gradient makes for comfortable walking, and the huts — with real beds, mattresses and dining halls — appeal to climbers who would rather not camp. We run the seven-day version, which adds an acclimatisation day at Horombo and meaningfully improves your summit chances over the standard five-day climb. Because you ascend and descend the same trail, it offers a little less scenic variety than the camping routes.',
    ],
    highlights: [
      { num: '01', title: 'Sleep in huts, not tents', desc: 'Beds, mattresses and dining halls at every overnight.' },
      { num: '02', title: 'The gentlest gradient',    desc: 'Comfortable, steady walking throughout.' },
      { num: '03', title: 'Acclimatisation day',      desc: 'An extra night at Horombo lifts your summit chances.' },
      { num: '04', title: 'Maundi Crater & Zebra Rocks', desc: 'Classic viewpoints on the acclimatisation walks.' },
    ],
    days: [
      { n: 1, title: 'Arrival in Moshi',                             place: 'Moshi',         travel: 'Airport transfer',                                          stay: 'Hotel, Moshi',   meals: 'B&B',   desc: 'Airport pick-up, hotel transfer, and an evening briefing and gear check.' },
      { n: 2, title: 'Marangu Gate to Mandara Hut',                  place: 'Rainforest',    travel: 'Trek 3–4 hrs · ≈7 km · 1,860 m → 2,700 m',                stay: 'Mandara Hut',    meals: 'B·L·D', desc: 'After registration at the Marangu Gate, a pleasant forest trail climbs steadily to Mandara Hut, with a picnic lunch on the way. In the afternoon, an optional short walk to Maundi Crater gives views toward Mawenzi and Kenya.' },
      { n: 3, title: 'Mandara Hut to Horombo Hut',                  place: 'Moorland',      travel: 'Trek 5–6 hrs · ≈11 km · 2,700 m → 3,720 m',               stay: 'Horombo Hut',    meals: 'B·L·D', desc: 'The forest opens into rolling moorland scattered with giant lobelia and groundsel, and the twin summits of Kibo and Mawenzi come into view. A picnic lunch breaks the climb; you reach Horombo in the afternoon.' },
      { n: 4, title: 'Acclimatisation day at Horombo',              place: 'Moorland',      travel: 'Short walk 2–4 hrs · to ~4,300 m and back',                stay: 'Horombo Hut',    meals: 'B·L·D', desc: 'An extra night at Horombo is the single best thing you can do for your summit chances. A gentle walk up toward the Zebra Rocks or Mawenzi and back lets your body adjust, then rest at the hut.' },
      { n: 5, title: 'Horombo Hut to Kibo Hut',                    place: 'Alpine desert', travel: 'Trek 6–8 hrs · ≈10 km · 3,720 m → 4,700 m',               stay: 'Kibo Hut',       meals: 'B·L·D', desc: 'Crossing the stark, wind-scoured Saddle between Mawenzi and Kibo, the vegetation disappears and the summit fills the sky. Reach Kibo Hut in the afternoon; an early dinner and early night before the midnight push.' },
      { n: 6, title: 'Summit day — Uhuru Peak, then Horombo Hut',  place: 'Summit 5,895 m', travel: 'Up 6–8 hrs · down 4–6 hrs · 4,700 m → 5,895 m → 3,720 m', stay: 'Horombo Hut',   meals: 'B·L·D', desc: 'Set out just after midnight, climb a long scree slope to Gilman\'s Point, then follow the gently rising rim for around two hours to Uhuru Peak near sunrise. After celebration at the Roof of Africa, descend to Kibo Hut for a break, then continue to Horombo.' },
      { n: 7, title: 'Horombo to Marangu Gate & Departure',        place: 'Rainforest',    travel: 'Trek 5–6 hrs · ≈18 km · 3,720 m → 1,860 m',               stay: '—',              meals: 'B·L',   desc: 'A long, easy descent through moorland and cloud forest to the Marangu Gate, where your summit certificate is presented. Transfer back to Moshi — or straight to the airport. We\'re happy to add a safari or Zanzibar extension.' },
    ],
    notes:         NOTES,
    routeLabel:    'Marangu Gate → Mandara → Horombo → Kibo Hut → Uhuru Peak → Marangu Gate',
    routeStops:    ['Marangu Gate', 'Mandara Hut', 'Horombo Hut', 'Kibo Hut', 'Uhuru Peak', 'Horombo Hut', 'Marangu Gate'],
    routeDistance: 'Hut accommodation',
    routeNote:     'Bring a sleeping bag; mattresses provided. Best months: Jan–Mar & Jun–Oct.',
    included: [
      'Airport transfers on arrival and departure',
      "Two nights' hotel in Moshi (B&B) before and after the climb",
      'All national park entry, hut and rescue fees',
      'Professional chief & assistant guides, cook and porters',
      'All meals on the mountain and treated drinking water',
      'Dormitory hut accommodation (mattresses provided — bring a sleeping bag)',
      'Emergency oxygen, first-aid kit and daily health checks',
      'Summit certificate',
    ],
    excluded:      EXCLUDED,
    lodges: [
      { nights: 'Night 1',   stars: 'Hut', name: 'Mandara Hut',     desc: 'A cosy A-frame hut cluster at 2,700 m in the rainforest zone, with dormitory beds, mattresses, and a communal dining room.',                                 image: '/img/tour/lodge-highlands.webp' },
      { nights: 'Nights 2–3', stars: 'Hut', name: 'Horombo Hut',   desc: 'The largest hut complex on the mountain at 3,720 m — dormitory sleeping, flush toilets, and a heated dining room. Two nights here provide crucial acclimatisation.', image: '/img/tour/lodge-highlands.webp' },
      { nights: 'Night 4',   stars: 'Hut', name: 'Kibo Hut',        desc: 'The summit base hut at 4,700 m — austere but functional, with dormitory bunks. A brief rest before the midnight start.',                                      image: '/img/tours/northern-circuit.webp' },
      { nights: 'Night 5',   stars: 'Hut', name: 'Horombo Hut (descent)', desc: 'Return to the comfortable Horombo Hut for a well-earned final night on the mountain before the morning descent.',                                    image: '/img/tour/lodge-highlands.webp' },
    ],
    departures: [
      { window: 'Jan — Mar 2026',       note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
      { window: 'Jun — Oct 2026',       note: 'Peak climbing season', avail: 'Enquire',   availColor: ac('Enquire'),   price: 'On request' },
      { window: 'Dec 2026 — Mar 2027',  note: 'Dry, clear season',    avail: 'Available', availColor: ac('Available'), price: 'On request' },
    ],
    galleryImages: GALLERY,
    reviews: [
      { quote: 'Sleeping in the huts made this so much more comfortable than I expected, and the acclimatisation day was worth every minute. Reached Uhuru with the whole family.', author: 'Chloe & Ben S.', date: 'August 2025' },
      { quote: 'Gentle, well-run and a proper summit. Ideal for us as first-timers who didn\'t want to camp.', author: 'Rahul K.', date: 'July 2025' },
    ],
    reviewScore: '4.7', reviewCount: '47 climbers',
    whyBook:    WHY_BOOK,
    related: [
      { days: '8 DAYS', rating: '4.7', price: 'On request', name: 'Rongai Route — 8 Days',  blurb: 'The quiet northern approach, also finishing down Marangu.', image: '/img/tours/northern-circuit.webp', href: '/kilimanjaro/rongai-8-day' },
      { days: '7 DAYS', rating: '4.8', price: 'On request', name: 'Machame Route — 7 Days', blurb: 'The classic camping route.',                                 image: '/img/tours/machame.webp',          href: '/kilimanjaro/machame-7-day' },
      { days: '8 DAYS', rating: '4.9', price: 'On request', name: 'Lemosho Route — 8 Days', blurb: 'Scenic and highest success.',                               image: '/img/tours/lemosho.webp',          href: '/kilimanjaro/lemosho-8-day' },
    ],
  },
];

export const climbsBySlug: Record<string, Tour> = Object.fromEntries(
  climbs.map((c) => [c.slug, c])
);
