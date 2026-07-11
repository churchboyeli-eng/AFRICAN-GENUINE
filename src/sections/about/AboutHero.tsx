import Image from 'next/image';

export default function AboutHero() {
  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[960px] flex items-end overflow-hidden bg-ov-bg"
      aria-label="About us hero"
    >
      <Image
        src="/img/about/hero.webp"
        alt="Dawn light spreading across the Serengeti plains"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* veil — darker at bottom so text pops */}
      <div className="absolute inset-0 bg-tour-veil" aria-hidden="true" />

      <div className="relative w-full shell pb-16 lg:pb-24">
        {/* gold rule */}
        <div className="gold-rule w-16 mb-8" />
        <p className="eyebrow mb-5 tracking-wider2 !text-[#e0a83f]">About us</p>
        <h1 className="font-display text-[clamp(44px,8vw,96px)] font-extrabold tracking-tighter text-cream leading-[0.93] max-w-4xl">
          We Are African<br />Genuine Tours<br />&amp;&nbsp;Safaris
        </h1>
      </div>
    </section>
  );
}
