import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import { posts } from '@/data/content';

export default function Journal() {
  return (
    <section id="journal" className="py-[70px]" aria-label="Journal">
      <div className="shell">
        <FadeUp>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-3">Stories from the field</p>
              <h2 className="font-display text-[38px] font-extrabold tracking-tighter text-cream leading-tight">
                The African Genuine Journal
              </h2>
            </div>
            <a
              href="/contact"
              className="hidden sm:inline-block font-body text-[13px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
            >
              Get in touch →
            </a>
          </div>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeUp key={post.title} delay={i * 0.1}>
              <article className="card-surface group overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gold">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-card-veil" />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-3">{post.tag}</p>
                  <h3 className="font-display text-[18px] font-bold tracking-tighter text-cream leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sand text-[13px] leading-relaxed mb-4">{post.excerpt}</p>
                  <a
                    href="/contact"
                    className="font-body text-[12px] font-semibold text-gold hover:text-gold-bright transition-colors focus:outline-none focus-visible:underline"
                    aria-label={`Enquire about: ${post.title}`}
                  >
                    Plan this trip →
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
