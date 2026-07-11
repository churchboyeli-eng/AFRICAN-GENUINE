import TopBar from '@/sections/TopBar';
import SiteFooter from '@/sections/SiteFooter';
import AboutHero from '@/sections/about/AboutHero';
import AboutMission from '@/sections/about/AboutMission';
import BrandLineBand from '@/sections/about/BrandLineBand';
import StatsBand from '@/sections/about/StatsBand';
import WhyUs from '@/sections/WhyUs';
import OurPurpose from '@/sections/about/OurPurpose';
import OriginStory from '@/sections/about/OriginStory';
import Partnerships from '@/sections/about/Partnerships';
import Careers from '@/sections/about/Careers';
import Awards from '@/sections/about/Awards';
import GeniusFamily from '@/sections/about/GeniusFamily';
import PlanCTA from '@/sections/about/PlanCTA';
import NewsletterSignup from '@/sections/about/NewsletterSignup';
import Reviews from '@/sections/Reviews';

export const metadata = {
  title: 'About Us — African Genuine Tours & Safaris',
  description:
    'African Genuine Tours & Safaris is a proudly Tanzanian operator dedicated to honest, locally guided wildlife experiences across East Africa.',
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <main className="bg-ovl-bg">
        <AboutHero />
        <AboutMission />
        <BrandLineBand />
        <StatsBand />
        <WhyUs />
        <OurPurpose />
        <OriginStory />
        <Partnerships />
        <Careers />
        <Awards />
        <Reviews />
        <GeniusFamily />
        <PlanCTA />
        <NewsletterSignup />
      </main>
      <SiteFooter />
    </>
  );
}
