import DayTripsClient from './DayTripsClient';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Day Trips & Short Escapes — African Genuine Tours & Safaris',
  description:
    '7 single-day Tanzania experiences — waterfalls, hot springs, crater lakes and wildlife excursions. Bookable alone or combined around your safari or Kilimanjaro climb.',
  path: '/day-trips',
});

export default function DayTripsPage() {
  return <DayTripsClient />;
}
