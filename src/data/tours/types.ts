export interface TourFact {
  label: string;
  value: string;
  sub?: string;
}

export interface TourHighlight {
  num: string;
  title: string;
  desc: string;
}

export interface TourDay {
  n: number | string;
  title: string;
  place?: string;
  travel?: string;
  stay?: string;
  meals?: string;
  desc: string;
}

export interface TourLodge {
  nights: string;
  stars?: string;
  name: string;
  desc: string;
  image: string;
}

export interface TourDeparture {
  window: string;
  note?: string;
  avail: string;
  availColor: string;
  price: string;
}

export interface TourReview {
  quote: string;
  author: string;
  date?: string;
}

export interface RelatedTour {
  days: string;
  rating: string;
  price?: string;
  name: string;
  blurb: string;
  image: string;
  href: string;
}

export interface StartingLocation {
  title: string;
  description: string;
}

export interface ParkWildlife {
  name: string;
  description: string[];
  highlights: string[];
}

export interface BestTime {
  period: string;
  subtitle?: string;
  description: string[];
  highlights: string[];
}

export interface GalleryTile {
  src: string;
  alt: string;
  large?: boolean;
  overlay?: string;
}

export interface Tour {
  // ── Identity ──────────────────────────────────────────────
  slug: string;
  name: string;
  meta: { title: string; description: string };

  // ── Hero ──────────────────────────────────────────────────
  heroImage: string;
  heroTags?: string[];
  tagline?: string;
  subhead?: string;

  // ── Breadcrumb ────────────────────────────────────────────
  breadcrumb?: Array<{ label: string; href: string }>;

  // ── Quick facts ───────────────────────────────────────────
  facts?: TourFact[];

  // ── Overview tab ──────────────────────────────────────────
  overviewText?: string[];
  highlights?: TourHighlight[];
  startingLocations?: StartingLocation[];
  parksAndWildlife?: ParkWildlife[];
  bestTime?: BestTime[];
  whyBook?: string[];

  // ── Itinerary tab ─────────────────────────────────────────
  days: TourDay[];
  notes?: string[];

  // ── Route sidebar (inside itinerary tab) ──────────────────
  routeLabel?: string;
  routeStops?: string[];
  routeDistance?: string;
  routeNote?: string;

  // ── Inclusions tab ────────────────────────────────────────
  included?: string[];
  excluded?: string[];

  // ── Accommodation tab ─────────────────────────────────────
  lodges?: TourLodge[];

  // ── Pricing table (below tabs) ────────────────────────────
  departures?: TourDeparture[];

  // ── Gallery ───────────────────────────────────────────────
  galleryImages?: GalleryTile[];

  // ── Reviews ───────────────────────────────────────────────
  reviews?: TourReview[];
  reviewScore?: string;
  reviewCount?: string;

  // ── Related tours ─────────────────────────────────────────
  related?: RelatedTour[];

  // ── Base path for prev/next links and related section ────
  basePath?: string;   // default '/itineraries'; '/kilimanjaro' for climb pages

  // ── Prev / Next nav ───────────────────────────────────────
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };

  // ── Field tracking (for operator reference) ──────────────
  draftFields?: string[];
}
