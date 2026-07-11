import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function Partnerships() {
  return (
    <section className="py-28 border-b border-[rgba(33,29,26,0.22)] bg-ovl-bg" aria-label="Our partnerships">
      <div className="shell">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">

          {/* Left: text */}
          <FadeUp>
            <p className="eyebrow mb-5">Our partners</p>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight mb-8">
              Every camp<br />earns its place.
            </h2>
            <p className="text-[#5c5750] text-[16px] leading-[1.85] mb-6">
              We work exclusively with lodges, tented camps, and community conservancies that share our commitment to responsible tourism. A property earns its place on our itineraries through consistent service standards, transparent environmental policies, and provable contributions to local conservation and employment.
            </p>
            <p className="text-[#5c5750] text-[16px] leading-[1.85] mb-10">
              We visit every property ourselves before recommending it. No kickback relationships, no commission-driven shortcuts — only places we would book for our own families.
            </p>
            <a href="/contact" className="btn-ghost inline-flex items-center gap-2">
              Ask about our partners
            </a>
          </FadeUp>

          {/* Right: image */}
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/5] rounded-card-lg overflow-hidden">
              <Image
                src="/img/dest/tarangire.webp"
                alt="Elephant herd gathering at the Tarangire River"
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
