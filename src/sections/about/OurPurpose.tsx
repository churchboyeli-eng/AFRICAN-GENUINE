import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function OurPurpose() {
  return (
    <section className="relative py-44 overflow-hidden" aria-label="Our purpose">
      <Image
        src="/img/dest/ngorongoro.webp"
        alt="Elephants moving through the Ngorongoro Crater at golden hour"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-tour-veil" aria-hidden="true" />

      <div className="relative shell text-center">
        <FadeUp>
          <p className="eyebrow mb-6 tracking-wider2">Our purpose</p>
          <h2 className="font-display text-[clamp(30px,5vw,62px)] font-extrabold tracking-tighter text-cream leading-tight max-w-3xl mx-auto mb-8">
            To connect people with Africa as it truly is.
          </h2>
          <p className="text-sand text-[17px] leading-relaxed max-w-xl mx-auto mb-12">
            Not the Africa of glossy brochures or rehearsed game drives — the real Africa of dust and light, early mornings and unexpected silences, and communities whose livelihoods depend on the wildness being kept wild.
          </p>
          <a href="/contact" className="btn-gold inline-flex items-center gap-2">
            Start your journey
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
