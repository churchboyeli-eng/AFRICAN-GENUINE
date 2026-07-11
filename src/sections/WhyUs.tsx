'use client';

import { useEffect, useRef, useState } from 'react';
import FadeUp from '@/components/FadeUp';
import { stats } from '@/data/content';

const values = [
  {
    title: 'Tanzanian-owned',
    body: 'We are not a third-party agent — African Genuine Tours & Safaris is owned and operated by a team born and raised in Tanzania. Every shilling you spend stays in the communities you visit.',
    icon: '🌍',
  },
  {
    title: '100% Tailor-made',
    body: 'No group tours, no fixed departures. Every itinerary is designed from scratch around your dates, pace, and interests — then refined through personal conversation.',
    icon: '✦',
  },
  {
    title: '24/7 Support',
    body: 'From departure to return, a dedicated trip manager is reachable around the clock. On the mountain or mid-safari, we answer within minutes.',
    icon: '◉',
  },
];

interface ParsedStat {
  prefix: string;
  number: number;
  decimals: number;
  suffix: string;
  raw: string;
}

function parseStat(value: string): ParsedStat {
  // Strip commas for number parsing
  const clean = value.replace(/,/g, '');
  // Match optional prefix, number (with optional decimal), then any trailing suffix
  const m = clean.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: '', number: 0, decimals: 0, suffix: value, raw: value };
  const numStr = m[2];
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return {
    prefix: m[1],
    number: parseFloat(numStr),
    decimals,
    suffix: m[3],
    raw: value,
  };
}

function formatNumber(n: number, parsed: ParsedStat): string {
  if (parsed.decimals > 0) {
    return n.toFixed(parsed.decimals);
  }
  // Comma-separate integers over 999
  if (parsed.number >= 1000) {
    return Math.round(n).toLocaleString('en-US');
  }
  return String(Math.round(n));
}

function CountStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const parsed = parseStat(value);
  const [display, setDisplay] = useState(parsed.prefix + '0' + parsed.suffix);
  const triggered = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(parsed.raw);
      return;
    }

    function runCountUp() {
      if (triggered.current) return;
      triggered.current = true;

      const duration = 1400;
      const startTime = performance.now();
      const target = parsed.number;

      function step(now: number) {
        const elapsed = now - startTime - delay * 1000;
        if (elapsed < 0) { requestAnimationFrame(step); return; }
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = eased * target;
        setDisplay(parsed.prefix + formatNumber(current, parsed) + parsed.suffix);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => { if (entries[0]?.isIntersecting) runCountUp(); },
        { rootMargin: '0px 0px -10% 0px', threshold: 0 },
      );
      observer.observe(el);
    }

    function onScroll() {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.9) runCountUp();
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <dt className="font-display text-[44px] font-extrabold tracking-tightest text-ovl-accent leading-none tabular-nums">
        {display}
      </dt>
      <dd className="font-body text-[13px] text-[#5c5750]">{label}</dd>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-[70px] bg-ovl-bg" aria-label="Why choose African Genuine Tours & Safaris">
      {/* Stat band */}
      <div className="shell">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 mb-20">
          {stats.map((stat, i) => (
            <CountStat key={stat.label} value={stat.value} label={stat.label} delay={i * 0.12} />
          ))}
        </dl>

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-[rgba(33,29,26,0.22)]" />

        {/* Value props */}
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <div className="card-surface p-8 h-full">
                <span className="mb-5 block text-2xl" aria-hidden="true">{v.icon}</span>
                <h3 className="font-display text-[20px] font-bold tracking-tighter text-[#211d1a] mb-3">
                  {v.title}
                </h3>
                <p className="text-[#5c5750] text-[14px] leading-relaxed">{v.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
