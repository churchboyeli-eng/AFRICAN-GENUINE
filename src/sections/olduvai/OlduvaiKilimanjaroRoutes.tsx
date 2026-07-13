'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { routes } from '@/data/content';

export default function OlduvaiKilimanjaroRoutes() {
  const [selected, setSelected] = useState('lemosho');
  const ref = useReveal();

  const detail = routes.find((r) => r.key === selected) ?? routes[0];

  return (
    <section
      className="ov-reveal py-14 px-6 md:py-24 md:px-14"
      ref={ref}
      id="kilimanjaro"
      aria-label="Kilimanjaro routes"
      style={{ background: 'rgba(21,15,8,0.6)' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mb-12">
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ov-brass block mb-3">
            Climb Kilimanjaro
          </span>
          <h2 className="font-cormorant text-[28px] md:text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-ov-ivory max-w-xl">
            Choose the right route for you
          </h2>
        </div>

        {/* Route selector */}
        <div
          role="radiogroup"
          aria-label="Select a Kilimanjaro route"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-10"
        >
          {routes.map((route) => {
            const isActive = selected === route.key;
            return (
              <button
                key={route.key}
                role="radio"
                aria-checked={isActive}
                onClick={() => setSelected(route.key)}
                className={`relative border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-ov-brass ${
                  isActive
                    ? 'border-ov-brass bg-[rgba(224,168,63,0.06)]'
                    : 'border-[rgba(224,168,63,0.18)] bg-transparent hover:border-ov-brass/50'
                }`}
              >
                <span className={`block font-cormorant text-[36px] font-light leading-none mb-1 ${isActive ? 'text-ov-brass' : 'text-ov-ivory'}`}>
                  {route.success}
                </span>
                <p className="font-jost text-[9px] uppercase tracking-[.2em] text-ov-muted/60 mb-4">Success rate</p>

                <h3 className="font-cormorant text-[20px] font-light text-ov-ivory mb-0.5">{route.name}</h3>
                <p className="font-jost text-[9px] uppercase tracking-[.2em] text-ov-brass mb-4">{route.tag}</p>

                <div className="flex items-center gap-3 font-jost text-[12px] text-ov-muted mb-5">
                  <span>{route.days}</span>
                  <span className="text-ov-muted/30">·</span>
                  <span>{route.difficulty}</span>
                </div>

                <div
                  role="img"
                  aria-label={`Difficulty: ${route.difficulty}, ${route.difficultyPct}%`}
                  className="h-px w-full bg-[rgba(224,168,63,0.15)] overflow-hidden"
                >
                  <div
                    className="h-full bg-ov-brass transition-all duration-700"
                    style={{ width: isActive ? `${route.difficultyPct}%` : '0%' }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          key={detail.key}
          className="border border-[rgba(224,168,63,0.2)] p-6 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3">
                <h3 className="font-cormorant text-[24px] md:text-[32px] font-light tracking-[-0.01em] text-ov-ivory">
                  {detail.name} Route
                </h3>
                <span className="font-jost text-[9px] uppercase tracking-[.2em] text-ov-brass border border-[rgba(224,168,63,0.4)] px-3 py-1">
                  {detail.tag}
                </span>
              </div>
              <div className="flex gap-5 mb-6 font-jost text-[13px] text-ov-muted">
                <span>{detail.days}</span>
                <span className="text-ov-muted/30">·</span>
                <span>{detail.distance}</span>
                <span className="text-ov-muted/30">·</span>
                <span>{detail.difficulty}</span>
              </div>
              <p className="font-jost text-[14px] font-light text-ov-muted leading-relaxed max-w-2xl">
                {detail.description}
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right shrink-0">
              <div>
                <p className="font-cormorant text-[40px] lg:text-[56px] font-light text-ov-brass leading-none">{detail.success}</p>
                <p className="font-jost text-[11px] uppercase tracking-[.16em] text-ov-muted mt-1">Summit success rate</p>
              </div>
              <a
                href={`/kilimanjaro/${detail.slug}`}
                className="font-jost text-[12px] uppercase tracking-[.12em] text-ov-ivory border border-[rgba(224,168,63,0.4)] px-7 py-3.5 transition-all duration-300 hover:border-ov-brass hover:bg-ov-brass hover:text-ov-deep"
              >
                View route →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
