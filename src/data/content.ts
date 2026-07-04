export type Tour = {
  id: string;
  category: 'Migration Safari' | 'Kilimanjaro' | 'Honeymoon' | 'Beach';
  filterTag: 'Safari' | 'Kilimanjaro' | 'Honeymoon' | 'Beach';
  name: string;
  days: string;
  blurb: string;
  highlights: string[];
  rating: string;
  price: string;
  image: string;
  href: string;
};

export const tours: Tour[] = [
  {
    id: 'northern-circuit',
    category: 'Migration Safari',
    filterTag: 'Safari',
    name: 'Northern Circuit in Full',
    days: '8 DAYS',
    blurb: 'The complete northern loop — Tarangire elephants, Ngorongoro lions, and the Serengeti migration, all at a comfortable pace.',
    highlights: ['4 nights Serengeti', 'Ngorongoro Crater full day', 'Big Five opportunities'],
    rating: '5.0',
    price: 'From $4,950',
    image: '/img/tours/northern-circuit.webp',
    href: '/itineraries/17-explorer-safari',
  },
  {
    id: 'lemosho-8',
    category: 'Kilimanjaro',
    filterTag: 'Kilimanjaro',
    name: 'Lemosho 8-Day Summit',
    days: '8 DAYS',
    blurb: 'Our highest-success Kilimanjaro route — a long, quiet approach from the remote western face gives your body the best chance to acclimatise.',
    highlights: ['95% summit success rate', 'Least crowded route', 'All equipment provided'],
    rating: '4.9',
    price: 'From $3,200',
    image: '/img/tours/lemosho.webp',
    href: '/kilimanjaro/lemosho-8-day',
  },
  {
    id: 'serengeti-zanzibar',
    category: 'Honeymoon',
    filterTag: 'Honeymoon',
    name: 'Serengeti & Zanzibar',
    days: '11 DAYS',
    blurb: 'Open plains by day, Indian Ocean by night. Sunrise balloon over the Serengeti, then white-sand beaches and ocean sunsets on Zanzibar.',
    highlights: ['Hot-air balloon sunrise', 'Private bush dinners', 'Zanzibar beach extension'],
    rating: '5.0',
    price: 'From $6,800',
    image: '/img/tours/serengeti-zanzibar.webp',
    href: '/itineraries/11-honeymoon-safari',
  },
  {
    id: 'migration-crater',
    category: 'Migration Safari',
    filterTag: 'Safari',
    name: 'Migration & Crater Classic',
    days: '6 DAYS',
    blurb: 'Tanzania\'s two most iconic sights in one seamless loop — the vast Serengeti plains and the world\'s largest intact volcanic caldera.',
    highlights: ['Ngorongoro Crater descent', 'Serengeti open plains', 'Seasonal migration'],
    rating: '4.9',
    price: 'From $3,750',
    image: '/img/tours/migration-crater.webp',
    href: '/itineraries/15-crater-world',
  },
  {
    id: 'zanzibar-spice',
    category: 'Beach',
    filterTag: 'Beach',
    name: 'Zanzibar Spice & Sea',
    days: '5 DAYS',
    blurb: 'Wander the spice-scented lanes of Stone Town, tour clove and vanilla farms, then unwind on some of the Indian Ocean\'s most perfect beaches.',
    highlights: ['UNESCO Stone Town', 'Spice farm tour', 'Pristine beach resorts'],
    rating: '4.8',
    price: 'From $1,900',
    image: '/img/tours/zanzibar.webp',
    href: '/#enquiry',
  },
  {
    id: 'machame-express',
    category: 'Kilimanjaro',
    filterTag: 'Kilimanjaro',
    name: 'Machame Summit Express',
    days: '7 DAYS',
    blurb: 'The Whiskey Route — Tanzania\'s most dramatic Kilimanjaro path, with the famous Barranco Wall, sweeping ridgelines, and a 92% summit success rate.',
    highlights: ['92% summit success', 'Barranco Wall traverse', 'Uhuru Peak at 5,895m'],
    rating: '4.8',
    price: 'From $2,950',
    image: '/img/tours/machame.webp',
    href: '/kilimanjaro/machame-7-day',
  },
];

export const tourFilters = ['All', 'Safari', 'Kilimanjaro', 'Honeymoon', 'Beach'] as const;

export type Destination = { name: string; count: string; image: string };
export const destinations: Destination[] = [
  { name: 'Serengeti',    count: '24 ITINERARIES', image: '/img/dest/serengeti.webp' },
  { name: 'Ngorongoro',   count: '18 ITINERARIES', image: '/img/dest/ngorongoro.webp' },
  { name: 'Tarangire',    count: '12 ITINERARIES', image: '/img/dest/tarangire.webp' },
  { name: 'Lake Manyara', count: '9 ITINERARIES',  image: '/img/dest/manyara.webp' },
  { name: 'Nyerere',      count: '7 ITINERARIES',  image: '/img/dest/nyerere.webp' },
  { name: 'Zanzibar',     count: '15 ITINERARIES', image: '/img/dest/zanzibar.webp' },
];

export type Route = {
  key: string; slug: string; name: string; tag: string; days: string; distance: string;
  difficulty: 'Moderate' | 'Challenging'; difficultyPct: number; success: string; description: string;
};
export const routes: Route[] = [
  { key: 'machame', slug: 'machame-7-day',          name: 'Machame', tag: 'The Whiskey Route',    days: '7 days', distance: '62 km', difficulty: 'Challenging', difficultyPct: 90, success: '92%', description: 'The most popular route — dramatic scenery, the famous Barranco Wall and a strong success rate thanks to its natural "climb high, sleep low" profile.' },
  { key: 'lemosho', slug: 'lemosho-8-day',           name: 'Lemosho', tag: 'The Scenic Route',     days: '8 days', distance: '70 km', difficulty: 'Moderate',    difficultyPct: 62, success: '95%', description: 'Our highest summit success. A longer, quieter approach from the remote west gives your body the best possible time to acclimatise.' },
  { key: 'marangu', slug: 'marangu-7-day',           name: 'Marangu', tag: 'The Coca-Cola Route',  days: '7 days', distance: '72 km', difficulty: 'Moderate',    difficultyPct: 62, success: '80%', description: 'The only route with dormitory huts rather than tents. A gentle gradient, but the shorter profile lowers summit odds for most climbers.' },
  { key: 'rongai',  slug: 'rongai-8-day',            name: 'Rongai',  tag: 'The Wilderness Route', days: '8 days', distance: '73 km', difficulty: 'Moderate',    difficultyPct: 62, success: '88%', description: 'The peaceful approach from the Kenyan side — drier, remote and our top pick for the rainy season or travellers seeking solitude.' },
];

export type Review = { quote: string; author: string; trip: string; avatar: string };
export const reviews: Review[] = [
  { quote: 'From the first email to the summit, every detail was handled with grace. We never once felt like a number — we felt like family.', author: 'Priya & Arjun M.', trip: 'Lemosho + Serengeti Honeymoon', avatar: '/img/avatars/priya.jpg' },
  { quote: 'We watched a river crossing on day three that left us speechless. Our guide knew exactly where to be and when.', author: 'The Okonkwo Family', trip: 'Northern Circuit Safari', avatar: '/img/avatars/okonkwo.jpg' },
  { quote: 'Reached Uhuru Peak at sunrise after the hardest night of my life. The African Genuine crew carried us, literally and emotionally.', author: 'Daniel R.', trip: 'Machame Route, 7 days', avatar: '/img/avatars/daniel.jpg' },
];

export type Post = { tag: string; title: string; excerpt: string; image: string };
export const posts: Post[] = [
  { tag: 'WHEN TO GO',  title: 'Chasing the Great Migration, month by month', excerpt: 'Where the herds are from January to December — and how to time the river crossings.', image: '/img/journal/migration.webp' },
  { tag: 'KILIMANJARO', title: 'How to actually prepare for summit night', excerpt: 'The training, kit and mindset that separates the summit from the turnaround.', image: '/img/journal/summit.webp' },
  { tag: 'HONEYMOON',   title: 'Bush-and-beach: building the perfect two-week escape', excerpt: 'Pairing the Serengeti with Zanzibar without spending your trip in transit.', image: '/img/journal/bush-beach.webp' },
];

export const searchExperiences = [
  { key: 'safari', label: 'Safari',      field: 'Serengeti & Ngorongoro' },
  { key: 'kili',   label: 'Kilimanjaro', field: 'Lemosho Route' },
  { key: 'honey',  label: 'Honeymoon',   field: 'Bush & Beach' },
] as const;

export const stats = [
  { value: '15',    label: 'Years on the ground' },
  { value: '4,200', label: 'Summits supported' },
  { value: '95%',   label: 'Kilimanjaro success' },
  { value: '5.0★',  label: '1,800+ reviews' },
];
