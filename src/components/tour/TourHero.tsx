import Image from 'next/image';

interface Props {
  image: string;
  alt: string;
  tags?: string[];
  tagline: string;
  subhead?: string;
}

export default function TourHero({ image, alt, tags, tagline, subhead }: Props) {
  return (
    <section className="shell pt-6 pb-0" aria-label="Tour hero">
      <div className="relative h-[480px] md:h-[560px] lg:h-[620px] rounded-hero overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-tour-veil" aria-hidden="true" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={`rounded-pill border px-4 py-1.5 font-mono text-[10px] uppercase tracking-label backdrop-blur-sm ${
                    i === 0
                      ? 'border-gold/50 bg-ink/60 text-gold'
                      : 'border-line bg-ink/60 text-sand'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold tracking-tightest text-cream leading-[1.0] mb-3 max-w-3xl">
            {tagline}
          </h1>
          {subhead && (
            <p className="text-sand text-[16px] max-w-xl leading-relaxed">{subhead}</p>
          )}
        </div>
      </div>
    </section>
  );
}
