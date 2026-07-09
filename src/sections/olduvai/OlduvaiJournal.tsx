'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { posts } from '@/data/content';

export default function OlduvaiJournal() {
  const ref = useReveal();

  return (
    <section
      className="ov-reveal py-24 px-14"
      ref={ref}
      id="journal"
      aria-label="Journal"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="font-jost text-[10px] uppercase tracking-[.36em] text-ov-brass block mb-3">
              Stories from the field
            </span>
            <h2 className="font-cormorant text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-ov-ivory">
              The African Genuine Journal
            </h2>
          </div>
          <a
            href="/contact"
            className="ov-link hidden sm:block font-jost text-[11px] uppercase tracking-[.2em] text-ov-muted hover:text-ov-ivory transition-colors duration-300"
          >
            Get in touch →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group border border-[rgba(224,168,63,0.14)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-1 focus-within:ring-ov-brass"
            >
              <div className="relative h-52 overflow-hidden bg-ov-deep">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(21,15,8,0.9) 100%)' }}
                  aria-hidden="true"
                />
              </div>

              <div className="p-7">
                <p className="font-jost text-[9px] uppercase tracking-[.32em] text-ov-brass mb-4">
                  {post.tag}
                </p>
                <h3 className="font-cormorant text-[22px] font-light leading-[1.25] tracking-[-0.01em] text-ov-ivory mb-3">
                  {post.title}
                </h3>
                <p className="font-jost text-[13px] font-light text-ov-muted leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <a
                  href="/contact"
                  className="ov-link font-jost text-[11px] uppercase tracking-[.2em] text-ov-brass hover:text-ov-ivory transition-colors duration-300"
                  aria-label={`Plan this trip: ${post.title}`}
                >
                  Plan this trip →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
