import OlduvaiHeader              from '@/sections/olduvai/OlduvaiHeader';
import OlduvaiHero                from '@/sections/olduvai/OlduvaiHero';
import TrustBar                   from '@/sections/olduvai/TrustBar';
import Intro                      from '@/sections/olduvai/Intro';
import Journeys                   from '@/sections/olduvai/Journeys';
import OlduvaiDestinations        from '@/sections/olduvai/OlduvaiDestinations';
import OlduvaiKilimanjaroRoutes   from '@/sections/olduvai/OlduvaiKilimanjaroRoutes';
import OlduvaiJournal             from '@/sections/olduvai/OlduvaiJournal';
import ParallaxQuote              from '@/sections/olduvai/ParallaxQuote';
import Credentials                from '@/sections/olduvai/Credentials';
import Experiences                from '@/sections/olduvai/Experiences';
import Enquiry                    from '@/sections/olduvai/Enquiry';
import SiteFooter                  from '@/sections/SiteFooter';

export default function HomePage() {
  return (
    <div className="bg-ov-bg text-ov-ivory font-jost antialiased min-h-screen">
      <OlduvaiHeader />

      <main>
        {/* 1 — Hero */}
        <OlduvaiHero />

        {/* 2 — Trust bar */}
        <TrustBar />

        {/* 3 — Mission + real count-up stats */}
        <Intro />

        {/* 4 — Tour carousel (real tour data) */}
        <Journeys />

        {/* 5 — Destinations horizontal scroll (real data) */}
        <OlduvaiDestinations />

        {/* 6 — Kilimanjaro route comparison (real data + interactive) */}
        <OlduvaiKilimanjaroRoutes />

        {/* 7 — Journal posts (real data) */}
        <OlduvaiJournal />

        {/* 8 — Parallax testimonial */}
        <ParallaxQuote />

        {/* 9 — Guide credentials */}
        <Credentials />

        {/* 10 — The Genius difference */}
        <Experiences />

        {/* 11 — Full enquiry form (4 fields + validation + WhatsApp) */}
        <Enquiry />
      </main>

      <SiteFooter />
    </div>
  );
}
