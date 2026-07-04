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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-[70px]" aria-label="Why choose African Genuine Tours & Safaris">
      {/* Stat band */}
      <div className="shell">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 mb-20">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col gap-1.5">
                <dt className="font-display text-[44px] font-extrabold tracking-tightest text-gold leading-none">
                  {stat.value}
                </dt>
                <dd className="font-body text-[13px] text-sand">{stat.label}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-line" />

        {/* Value props */}
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <div className="card-surface p-8 h-full">
                <span className="mb-5 block text-2xl" aria-hidden="true">{v.icon}</span>
                <h3 className="font-display text-[20px] font-bold tracking-tighter text-cream mb-3">
                  {v.title}
                </h3>
                <p className="text-sand text-[14px] leading-relaxed">{v.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
