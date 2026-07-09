'use client';
import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  const triggered = useRef(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    function start() {
      if (triggered.current) return;
      triggered.current = true;
      const t0 = performance.now();
      function step(now: number) {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(parseFloat((eased * target).toFixed(decimals)));
        if (p < 1) requestAnimationFrame(step);
        else setValue(target);
      }
      requestAnimationFrame(step);
    }

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (e) => { if (e[0]?.isIntersecting) start(); },
        { rootMargin: '0px 0px -10% 0px', threshold: 0 },
      );
      observer.observe(el);
    }
    function check() {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.9) start();
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => { observer?.disconnect(); window.removeEventListener('scroll', check); };
  }, [target, duration, decimals]);

  return { value, ref };
}
