import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import { destinations } from '@/data/content';

export default function Destinations() {
  return (
    <section id="destinations" className="py-[70px] overflow-hidden" aria-label="Destinations">
      <div className="shell mb-8">
        <FadeUp>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow mb-3">Explore Tanzania</p>
              <h2 className="font-display text-[38px] font-extrabold tracking-tighter text-cream leading-tight">
                Pick your wilderness
              </h2>
            </div>
            <a
              href="/itineraries"
              className="hidden sm:inline-block font-body text-[13px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
            >
              All itineraries →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Horizontal scroll strip — no scrollbar, keyboard scrollable */}
      <div
        role="list"
        aria-label="Destination cards, scroll horizontally"
        className="flex gap-4 overflow-x-auto no-scrollbar pl-[46px] pr-[46px] pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {destinations.map((dest, i) => (
          <FadeUp key={dest.name} delay={i * 0.06}>
            <div
              role="listitem"
              className="relative flex-shrink-0 overflow-hidden rounded-card-lg cursor-pointer focus-within:ring-2 focus-within:ring-gold group"
              style={{ width: 260, height: 360, scrollSnapAlign: 'start' }}
            >
              <Image
                src={dest.image}
                alt={`${dest.name} – safari destination in Tanzania`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-card-veil" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="eyebrow mb-1.5 text-[9px]">{dest.count}</p>
                <h3 className="font-display text-[22px] font-bold tracking-tighter text-cream leading-none">
                  {dest.name}
                </h3>
              </div>
              <a
                href="/itineraries"
                className="absolute inset-0 focus:outline-none"
                aria-label={`Explore ${dest.name}, ${dest.count}`}
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
