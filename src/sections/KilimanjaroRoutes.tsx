'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { routes } from '@/data/content';
import type { Route } from '@/data/content';

export default function KilimanjaroRoutes() {
  const [selected, setSelected] = useState<string>('lemosho');

  const detail = routes.find((r) => r.key === selected) ?? routes[0];

  return (
    <section id="kilimanjaro" className="py-[70px] bg-ink-deep/60" aria-label="Kilimanjaro routes comparison">
      <div className="shell">
        {/* Heading */}
        <div className="mb-12">
          <p className="eyebrow mb-3">Climb Kilimanjaro</p>
          <h2 className="font-display text-[38px] font-extrabold tracking-tighter text-cream leading-tight max-w-xl">
            Choose the right route for you
          </h2>
        </div>

        {/* Route selector cards */}
        <div
          role="radiogroup"
          aria-label="Select a Kilimanjaro route"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10"
        >
          {routes.map((route) => {
            const isActive = selected === route.key;
            return (
              <button
                key={route.key}
                role="radio"
                aria-checked={isActive}
                onClick={() => setSelected(route.key)}
                className={`relative rounded-card border p-5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? 'border-gold bg-gold/5'
                    : 'border-line bg-panel hover:border-gold/40'
                }`}
              >
                {/* Success rate badge */}
                <span
                  className={`mb-4 inline-block font-display text-[28px] font-extrabold leading-none ${
                    isActive ? 'text-gold' : 'text-cream'
                  }`}
                >
                  {route.success}
                </span>

                <p className="font-body text-[11px] text-clay mb-1">Success rate</p>

                <h3 className="font-display text-[18px] font-bold tracking-tighter text-cream mb-0.5">
                  {route.name}
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-label text-gold mb-3">
                  {route.tag}
                </p>

                <div className="flex items-center gap-3 text-[12px] text-sand mb-4">
                  <span>{route.days}</span>
                  <span className="text-clay">·</span>
                  <span>{route.difficulty}</span>
                </div>

                {/* Difficulty bar */}
                <div
                  role="img"
                  aria-label={`Difficulty: ${route.difficulty}, ${route.difficultyPct}%`}
                  className="h-1 w-full rounded-full bg-line overflow-hidden"
                >
                  <motion.div
                    className="h-full rounded-full bg-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${route.difficultyPct}%` }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.1, 1], delay: 0.1 }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <motion.div
          key={detail.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.1, 1] }}
          className="card-surface p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="font-display text-[28px] font-extrabold tracking-tighter text-cream">
                  {detail.name} Route
                </h3>
                <span className="eyebrow rounded-pill border border-line px-3 py-1">{detail.tag}</span>
              </div>
              <div className="flex gap-5 mb-6 text-[13px] text-sand">
                <span>{detail.days}</span>
                <span className="text-clay">·</span>
                <span>{detail.distance}</span>
                <span className="text-clay">·</span>
                <span>{detail.difficulty}</span>
              </div>
              <p className="text-sand text-[15px] leading-relaxed max-w-2xl">{detail.description}</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right shrink-0">
              <div>
                <p className="font-display text-[48px] font-extrabold text-gold leading-none">{detail.success}</p>
                <p className="text-sand text-[13px]">summit success rate</p>
              </div>
              <a href={`/kilimanjaro/${detail.slug}`} className="btn-gold whitespace-nowrap">
                View route →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
