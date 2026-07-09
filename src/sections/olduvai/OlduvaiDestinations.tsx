'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { destinations } from '@/data/content';

export default function OlduvaiDestinations() {
  const ref = useReveal();

  return (
    <section
      className="ov-reveal py-20"
      ref={ref}
      id="destinations"
      aria-label="Destinations"
    >
      {/* Heading */}
      <div className="px-14 mb-10">
        <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ov-brass block mb-3">
          Explore Tanzania
        </span>
        <div className="flex items-end justify-between">
          <h2 className="font-cormorant text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-ov-ivory">
            Pick your wilderness
          </h2>
          <a
            href="/itineraries"
            className="ov-link hidden sm:block font-jost text-[11px] uppercase tracking-[.2em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
          >
            All itineraries →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        role="list"
        aria-label="Destination cards, scroll horizontally"
        className="flex gap-4 overflow-x-auto no-scrollbar pl-14 pr-14 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {destinations.map((dest) => (
          <div
            key={dest.name}
            role="listitem"
            className="relative flex-shrink-0 overflow-hidden group cursor-pointer focus-within:ring-1 focus-within:ring-ov-brass"
            style={{ width: 260, height: 360, scrollSnapAlign: 'start' }}
          >
            <Image
              src={dest.image}
              alt={`${dest.name} — safari destination in Tanzania`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="260px"
            />
            {/* Gradient */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(21,15,8,0.9) 100%)' }}
              aria-hidden="true"
            />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-jost text-[9px] uppercase tracking-[.28em] text-ov-brass mb-2">
                {dest.count}
              </p>
              <h3 className="font-cormorant text-[24px] font-light tracking-[-0.01em] text-ov-ivory leading-none">
                {dest.name}
              </h3>
            </div>
            <a
              href="/itineraries"
              className="absolute inset-0 focus:outline-none"
              aria-label={`Explore ${dest.name}, ${dest.count}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
