import TopBar from '@/sections/TopBar';
import Hero from '@/sections/Hero';
import FeaturedTours from '@/sections/FeaturedTours';
import Destinations from '@/sections/Destinations';
import KilimanjaroRoutes from '@/sections/KilimanjaroRoutes';
import Journal from '@/sections/Journal';
import Enquiry from '@/sections/Enquiry';
import SiteFooter from '@/sections/SiteFooter';
import Reveal from '@/components/Reveal';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Reveal><FeaturedTours /></Reveal>
        <Reveal><Destinations /></Reveal>
        <Reveal><KilimanjaroRoutes /></Reveal>
        <Reveal><Journal /></Reveal>
        <Reveal><Enquiry /></Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
