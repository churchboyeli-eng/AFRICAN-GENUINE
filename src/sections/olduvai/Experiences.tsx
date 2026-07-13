'use client';

import { useReveal } from '@/hooks/useReveal';

const ITEMS = [
  {
    numeral: 'I',
    title: 'Guides who own the land',
    body: 'Every safari is led by a Tanzanian guide who grew up near these ecosystems — not a licensed contractor hired for the season. Their relationship with the landscape is personal, not professional.',
  },
  {
    numeral: 'II',
    title: 'No fixed departures',
    body: 'We do not run group tours. Every departure is private and built around your calendar, your pace, and the specific conditions on the ground that week.',
  },
  {
    numeral: 'III',
    title: 'Porter welfare, certified',
    body: 'KPAP-certified on every Kilimanjaro route. Fair wages, proper equipment, regulated loads. The mountain is only as good as the team that helps you climb it.',
  },
];

export default function Experiences() {
  const ref = useReveal();

  return (
    <section
      className="ov-reveal bg-ovl-bg py-16 px-6 md:py-28 md:px-14"
      ref={ref}
      aria-label="The Genius difference"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-20">
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ovl-faint block mb-3">
            The Genius difference
          </span>
          <h2 className="font-cormorant text-[28px] md:text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-ovl-text">
            Why it matters who you travel with
          </h2>
        </div>

        {/* 3-col grid — dark ink cards on light background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(33,29,26,0.12)]">
          {ITEMS.map((item) => (
            <div key={item.numeral} className="flex flex-col gap-6 px-6 py-8 md:px-10 md:py-10 bg-[#171009]">
              <span className="font-cormorant text-[48px] md:text-[64px] font-light leading-none text-[#e0a83f]/20 tracking-[-0.02em]">
                {item.numeral}
              </span>
              <h3 className="font-cormorant text-[22px] md:text-[26px] font-light leading-[1.2] tracking-[-0.01em] text-[#f5ecd8]">
                {item.title}
              </h3>
              <p className="font-jost text-[14px] font-light text-[#cbb98f] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
