'use client';
import { useEffect } from 'react';

type Listener = (scrollY: number) => void;

const listeners = new Set<Listener>();
let rafId = 0;
let lastY = -1;

function onScroll() {
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const y = window.scrollY;
    if (y === lastY) return;
    lastY = y;
    listeners.forEach((fn) => fn(y));
  });
}

let mounted = false;

export function useScrollRaf(fn: Listener) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!mounted) {
      window.addEventListener('scroll', onScroll, { passive: true });
      mounted = true;
    }
    listeners.add(fn);
    fn(window.scrollY);
    return () => { listeners.delete(fn); };
  }, [fn]);
}
