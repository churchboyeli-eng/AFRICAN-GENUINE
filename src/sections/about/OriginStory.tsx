import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function OriginStory() {
  return (
    <section className="py-28 border-b border-line" aria-label="Our origin story">
      <div className="shell">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">

          {/* Image — left on desktop, below text on mobile */}
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-card-lg overflow-hidden">
              <Image
                src="/img/journal/migration.webp"
                alt="Guide scanning the Serengeti horizon at first light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Text — right on desktop, above image on mobile */}
          <FadeUp className="order-1 lg:order-2">
            <p className="eyebrow mb-5">How we began</p>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-extrabold tracking-tighter text-cream leading-tight mb-8">
              A guide&rsquo;s notebook,<br />turned into a calling.
            </h2>
            <p className="text-sand text-[16px] leading-[1.85] mb-6">
              African Genuine Tours &amp; Safaris grew from years spent tracking lion prides at dawn and reading the night sky over the Ngorongoro rim. Our founders believed that knowing a place deeply is the only honest way to share it — that a guide who can name every bird by call, read the grass for predator movement, and tell you whose grandfather planted that fig tree is worth a thousand brochures.
            </p>
            <p className="text-sand text-[16px] leading-[1.85] mb-10">
              That belief still shapes every route we plan, every guide we train, and every lodge we recommend. We are, at heart, a guide&rsquo;s company.
            </p>
            <a
              href="/itineraries"
              className="inline-flex items-center gap-2 font-body text-[14px] font-bold text-gold-bright hover:text-gold transition-colors focus:outline-none focus-visible:underline"
            >
              Browse our itineraries <span aria-hidden="true">→</span>
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
