import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function GeniusFamily() {
  return (
    <section className="py-28 border-b border-line" aria-label="The African Genuine family">
      <div className="shell">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center">

          {/* Left: image */}
          <FadeUp>
            <div className="relative aspect-[16/11] rounded-card-lg overflow-hidden">
              <Image
                src="/img/journal/bush-beach.webp"
                alt="Travellers on a sunset dhow in Zanzibar — the classic bush-to-beach finale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={0.12}>
            <p className="eyebrow mb-5">The African Genuine family</p>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-extrabold tracking-tighter text-cream leading-tight mb-8">
              Every journey becomes<br />part of a bigger story.
            </h2>
            <p className="text-sand text-[16px] leading-[1.85] mb-6">
              Every guest who travels with us becomes part of a story that stretches from the Serengeti plains to the snowfields of Kilimanjaro, from the mangrove channels of Nyerere National Park to the white sands of Zanzibar. We are not just a tour company — we are a community of people who believe Africa deserves to be experienced as it truly is.
            </p>
            <p className="text-sand text-[16px] leading-[1.85]">
              When you travel with African Genuine Tours &amp; Safaris, you carry that story forward.
            </p>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
