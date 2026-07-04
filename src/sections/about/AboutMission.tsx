import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function AboutMission() {
  return (
    <section className="py-28 border-b border-line" aria-label="Our mission">
      <div className="shell">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">

          {/* Left: text */}
          <FadeUp>
            <p className="eyebrow mb-5">What we believe</p>
            <h2 className="font-display text-[clamp(30px,4vw,52px)] font-extrabold tracking-tighter text-cream leading-tight mb-8">
              Travel that is honest,<br />local, and lasting.
            </h2>
            <p className="text-sand text-[16px] leading-[1.85] mb-6">
              African Genuine Tours &amp; Safaris was founded on a single conviction: that the greatest journeys leave both traveller and landscape better than before. We design immersive wildlife experiences, mountain expeditions, and coastal escapes across Tanzania — each led by expert local guides who have grown up in these landscapes and carry the knowledge, language, and love of the place with them.
            </p>
            <p className="text-sand text-[16px] leading-[1.85] mb-10">
              We are not a wholesaler or aggregator. Every itinerary is handcrafted, every guide is personally known to us, and every partner property has earned its place through consistent standards and a provable contribution to the communities and ecosystems around it.
            </p>
            <a href="/itineraries" className="btn-gold inline-flex items-center gap-3">
              Explore our tours <span aria-hidden="true">→</span>
            </a>
          </FadeUp>

          {/* Right: image */}
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/5] rounded-card-lg overflow-hidden">
              <Image
                src="/img/dest/serengeti.webp"
                alt="Wildebeest crossing the Mara River during the Great Migration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
