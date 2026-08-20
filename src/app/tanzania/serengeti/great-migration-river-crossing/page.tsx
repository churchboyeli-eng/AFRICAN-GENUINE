import tour from '@/data/tours/great-migration-river-crossing';
import TourLayout from '@/components/tour/TourLayout';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: tour.meta.title,
  description: tour.meta.description,
  path: '/tanzania/serengeti/great-migration-river-crossing',
});

export default function TourPage() {
  return <TourLayout tour={tour} path="/tanzania/serengeti/great-migration-river-crossing" />;
}
