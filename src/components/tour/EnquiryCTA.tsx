import Link from 'next/link';

export default function EnquiryCTA() {
  return (
    <section id="enquiry-cta" className="py-[70px] bg-ovl-bg" aria-label="Enquire about this trip">
      <div className="shell text-center">
        <p className="eyebrow mb-4">Ready to go?</p>
        <h2 className="font-display text-[32px] font-extrabold tracking-tighter text-[#211d1a] mb-4">
          Let&rsquo;s tailor this trip for you
        </h2>
        <p className="text-[#5c5750] text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
          Tell us your dates, group size and budget — we&rsquo;ll send you a personalised proposal within one working day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-gold inline-flex items-center justify-center">
            Send an enquiry
          </a>
          <Link href="/itineraries" className="btn-ghost inline-flex items-center justify-center">
            Browse all itineraries
          </Link>
        </div>
      </div>
    </section>
  );
}
