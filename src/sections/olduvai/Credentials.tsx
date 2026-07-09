'use client';

import { useReveal } from '@/hooks/useReveal';

const GUIDES = [
  { name: 'Amani M.', role: 'Head Guide', credential: '14 years leading the Northern Circuit — Serengeti, Ngorongoro, Lake Manyara.', initials: 'AM' },
  { name: 'Fatuma K.', role: 'Cultural Liaison', credential: 'Swahili & Maasai heritage specialist; MA in East African Studies, University of Dar es Salaam.', initials: 'FK' },
  { name: 'Baraka J.', role: 'Summit Guide', credential: 'KINAPA-certified, 800+ Kilimanjaro ascents. Senior KPAP porter-welfare advocate.', initials: 'BJ' },
];

function GuideCard({ name, role, credential, initials }: typeof GUIDES[0]) {
  return (
    <div className="flex flex-col items-center text-center gap-5 px-8">
      <div className="w-24 h-24 rounded-full border border-[rgba(33,29,26,0.22)] bg-[#e8e4de] flex items-center justify-center shrink-0">
        <span className="font-cormorant text-[22px] font-light text-ovl-faint">{initials}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-cormorant text-[20px] font-light text-ovl-text">{name}</p>
        <p className="font-jost text-[10px] uppercase tracking-[.28em] text-ovl-faint">{role}</p>
      </div>
      <p className="font-jost text-[13px] font-light text-ovl-body leading-relaxed">
        {credential} <span className="text-ovl-faint italic">— PLACEHOLDER</span>
      </p>
    </div>
  );
}

export default function Credentials() {
  const ref = useReveal();

  return (
    <section
      className="ov-reveal bg-ovl-bg py-24 px-14 border-y border-[rgba(33,29,26,0.22)]"
      ref={ref}
      aria-label="Our guides"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center mb-14">
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ovl-faint block mb-3">
            The team behind your journey
          </span>
          <h2 className="font-cormorant text-[38px] font-light tracking-[-0.02em] text-ovl-text">
            Guides, not intermediaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(33,29,26,0.22)]">
          {GUIDES.map((g) => (
            <GuideCard key={g.name} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}
