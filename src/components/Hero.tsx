import { motion } from "framer-motion";
import { EASE } from "./Reveal";
import { images, site } from "../data/site";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

function Seal() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <defs>
        <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="59" fill="#14110F" />
      <circle cx="60" cy="60" r="56" fill="none" stroke="#E2A63B" strokeOpacity=".35" />
      <text fill="#F6F0E7" fontSize="9.2" letterSpacing="3.1" fontFamily="Manrope" fontWeight="600">
        <textPath href="#seal-circle">100% HALAL · CHARCOAL FIRED · FRESH DAILY ·</textPath>
      </text>
      <text x="60" y="68" textAnchor="middle" fill="#E2A63B" fontSize="24" fontFamily="Fraunces" fontStyle="italic">
        A1
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink text-cream">
      {/* warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,67,43,.55) 0%, rgba(226,166,59,.15) 45%, transparent 70%)" }}
      />

      <div className="container-x relative z-10 grid min-h-[100svh] items-center gap-14 pb-16 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-36">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.div {...fade(0.1)} className="flex items-center gap-3">
            <span className="h-px w-8 bg-saffron" />
            <span className="eyebrow text-saffron">{site.tagline}</span>
          </motion.div>

          <motion.h1
            {...fade(0.2)}
            className="mt-7 font-display text-[clamp(2.9rem,8.5vw,6.25rem)] font-light leading-[0.95] tracking-[-0.035em]"
          >
            Fire, spice
            <br />
            &amp; <em className="font-normal italic text-saffron">simply</em>
            <br />
            the best.
          </motion.h1>

          <motion.p {...fade(0.32)} className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/65 sm:text-base">
            Charcoal-grilled kebabs, slow-simmered curries and fragrant dum biryani — cooked with
            hand-ground spices and served with the warmth of family.
          </motion.p>

          <motion.div {...fade(0.44)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ember-deep"
            >
              Explore the menu
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:border-cream/60"
            >
              Reserve a table
            </a>
          </motion.div>

          <motion.dl
            {...fade(0.56)}
            className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-cream/10 border-t border-cream/10 pt-6"
          >
            {[
              { k: "4.8", v: "Guest rating" },
              { k: "100%", v: "Halal" },
              { k: "12–11", v: "Open daily" },
            ].map((s) => (
              <div key={s.v} className="px-4 first:pl-0">
                <dt className="font-display text-2xl font-light text-cream sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cream/45">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[520px] lg:col-span-6 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-[88%] sm:w-[80%] lg:w-[86%]">
            {/* orbit rings */}
            <div aria-hidden className="absolute -inset-[6%] rounded-full border border-saffron/25" />
            <div aria-hidden className="absolute -inset-[13%] hidden rounded-full border border-cream/[0.06] sm:block" />

            <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-cream/10">
              <img
                src={images.hero}
                alt="A1 charcoal grill platter with flatbread, sauces and fresh vegetables"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
            </div>

            {/* small companion dish */}
            <div className="absolute -bottom-2 -left-3 w-[34%] sm:-left-6">
              <div className="aspect-square overflow-hidden rounded-full border-[6px] border-ink shadow-2xl shadow-black/40">
                <img src={images.heroSmall} alt="Butter chicken" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* seal */}
            <div className="absolute -right-2 top-[6%] w-[26%] sm:-right-4">
              <Seal />
            </div>
          </div>

          <p className="mt-10 text-center text-[11px] uppercase tracking-[0.28em] text-cream/40 lg:mt-14">
            Dine-in · Takeaway · Delivery
          </p>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <a href="#menu" className="flex flex-col items-center gap-2 text-cream/40 transition-colors hover:text-cream/70">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-current" />
        </a>
      </div>
    </section>
  );
}
