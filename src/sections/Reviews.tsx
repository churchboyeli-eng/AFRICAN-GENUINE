'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '@/data/content';

const STARS = '★★★★★';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      const wrapped = (next + reviews.length) % reviews.length;
      setDirection(next > index ? 1 : -1);
      setIndex(wrapped);
    },
    [index],
  );

  const review = reviews[index];

  return (
    <section id="reviews" className="py-[70px] bg-ovl-bg" aria-label="Client reviews">
      <div className="shell">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-3">What travellers say</p>
          <h2 className="font-display text-[38px] font-extrabold tracking-tighter text-[#211d1a] leading-tight">
            Moments that stay with you
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden max-w-2xl mx-auto"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Review ${index + 1} of ${reviews.length}`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={review.author}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.1, 1] }}
              className="card-surface p-10 text-center"
            >
              {/* Stars */}
              <p className="mb-6 text-[20px] tracking-widest text-ovl-accent" aria-label="5 star rating">
                {STARS}
              </p>

              {/* Quote */}
              <blockquote
                cite={`#review-${index}`}
                className="font-display text-[22px] font-bold tracking-tighter text-cream leading-snug mb-8"
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={review.avatar}
                  alt={`Photo of ${review.author}`}
                  width={44}
                  height={44}
                  className="rounded-full border border-[rgba(33,29,26,0.22)] object-cover"
                />
                <div className="text-left">
                  <p className="font-body text-[14px] font-semibold text-[#211d1a]">{review.author}</p>
                  <p className="font-mono text-[9px] uppercase tracking-label text-[#7a746c]">{review.trip}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => go(index - 1)}
            className="rounded-pill border border-[rgba(33,29,26,0.22)] p-2.5 text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div role="tablist" aria-label="Review navigation" className="flex items-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.author}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to review ${i + 1}: ${r.author}`}
                onClick={() => go(i)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === index ? '#d24d2e' : 'rgba(33,29,26,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            className="rounded-pill border border-[rgba(33,29,26,0.22)] p-2.5 text-[#5c5750] hover:text-[#211d1a] hover:border-[#d24d2e]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d24d2e]"
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
