'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';
import { stats } from '@/data/content';

interface ParsedStat { prefix: string; number: number; decimals: number; suffix: string; }

function parseStat(value: string): ParsedStat {
  const clean = value.replace(/,/g, '');
  const m = clean.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: '', number: 0, decimals: 0, suffix: value };
  const numStr = m[2];
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { prefix: m[1], number: parseFloat(numStr), decimals, suffix: m[3] };
}

function StatItem({ raw }: { raw: string }) {
  const parsed = parseStat(raw);
  const { value, ref } = useCountUp(parsed.number, 1600, parsed.decimals);

  const display = parsed.decimals > 0
    ? value.toFixed(parsed.decimals)
    : parsed.number >= 1000
      ? Math.round(value).toLocaleString('en-US')
      : String(Math.round(value));

  return (
    <span
      ref={ref as React.RefObject<HTMLElement>}
      className="font-cormorant text-[34px] md:text-[52px] font-light leading-none text-ovl-accent tabular-nums"
    >
      {parsed.prefix}{display}{parsed.suffix}
    </span>
  );
}

export default function Intro() {
  const ref = useReveal();

  return (
    <section className="ov-reveal bg-ovl-bg py-16 px-6 md:py-28 md:px-14" ref={ref} aria-label="About us">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ovl-faint leading-loose">
            A house of<br />Tanzanian guides
          </span>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8 md:gap-12">
          <p className="font-cormorant text-[24px] md:text-[34px] font-light leading-[1.25] tracking-[-0.01em] text-ovl-text">
            We are not brokers. We are the guides, the trackers, the camp managers — Tanzanians who have spent our lives reading these landscapes, so you can arrive and simply be present.
          </p>

          <div className="h-px w-full bg-[rgba(33,29,26,0.22)]" />

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt><StatItem raw={stat.value} /></dt>
                <dd className="font-jost text-[10px] uppercase tracking-[.24em] text-ovl-faint">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
