export type DayTrip = {
  id: string;
  name: string;
  category: string;
  cats: string[];
  location: string;
  duration: string;
  price: 'On request';
  bestFor: string;
  img: string;
  tagline: string;
  desc: string;
  included: string[];
  excluded: string[];
};

export const dayTrips: DayTrip[] = [
  {
    id: 'materuni',
    name: 'Materuni Waterfall & Coffee',
    category: 'Culture',
    cats: ['Culture', 'Nature'],
    location: 'Materuni, near Moshi',
    duration: 'Full day',
    price: 'On request',
    bestFor: 'Culture lovers',
    img: '/img/day/materuni.jpg',
    tagline: 'A forest waterfall, a swim, and a Chagga coffee experience in the hills above Moshi.',
    desc: 'A day away from the bustle in the green hills above Moshi. You walk through smallholdings rich with avocado, mango and banana to the Materuni Waterfall, where you can cool off in the natural pool at its base. The afternoon is spent with a Chagga family in the coffee plantations, learning how coffee goes from bean to cup — grinding, roasting and boiling to a traditional song — before a home-cooked Chagga lunch. A lovely way to relax before or after a Kilimanjaro climb.',
    included: [
      'Local guide & village host',
      'Materuni Waterfall walk & entry',
      'Coffee-making experience',
      'Traditional Chagga lunch',
    ],
    excluded: [
      'Transfer to/from Materuni (can be arranged)',
      'Tips (at your discretion)',
      'Extra drinks & personal items',
    ],
  },
  {
    id: 'chemka',
    name: 'Chemka (Kikuletwa) Hot Springs',
    category: 'Relax',
    cats: ['Relax', 'Nature'],
    location: 'Kikuletwa, near Moshi',
    duration: 'Half day',
    price: 'On request',
    bestFor: 'Rest & recovery',
    img: '/img/day/chemka.jpg',
    tagline: 'A palm-fringed oasis of crystal-clear, warm spring water — the perfect recovery day.',
    desc: 'Locally known as Maji Moto, Chemka is a spring-fed oasis amid the Tanzanian plains — crystal-clear, gently warm water beneath dense fig trees and palms, with a rope swing for the brave. Fed by geothermal groundwater, the pool never stagnates and stays beautifully clear year-round. It is the ideal place to unwind after a Kilimanjaro hike or a safari; bring a swimsuit and a towel and simply float the afternoon away.',
    included: [
      'Local guide',
      'Hot springs entry',
      'Bottled water',
    ],
    excluded: [
      'Transfer to/from Chemka (can be arranged)',
      'Tips (at your discretion)',
      'Meals & beverages',
    ],
  },
  {
    id: 'lake-chala',
    name: 'Lake Chala Day Trip',
    category: 'Nature',
    cats: ['Nature', 'Adventure'],
    location: 'Tanzania–Kenya border',
    duration: 'Full day',
    price: 'On request',
    bestFor: 'Panoramic views',
    img: '/img/day/lake-chala.jpg',
    tagline: 'A hidden crater lake on the Kilimanjaro border, with panoramic rim views and canoeing.',
    desc: 'Lake Chala is a strikingly blue crater lake set in a caldera on the Tanzania–Kenya border, on the lower flanks of Kilimanjaro — a real find for anyone who loves panoramic views and quiet places. After the transfer you arrive at the crater rim for sweeping views over the tropical forest and the water far below. A trail leads down to the lakeshore, where you can canoe on the still water and take in the beautiful African scenery in near-total peace.',
    included: [
      'Experienced guide',
      'Canoeing on the lake',
      'Safety equipment',
    ],
    excluded: [
      'Transfer to/from Lake Chala (can be arranged)',
      'Tips (at your discretion)',
      'Meals & beverages',
    ],
  },
  {
    id: 'horse-riding',
    name: 'Horse Riding — Dolly Estate',
    category: 'Adventure',
    cats: ['Adventure'],
    location: 'Usa River, 40 min from Arusha',
    duration: '2 hours',
    price: 'On request',
    bestFor: 'Beginners & riders',
    img: '/img/day/horse-riding.jpg',
    tagline: 'A two-hour ride across a private estate where zebras and antelope roam.',
    desc: 'A two-hour ride across Dolly Estate in the Usa River area, about 40 minutes from Arusha, suitable for both beginners and experienced riders. As you follow the estate\'s trails you may spot zebras, wildebeest and antelope, including the unusual Gerenuk. The ride moves at the pace of the least experienced rider in the group, so it stays relaxed and safe; wear comfortable clothing and closed shoes (ideally with a small heel) in natural khaki or brown tones.',
    included: [
      'Experienced guide',
      'Horse-riding activity',
      'Safety helmets',
    ],
    excluded: [
      'Transfer to/from the estate (can be arranged)',
      'Tips (at your discretion)',
      'Meals & beverages',
    ],
  },
  {
    id: 'arusha-safari',
    name: 'Arusha National Park Safari',
    category: 'Wildlife',
    cats: ['Wildlife', 'Adventure'],
    location: 'Arusha National Park',
    duration: 'Full day',
    price: 'On request',
    bestFor: 'Walking safari',
    img: '/img/day/arusha-np.jpg',
    tagline: 'The one northern park where you can walk with a ranger — plus the flamingo-filled Momela lakes.',
    desc: 'Arusha National Park is the only park in Northern Tanzania where you can explore on foot. A light walking safari with an armed ranger lets you experience the tropical forest and its animals outside the vehicle, and walk up toward the crater of Mount Meru — the second-highest peak in Tanzania. After the walk, a jeep takes you to the far side of the park and the Momela Lakes, where pink flamingos gather along with plenty of other wildlife on the way.',
    included: [
      'Park fees & armed ranger',
      'Walking safari',
      'Private 4×4 & guide for the game drive',
    ],
    excluded: [
      'Transfer to/from the park (can be arranged)',
      'Tips (at your discretion)',
      'Meals & beverages',
    ],
  },
  {
    id: 'tarangire',
    name: 'Tarangire Day Trip',
    category: 'Wildlife',
    cats: ['Wildlife'],
    location: 'Tarangire National Park',
    duration: 'Full day',
    price: 'On request',
    bestFor: 'Elephants & birds',
    img: '/img/day/tarangire.jpg',
    tagline: 'Age-old baobabs, big elephant herds and 550+ bird species in a single day.',
    desc: 'Tarangire is famous for its ancient baobabs and its large elephant herds, which gather around the life-giving Tarangire River. Alongside the elephants you\'ll find zebra, giraffe, hyena, warthog, buffalo and a good chance of predators. It is a paradise for birders too — more than 550 species, from brightly plumaged yellow-necked spurfowl to weavers. Rolling grasslands, thick acacia bush and palm-dotted river country make for a full, rewarding day\'s game viewing from Arusha.',
    included: [
      'Park fees',
      'Private 4×4 with pop-up roof & guide',
      'Bottled water',
    ],
    excluded: [
      'Transfer to/from Tarangire (can be arranged)',
      'Tips (at your discretion)',
      'Lunch & beverages',
    ],
  },
];

export const dayTripFilters = ['All', 'Wildlife', 'Nature', 'Adventure', 'Culture', 'Relax'] as const;
export type DayTripFilter = (typeof dayTripFilters)[number];
