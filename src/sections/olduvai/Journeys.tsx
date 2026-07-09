'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { tours } from '@/data/content';

export default function Journeys() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const sectionRef = useReveal();

  function scroll(dir: -1 | 1) {
    const next = Math.max(0, Math.min(tours.length - 1, active + dir));
    setActive(next);
    const card = trackRef.current?.children[next] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  return (
    <section className="ov-reveal bg-ovl-bg py-24" ref={sectionRef} aria-label="Signature journeys">
      {/* Heading row */}
      <div className="flex items-end justify-between px-14 mb-12">
        <div>
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ovl-faint block mb-3">
            Signature journeys
          </span>
          <h2 className="font-cormorant text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-ovl-text">
            Crafted for the curious
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/itineraries"
            className="hidden sm:block font-jost text-[11px] uppercase tracking-[.2em] text-ovl-body hover:text-ovl-accent transition-colors duration-300"
          >
            All 21 itineraries →
          </a>
          <div className="flex gap-3">
            {(['←', '→'] as const).map((arrow, i) => (
              <button
                key={arrow}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                aria-label={i === 0 ? 'Previous journey' : 'Next journey'}
                className="w-11 h-11 border border-[rgba(33,29,26,0.22)] text-ovl-body font-jost text-[16px] flex items-center justify-center transition-all duration-300 hover:border-ovl-accent hover:text-ovl-accent"
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pl-14 pr-14 pb-2 snap-x snap-mandatory"
      >
        {tours.map((tour, i) => (
          <article
            key={tour.id}
            className="snap-start shrink-0 w-[340px] flex flex-col border border-[rgba(33,29,26,0.12)] group bg-ovl-bg"
          >
            {/* Image */}
            <a
              href={tour.href}
              className="relative h-[380px] bg-[#150f08] overflow-hidden block"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150f08]/70 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 font-cormorant text-[13px] font-light tracking-[.16em] text-[#f5ecd8]/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="absolute top-5 right-5 font-jost text-[10px] uppercase tracking-[.12em] text-[#f5ecd8]/80 border border-[rgba(224,168,63,0.3)] px-2.5 py-1">
                ★ {tour.rating}
              </span>
            </a>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-7 gap-4">
              <p className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">
                {tour.category} · {tour.days}
              </p>
              <h3 className="font-cormorant text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-ovl-text">
                {tour.name}
              </h3>
              <p className="font-jost text-[13px] font-light text-ovl-body leading-relaxed flex-1">
                {tour.blurb}
              </p>

              <ul className="flex flex-col gap-1">
                {tour.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="font-jost text-[11px] font-light text-ovl-body/70 flex items-start gap-2">
                    <span className="text-ovl-faint mt-0.5">✦</span>{h}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(33,29,26,0.12)]">
                <span className="font-jost text-[12px] font-light text-ovl-accent">
                  {tour.price}
                </span>
                <a
                  href={tour.href}
                  className="font-jost text-[11px] uppercase tracking-[.16em] text-ovl-body hover:text-ovl-accent transition-colors duration-300"
                >
                  Discover →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
