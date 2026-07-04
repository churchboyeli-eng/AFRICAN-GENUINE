export type DayEntry = {
  day: number | string;
  title: string;
  description: string;
};

export type Itinerary = {
  id: number;
  slug: string;
  title: string;
  days: number;
  parks: string[];
  best_for: string;
  day_by_day: DayEntry[];
  overview?: string[];
  starting_locations?: { title: string; description: string }[];
  parks_and_wildlife?: { name: string; description: string[]; highlights: string[] }[];
  best_time?: { period: string; subtitle?: string; description: string[]; highlights: string[] }[];
  why_book?: string[];
};

export const itineraryNotes = [
  'All itineraries are original African Genuine Tours & Safaris programs.',
  'Any itinerary can be extended with a 2-night Zanzibar add-on after the final day.',
  'Day counts and park order can be adjusted to fit group size or budget.',
];

export const itineraries: Itinerary[] = [
  {
    id: 6,
    slug: '6-calving-season-ndutu',
    title: 'Calving Season in Ndutu',
    days: 6,
    parks: ['Tarangire', 'Ngorongoro', 'Ndutu'],
    best_for: 'January–March, newborn wildebeest and big cat action',
    day_by_day: [
      { day: 1, title: 'Tarangire', description: 'Arusha to Tarangire, afternoon game drive.' },
      { day: 2, title: 'Ngorongoro Highlands', description: 'Tarangire to Ngorongoro Highlands.' },
      {
        day: 3,
        title: 'Crater to Ndutu',
        description:
          'Crater game drive, then continue to the Ndutu plains (southern Serengeti ecosystem) for the calving herds.',
      },
      {
        day: 4,
        title: 'Ndutu plains',
        description:
          'Full day in Ndutu — predator-rich plains during calving season, with cheetah and lion regularly seen hunting near the herds.',
      },
      {
        day: 5,
        title: 'Lake Masek area',
        description: 'Second day in Ndutu, exploring Lake Masek and surrounding woodlands.',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Morning drive, return to Arusha for departure.',
      },
    ],
  },
  {
    id: 7,
    slug: '7-lake-natron-ngorongoro-adventure',
    title: 'Lake Natron & Ngorongoro Adventure',
    days: 6,
    parks: ['Lake Natron', 'Ngorongoro', 'Serengeti'],
    best_for: 'Travelers seeking landscapes and culture over pure game viewing',
    day_by_day: [
      {
        day: 1,
        title: 'Lake Natron',
        description:
          'Arusha to Lake Natron via the Maasai plains, late afternoon at the lake\'s edge.',
      },
      {
        day: 2,
        title: 'Natron full day',
        description:
          'Full day at Lake Natron — flamingo colonies, the red-tinted soda lake, and a visit to a waterfall in the escarpment.',
      },
      {
        day: 3,
        title: 'Ol Doinyo Lengai / culture',
        description:
          'Optional pre-dawn hike up Ol Doinyo Lengai (active volcano) for fit travelers, otherwise a relaxed cultural morning with a Maasai community, then transfer to Ngorongoro.',
      },
      {
        day: 4,
        title: 'Ngorongoro Crater',
        description: 'Sunrise crater descent and game drive.',
      },
      {
        day: 5,
        title: 'Serengeti',
        description: 'Continue into the Serengeti for an afternoon game drive.',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Final Serengeti game drive, return to Arusha.',
      },
    ],
  },
  {
    id: 8,
    slug: '8-comfort-safari-balloon-ride',
    title: 'Comfort Safari with Balloon Ride',
    days: 7,
    parks: ['Arusha NP', 'Lake Manyara', 'Tarangire', 'Ngorongoro', 'Serengeti'],
    best_for: 'Couples and small groups wanting a signature splurge moment',
    day_by_day: [
      {
        day: 1,
        title: 'Arusha National Park',
        description:
          'Arusha National Park half-day walking and canoeing safari, overnight nearby.',
      },
      {
        day: 2,
        title: 'Lake Manyara',
        description: 'Transfer to Lake Manyara for an afternoon game drive.',
      },
      {
        day: 3,
        title: 'Tarangire',
        description: 'Continue to Tarangire for a full day among the elephant herds.',
      },
      {
        day: 4,
        title: 'Ngorongoro',
        description: 'Drive to Ngorongoro, afternoon at leisure on the crater rim.',
      },
      {
        day: 5,
        title: 'Crater to Serengeti',
        description: 'Sunrise crater game drive, then continue into the Serengeti.',
      },
      {
        day: 6,
        title: 'Balloon Safari',
        description:
          'Sunrise hot-air balloon ride over the Serengeti plains followed by a bush breakfast, then an afternoon game drive.',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Final morning drive, fly or drive back to Arusha.',
      },
    ],
  },
  {
    id: 9,
    slug: '9-big-cats-special',
    title: 'Big Cats Special',
    days: 6,
    parks: ['Tarangire', 'Ngorongoro', 'Ndutu/Serengeti'],
    best_for: 'Photographers and big-cat enthusiasts (best Dec–March)',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description: 'Arusha to Tarangire, afternoon drive focused on lion prides near the river.',
      },
      {
        day: 2,
        title: 'Ngorongoro Highlands',
        description: 'Transfer to Ngorongoro, afternoon at the lodge.',
      },
      {
        day: 3,
        title: 'Crater day',
        description:
          'Full crater day — Ngorongoro holds one of Africa\'s densest lion populations.',
      },
      {
        day: 4,
        title: 'Ndutu',
        description:
          'Continue to Ndutu, prime cheetah and leopard territory, afternoon drive.',
      },
      {
        day: 5,
        title: 'Ndutu/Serengeti full day',
        description:
          'Full day in Ndutu/southern Serengeti tracking cats with the herds.',
      },
      { day: 6, title: 'Departure', description: 'Morning drive, return to Arusha.' },
    ],
  },
  {
    id: 10,
    slug: '10-wild-trails-of-tarangire',
    title: 'Wild Trails of Tarangire',
    days: 5,
    parks: ['Tarangire', 'Ngorongoro'],
    best_for: 'Active travelers wanting something beyond the vehicle',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description: 'Arusha to Tarangire, afternoon game drive.',
      },
      {
        day: 2,
        title: 'Bush Walk',
        description:
          'Guided morning bush walk with an armed ranger, learning tracks and bush survival skills; afternoon game drive.',
      },
      {
        day: 3,
        title: 'Swamps & Night Drive',
        description:
          'Daytime exploration of Tarangire\'s swamps and river system, evening night game drive (where permitted) to spot nocturnal species.',
      },
      {
        day: 4,
        title: 'Ngorongoro',
        description: 'Transfer to Ngorongoro, afternoon at leisure.',
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Sunrise crater game drive, return to Arusha.',
      },
    ],
  },
  {
    id: 11,
    slug: '11-honeymoon-safari',
    title: 'Honeymoon Safari',
    days: 8,
    parks: ['Arusha', 'Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti'],
    best_for: 'Newlyweds and anniversary trips',
    day_by_day: [
      {
        day: 1,
        title: 'Arrival',
        description: 'Arrival, transfer to a boutique lodge near Arusha, welcome dinner.',
      },
      {
        day: 2,
        title: 'Tarangire',
        description: 'Transfer to Tarangire, afternoon game drive.',
      },
      {
        day: 3,
        title: 'Manyara to Ngorongoro',
        description:
          'Continue to Lake Manyara for a morning drive, then onward to Ngorongoro.',
      },
      {
        day: 4,
        title: 'Crater & Sundowner',
        description:
          'Sunrise crater game drive, romantic sundowner on the crater rim in the evening.',
      },
      {
        day: 5,
        title: 'Serengeti',
        description: 'Transfer to the Serengeti, afternoon game drive.',
      },
      {
        day: 6,
        title: 'Serengeti & Bush Lunch',
        description: 'Full day Serengeti game drive, private bush lunch setup.',
      },
      {
        day: 7,
        title: 'Balloon Ride',
        description:
          'Hot-air balloon ride at sunrise followed by champagne breakfast, relaxed afternoon at the camp.',
      },
      {
        day: 8,
        title: 'Departure',
        description:
          'Final morning drive, transfer to Arusha for departure (or connect onward to Zanzibar).',
      },
    ],
  },
  {
    id: 12,
    slug: '12-family-safari-with-kids',
    title: 'Family Safari with Kids',
    days: 5,
    parks: ['Tarangire', 'Lake Manyara', 'Ngorongoro'],
    best_for: 'Families with children, shorter game drives, kid-friendly pacing',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description: 'Arusha to Tarangire, gentle afternoon drive with frequent stops.',
      },
      {
        day: 2,
        title: 'Tarangire full day',
        description:
          'Full day in Tarangire — elephant families, baobabs, and a junior-ranger style activity at the lodge.',
      },
      {
        day: 3,
        title: 'Lake Manyara',
        description:
          'Transfer to Lake Manyara, afternoon drive looking for tree-climbing lions.',
      },
      {
        day: 4,
        title: 'Ngorongoro',
        description:
          'Continue to Ngorongoro, family-friendly lodge with viewing decks over the crater.',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Sunrise crater game drive (shorter format for younger children), return to Arusha.',
      },
    ],
  },
  {
    id: 13,
    slug: '13-rhino-conservation-safari',
    title: 'Rhino & Conservation Safari',
    days: 5,
    parks: ['Mkomazi', 'Ngorongoro'],
    best_for: 'Conservation-minded travelers, rhino sightings',
    day_by_day: [
      {
        day: 1,
        title: 'Mkomazi',
        description:
          'Arusha to Mkomazi National Park, home to Tanzania\'s black rhino sanctuary.',
      },
      {
        day: 2,
        title: 'Rhino Tracking',
        description:
          'Full day in Mkomazi — guided rhino tracking with park rangers, plus general game viewing.',
      },
      {
        day: 3,
        title: 'Ngorongoro Highlands',
        description:
          'Transfer back toward Arusha, continue on to Ngorongoro Highlands.',
      },
      {
        day: 4,
        title: 'Crater day',
        description:
          'Sunrise crater game drive — a second chance at rhino in a different ecosystem.',
      },
      { day: 5, title: 'Departure', description: 'Morning at leisure, return to Arusha.' },
    ],
  },
  {
    id: 14,
    slug: '14-budget-migration-safari',
    title: 'Budget-Friendly Migration Safari',
    days: 7,
    parks: ['Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti'],
    best_for: 'Cost-conscious groups, mobile tented camps',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description:
          'Arusha to Tarangire, set up at a public campsite, afternoon drive.',
      },
      {
        day: 2,
        title: 'Lake Manyara',
        description:
          'Tarangire to Lake Manyara, afternoon drive, camp overnight.',
      },
      {
        day: 3,
        title: 'Ngorongoro Rim Camp',
        description:
          'Manyara to Ngorongoro, camp on the crater rim (cold nights — warm sleeping bags provided).',
      },
      {
        day: 4,
        title: 'Crater to Serengeti',
        description:
          'Sunrise crater drive, then continue to the Serengeti, camp set up near Seronera.',
      },
      {
        day: 5,
        title: 'Serengeti',
        description:
          'Full day Serengeti game drive following the migration\'s seasonal position.',
      },
      {
        day: 6,
        title: 'Serengeti second day',
        description: 'Second Serengeti day, exploring a different sector.',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Final morning drive, break camp, return to Arusha.',
      },
    ],
  },
  {
    id: 15,
    slug: '15-crater-world',
    title: 'Crater World',
    days: 5,
    parks: ['Ngorongoro', 'Empakaai'],
    best_for: 'Highland scenery lovers, lighter wildlife focus',
    day_by_day: [
      {
        day: 1,
        title: 'Ngorongoro Highlands',
        description: 'Arusha to the Ngorongoro Highlands.',
      },
      {
        day: 2,
        title: 'Empakaai Crater',
        description:
          'Hike to the rim of Empakaai Crater, a smaller, less-visited caldera with a soda lake and flamingo colony, accompanied by an armed ranger.',
      },
      {
        day: 3,
        title: 'Crater Floor',
        description: 'Full game drive on the Ngorongoro Crater floor.',
      },
      {
        day: 4,
        title: 'Cultural Visit',
        description:
          'Cultural morning visiting a Maasai or Iraqw community in the highlands, afternoon at leisure.',
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Final crater viewpoint stop, return to Arusha.',
      },
    ],
  },
  {
    id: 16,
    slug: '16-predators-season',
    title: "Predator's Season",
    days: 6,
    parks: ['Tarangire', 'Ngorongoro', 'Ndutu'],
    best_for: 'January–March predator-and-prey drama',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description: 'Arusha to Tarangire, afternoon drive.',
      },
      {
        day: 2,
        title: 'Tarangire full day',
        description: 'Full day Tarangire, focus on resident lion and leopard sightings.',
      },
      {
        day: 3,
        title: 'Ngorongoro',
        description: 'Transfer to Ngorongoro, afternoon at the lodge.',
      },
      {
        day: 4,
        title: 'Crater to Ndutu',
        description: 'Sunrise crater drive, continue to Ndutu in the afternoon.',
      },
      {
        day: 5,
        title: 'Ndutu full day',
        description:
          'Full day in Ndutu tracking predators following the calving herds.',
      },
      { day: 6, title: 'Departure', description: 'Morning drive, return to Arusha.' },
    ],
  },
  {
    id: 17,
    slug: '17-explorer-safari',
    title: 'Explorer Safari',
    days: 8,
    parks: ['Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti'],
    best_for: 'Travelers who want a complete, unhurried circuit',
    day_by_day: [
      {
        day: 1,
        title: 'Tarangire',
        description: 'Arusha to Tarangire, afternoon drive.',
      },
      { day: 2, title: 'Tarangire full day', description: 'Full day Tarangire.' },
      {
        day: 3,
        title: 'Lake Manyara',
        description: 'Transfer to Lake Manyara, afternoon drive.',
      },
      {
        day: 4,
        title: 'Ngorongoro Highlands',
        description: 'Transfer to Ngorongoro Highlands, afternoon at leisure.',
      },
      {
        day: 5,
        title: 'Crater to Serengeti',
        description: 'Sunrise crater drive, continue to Serengeti.',
      },
      {
        day: 6,
        title: 'Serengeti central',
        description: 'Full day Serengeti, central sector.',
      },
      {
        day: 7,
        title: 'Serengeti second sector',
        description:
          'Second Serengeti day, different sector based on wildlife movement.',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Final morning drive, return to Arusha.',
      },
    ],
  },
  {
    id: 18,
    slug: '18-ultimate-tanzania-safari',
    title: 'Ultimate Tanzania Safari',
    days: 9,
    parks: ['Lake Natron', 'Ngorongoro', 'Ndutu', 'Serengeti'],
    best_for: 'Travelers who want landscapes, calving season, and the full migration story',
    day_by_day: [
      {
        day: 1,
        title: 'Lake Natron',
        description: 'Arusha to Lake Natron, late-afternoon flamingo viewing.',
      },
      {
        day: 2,
        title: 'Natron full day',
        description:
          'Full day at Natron — waterfall hike, cultural visit, optional Ol Doinyo Lengai climb.',
      },
      {
        day: 3,
        title: 'Ngorongoro Highlands',
        description: 'Transfer to Ngorongoro Highlands.',
      },
      {
        day: 4,
        title: 'Crater to Ndutu',
        description: 'Sunrise crater drive, continue to Ndutu.',
      },
      {
        day: 5,
        title: 'Ndutu full day',
        description: 'Full day Ndutu, calving season big-cat action.',
      },
      {
        day: 6,
        title: 'Central Serengeti',
        description: 'Continue into central Serengeti, afternoon drive.',
      },
      {
        day: 7,
        title: 'Seronera',
        description: 'Full day Serengeti, Seronera River valley.',
      },
      {
        day: 8,
        title: 'Serengeti second sector',
        description:
          'Second Serengeti day, northern or western sector depending on migration position.',
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Final morning drive, return to Arusha.',
      },
    ],
  },
  {
    id: 19,
    slug: '19-northern-icons-to-southern-wilderness',
    title: 'Northern Icons to Southern Wilderness',
    days: 14,
    parks: ['Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti', 'Ruaha', 'Nyerere (Selous)'],
    best_for: 'Long-haul travelers wanting both the Northern Circuit and the quieter south',
    day_by_day: [
      {
        day: '1–7',
        title: 'Extended Northern Circuit',
        description:
          'Follow the Classic Northern Circuit extended route — Tarangire, Lake Manyara, Ngorongoro, and four nights split across central and northern Serengeti to capture different migration phases.',
      },
      {
        day: 8,
        title: 'Fly to Ruaha',
        description:
          'Fly south from Arusha or the Serengeti to Ruaha National Park, Tanzania\'s largest park and far less visited.',
      },
      {
        day: '9–11',
        title: 'Ruaha',
        description:
          'Three full days exploring Ruaha\'s baobab-studded landscape and the Great Ruaha River, known for large lion prides and elephant herds.',
      },
      {
        day: 12,
        title: 'Fly to Nyerere',
        description:
          'Fly to Selous (Nyerere National Park) for a change of scenery — boat safaris along the Rufiji River alongside traditional game drives.',
      },
      {
        day: 13,
        title: 'Nyerere full day',
        description:
          'Full day in Nyerere, combining a boat safari with a walking safari.',
      },
      {
        day: 14,
        title: 'Departure',
        description:
          'Final morning activity, fly back to Dar es Salaam or Arusha for departure.',
      },
    ],
  },
  {
    id: 20,
    slug: '20-active-explorer',
    title: 'Active Explorer',
    days: 9,
    parks: ['Arusha NP', 'Tarangire', 'Lake Manyara', 'Ngorongoro', 'Serengeti'],
    best_for: 'Travelers who want adventure activities layered into the safari',
    day_by_day: [
      {
        day: 1,
        title: 'Arusha NP Canoeing',
        description:
          'Arusha National Park canoe safari on the Momella Lakes, gentle introduction to the trip.',
      },
      {
        day: 2,
        title: 'Tarangire',
        description: 'Transfer to Tarangire, afternoon game drive.',
      },
      {
        day: 3,
        title: 'Tarangire Bush Walk',
        description: 'Full day Tarangire, including a guided bush walk.',
      },
      {
        day: 4,
        title: 'Lake Manyara',
        description:
          'Transfer to Lake Manyara, afternoon canoe or game drive (water-level dependent).',
      },
      {
        day: 5,
        title: 'Ngorongoro Rim Trek',
        description:
          'Transfer to Ngorongoro Highlands, afternoon trek along the crater rim trail.',
      },
      {
        day: 6,
        title: 'Crater to Serengeti',
        description: 'Sunrise crater game drive, continue to Serengeti.',
      },
      { day: 7, title: 'Serengeti', description: 'Full day Serengeti game drive.' },
      {
        day: 8,
        title: 'Serengeti Walking Safari',
        description:
          'Second Serengeti day, optional walking safari with a ranger near the camp.',
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Final morning drive, return to Arusha.',
      },
    ],
  },
  {
    id: 21,
    slug: '21-4-days-tanzania-safari',
    title: '4 Days Tanzania Safari',
    days: 4,
    parks: ['Tarangire', 'Serengeti', 'Ngorongoro'],
    best_for: 'Couples, families, honeymooners, solo travellers, photographers, and first-time safari guests',
    overview: [
      'Embark on an unforgettable 4-day Tanzania safari that takes you through three of the country’s most iconic and wildlife-rich destinations: Tarangire National Park, Serengeti National Park, and the spectacular Ngorongoro Crater.',
      'This expertly designed itinerary delivers the very best of Tanzania’s northern safari circuit in a short timeframe, making it ideal for travellers who want maximum wildlife exposure without compromising on comfort, flexibility, or quality.',
      'This 4-day Tanzania safari fits all travellers and travel styles, including couples, families, honeymooners, solo travellers, photographers, and first-time safari guests. Whether you prefer a budget safari, a comfortable mid-range experience, or a luxury Tanzania safari, the itinerary is fully customizable to match your expectations, pace, and accommodation preferences.',
      'Your journey begins in Tarangire National Park, a landscape characterised by ancient baobab trees and vast elephant herds. The Tarangire River attracts a wide variety of wildlife, offering excellent game-viewing opportunities, particularly during the dry season. From here, the safari continues to the legendary Serengeti, where endless plains support one of Africa’s richest predator populations. The Serengeti is world-famous for year-round wildlife viewing and the Great Migration, during which millions of wildebeest and zebras traverse the ecosystem, followed closely by lions, cheetahs, and hyenas.',
      'The adventure concludes in the Ngorongoro Crater, a UNESCO World Heritage Site and one of the most unique natural wildlife sanctuaries on Earth. This collapsed volcanic caldera supports an exceptionally high concentration of animals, including the Big Five, and is one of the best places in Tanzania to encounter the endangered black rhino in its natural habitat.',
      'This safari can start from Arusha, Zanzibar, or Dar es Salaam, with all logistics professionally arranged. Guests starting from Zanzibar or Dar es Salaam benefit from scheduled or chartered domestic flights, allowing seamless connections to the safari circuit without long road transfers. Private transfers, park fees, accommodation, and game drives are all handled by Travel Wise Safari from start to finish.',
      'From thrilling game drives and breathtaking landscapes to personalised service and expert guiding, this 4-day Tanzania safari offers a complete and flexible introduction to Tanzania’s world-class wilderness, ideally suited for travellers seeking an authentic African safari experience in a limited time.'
    ],
    day_by_day: [
      {
        day: 1,
        title: 'Arusha to Tarangire National Park',
        description: 'Begin your Tanzania safari with a scenic morning drive from Arusha to Tarangire National Park. Known for its giant baobab trees and vast herds of elephants, Tarangire offers a spectacular introduction to Tanzania’s wildlife. During your game drive, expect to encounter lions, zebras, wildebeests, giraffes, and more in their natural habitat. After an exciting day in the wild, unwind and spend the night at Heart and Soul Lodge, nestled in a peaceful setting close to the park.'
      },
      {
        day: 2,
        title: 'Tarangire to Serengeti National Park',
        description: 'After breakfast, set off on a scenic drive toward the legendary Serengeti National Park. Your journey takes you through the beautiful highlands and the Great Rift Valley landscapes. Upon entering the Serengeti, enjoy an afternoon game drive across its endless plains, teeming with wildlife and famous for hosting the Great Migration. Spend the evening at your chosen lodge or camp, soaking in the sights and sounds of the African bush.'
      },
      {
        day: 3,
        title: 'Serengeti to Ngorongoro Conservation Area',
        description: 'Rise early for a sunrise game drive in the Serengeti, one of the best times to witness predators on the move and animals at their most active. After breakfast, continue your adventure with an en route game drive as you head toward the Ngorongoro Conservation Area. Arrive in the evening at the crater rim, where you’ll check into your lodge with stunning panoramic views of the caldera below.'
      },
      {
        day: 4,
        title: 'Ngorongoro Crater to Arusha',
        description: 'Today begins with a descent into the Ngorongoro Crater, often referred to as the "Eighth Wonder of the World." This UNESCO World Heritage Site is home to an incredible diversity of wildlife, including the rare black rhino, lions, hippos, flamingos, elephants, and many more. Enjoy a half-day game drive followed by a picnic lunch beside the hippo pool. In the afternoon, drive back to Arusha, where your unforgettable safari adventure with Travel Wise Safari comes to an end.'
      }
    ],
    starting_locations: [
      { title: 'Arusha / Kilimanjaro International Airport (JRO)', description: 'Our 4-Day Tanzania Safari is designed with flexible starting points to accommodate travellers arriving from different parts of Tanzania or combining safari with a beach holiday. Regardless of where your journey begins, Travel Wise Safari coordinates all logistics to ensure a smooth, stress-free experience.' },
      { title: 'Safari from Zanzibar (Flights Arranged)', description: 'For travelers staying on the island, we arrange domestic flights from Zanzibar to Arusha or directly to the safari circuit. This option is perfect for combining a Zanzibar beach holiday with a mainland safari without long road transfers.' },
      { title: 'Moshi Hotels', description: 'Guests staying in Moshi, often before or after Mount Kilimanjaro trekking, can begin the safari with hotel pickup and a direct drive to the first national park. This route is efficient and popular with adventure travelers.' },
      { title: 'Arusha City Hotels', description: 'If you are already based in Arusha, we provide convenient hotel pickup and immediate departure into the safari circuit, saving time and maximising wildlife viewing.' }
    ],
    parks_and_wildlife: [
      { name: 'Serengeti National Park', description: ['The Serengeti is Tanzania’s most famous wildlife destination and one of Africa’s premier safari parks.'], highlights: ['World-renowned home of the Great Migration', 'High densities of lions, cheetahs, leopards, elephants, and buffalo', 'Vast open savannahs are ideal for photography and extended game drives', 'Year-round wildlife viewing with seasonal highlights'] },
      { name: 'Ngorongoro Crater', description: ['A UNESCO World Heritage Site, the Ngorongoro Crater offers one of the most concentrated wildlife experiences in Africa.'], highlights: ['Excellent Big Five viewing in a compact area', 'One of the best places in Tanzania to spot the endangered black rhino', 'Permanent water sources attract wildlife throughout the year', 'Dramatic crater landscapes and panoramic viewpoints'] },
      { name: 'Tarangire National Park', description: ['Tarangire is known for its unique scenery and large elephant populations.'], highlights: ['Massive elephant herds, especially during the dry season', 'Iconic baobab trees and riverine landscapes', 'Exceptional birdlife with over 500 recorded species', 'Less crowded, offering a more relaxed safari atmosphere'] }
    ],
    best_time: [
      { period: 'June – October (Dry Season)', description: ['This is considered the best overall period for a Tanzania safari. Vegetation is sparse, animals congregate around water sources, and game viewing is at its most reliable.'], highlights: ['Excellent visibility for predators and large mammals', 'High chances of lion, leopard, and cheetah sightings', 'Ideal weather conditions with minimal rainfall', 'Perfect for first-time safari travellers'] },
      { period: 'January – March (Calving Season)', description: ['This period coincides with the wildebeest calving season in Serengeti National Park, offering one of the most dramatic wildlife spectacles in Africa.'], highlights: ['Thousands of wildebeest calves are born daily', 'Increased predator activity, including lions and cheetahs', 'Ideal for travellers seeking action-packed wildlife encounters', 'Excellent photography opportunities'] },
      { period: 'July – September (Great Migration River Crossings)', description: ['These months are prime time for travellers aiming to witness the Great Migration river crossings in the northern Serengeti.'], highlights: ['Wildebeest and zebra crossings at the Mara River', 'Intense wildlife drama and predator-prey interactions', 'Peak safari season with high demand'] },
      { period: 'November – December (Green Season)', description: ['Short rains transform the landscape into lush greenery, creating a quieter and more scenic safari experience.'], highlights: ['Fewer tourists and a more exclusive feel', 'Vibrant landscapes and excellent birdlife photography', 'Great value with flexible lodge availability'] }
    ],
    why_book: [
      'Tanzania-based safari specialists with in-depth knowledge of the northern safari circuit',
      'Private safari vehicle with a professional, English-speaking driver-guide',
      'Transparent pricing with no hidden fees or surprise costs',
      'Flexible itineraries with the option to upgrade lodges or adjust routes',
      'Fast WhatsApp and email communication for real-time planning and support',
      'Trusted by international travellers from Europe, Asia, and North America',
      'Our focus is on personalised service, responsible tourism, and delivering authentic wildlife experiences. From the moment you inquire to the end of your safari, every detail is carefully managed to ensure reliability, comfort, and exceptional value.'
    ]
  }
];
