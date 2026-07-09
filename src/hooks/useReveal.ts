'use client';
import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('ov-vis');
      return;
    }

    let done = false;
    function trigger() {
      if (done || !el) return;
      done = true;
      el.classList.add('ov-vis');
      observer?.unobserve(el);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    function check() {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.86) trigger();
    }

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (e) => { if (e[0]?.isIntersecting) trigger(); },
        { rootMargin: '0px 0px -14% 0px', threshold: 0 },
      );
      observer.observe(el);
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return ref;
}
