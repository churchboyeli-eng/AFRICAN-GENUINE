import OlduvaiHeader            from '@/sections/olduvai/OlduvaiHeader';
import OlduvaiHero              from '@/sections/olduvai/OlduvaiHero';
import TrustBar                 from '@/sections/olduvai/TrustBar';
import Intro                    from '@/sections/olduvai/Intro';
import Journeys                 from '@/sections/olduvai/Journeys';
import OlduvaiDestinations      from '@/sections/olduvai/OlduvaiDestinations';
import OlduvaiKilimanjaroRoutes from '@/sections/olduvai/OlduvaiKilimanjaroRoutes';
import OlduvaiJournal           from '@/sections/olduvai/OlduvaiJournal';
import ParallaxQuote            from '@/sections/olduvai/ParallaxQuote';
import Credentials              from '@/sections/olduvai/Credentials';
import Experiences              from '@/sections/olduvai/Experiences';
import Enquiry                  from '@/sections/olduvai/Enquiry';
import SiteFooter               from '@/sections/SiteFooter';

export default function HomePage() {
  return (
    <div className="bg-ov-bg text-ov-ivory font-jost antialiased min-h-screen">
      <OlduvaiHeader />
      <main>
        <OlduvaiHero />
        <TrustBar />
        <Intro />
        <Journeys />
        <OlduvaiDestinations />
        <OlduvaiKilimanjaroRoutes />
        <OlduvaiJournal />
        <ParallaxQuote />
        <Credentials />
        <Experiences />
        <Enquiry />
      </main>
      <SiteFooter />
    </div>
  );
}
