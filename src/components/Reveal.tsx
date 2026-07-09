'use client';

import { useRef, useEffect, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: skip straight to final state
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('vis');
      return;
    }

    let triggered = false;

    function trigger() {
      if (triggered || !el) return;
      triggered = true;
      el.classList.add('vis');
      observer?.unobserve(el);
      window.removeEventListener('scroll', checkRect);
      window.removeEventListener('resize', checkRect);
    }

    // getBoundingClientRect fallback (fires on scroll + resize)
    function checkRect() {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.86) trigger();
    }

    // IntersectionObserver (primary)
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => { if (entries[0]?.isIntersecting) trigger(); },
        { rootMargin: '0px 0px -14% 0px', threshold: 0 },
      );
      observer.observe(el);
    }

    // Run fallback immediately + on scroll/resize
    checkRect();
    window.addEventListener('scroll', checkRect, { passive: true });
    window.addEventListener('resize', checkRect);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', checkRect);
      window.removeEventListener('resize', checkRect);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
