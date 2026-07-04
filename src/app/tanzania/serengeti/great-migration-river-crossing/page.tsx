import tour from '@/data/tours/great-migration-river-crossing';
import TourLayout from '@/components/tour/TourLayout';

export const metadata = {
  title: tour.meta.title,
  description: tour.meta.description,
};

export default function TourPage() {
  return <TourLayout tour={tour} />;
}
