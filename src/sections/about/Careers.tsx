import FadeUp from '@/components/FadeUp';

export default function Careers() {
  return (
    <section className="py-24 border-b border-[rgba(33,29,26,0.22)] bg-ovl-bg" aria-label="Join our team">
      <div className="shell">
        <FadeUp>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="eyebrow mb-5">Work with us</p>
              <h2 className="font-display text-[clamp(28px,4vw,46px)] font-extrabold tracking-tighter text-[#211d1a] leading-tight">
                Love Tanzania?<br />Join the team.
              </h2>
            </div>
            <div>
              <p className="text-[#5c5750] text-[16px] leading-[1.85] mb-10">
                We are always looking for passionate guides, local coordinators, and storytellers who believe that travel done well can change the world. If you know these ecosystems and want to share them honestly, we would love to hear from you.
              </p>
              <a
                href="mailto:churchboyeli@gmail.com?subject=Careers%20at%20African%20Genuine%20Tours%20%26%20Safaris"
                className="btn-gold inline-flex items-center gap-2"
              >
                Send us your story
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
