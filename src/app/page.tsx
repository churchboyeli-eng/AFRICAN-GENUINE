import TopBar from '@/sections/TopBar';
import Hero from '@/sections/Hero';
import FeaturedTours from '@/sections/FeaturedTours';
import Destinations from '@/sections/Destinations';
import KilimanjaroRoutes from '@/sections/KilimanjaroRoutes';
import Journal from '@/sections/Journal';
import Enquiry from '@/sections/Enquiry';
import SiteFooter from '@/sections/SiteFooter';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <FeaturedTours />
        <Destinations />
        <KilimanjaroRoutes />
        <Journal />
        <Enquiry />
      </main>
      <SiteFooter />
    </>
  );
}
