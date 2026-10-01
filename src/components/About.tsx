import { Reveal } from "./Reveal";
import { images } from "../data/site";

const pillars = [
  {
    n: "i.",
    title: "Real charcoal",
    body: "No shortcuts — our kebabs and tikka are cooked over live coals for that unmistakable smoky char.",
  },
  {
    n: "ii.",
    title: "Hand-ground spice",
    body: "Whole spices toasted and ground in our kitchen every morning, to recipes passed down at home.",
  },
  {
    n: "iii.",
    title: "100% halal",
    body: "Fresh, certified halal meat from trusted suppliers — always, on every single plate.",
  },
];

export function About() {
  return (
    <section id="about" className="grain relative scroll-mt-16 overflow-hidden bg-char py-24 text-cream sm:py-32 lg:py-40">
      <div className="container-x relative z-10 grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Visual */}
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] ring-1 ring-cream/10">
              <img
                src={images.aboutTall}
                alt="Warmly lit dining room at A1 Restaurant"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-[42%] sm:-right-10">
              <div className="aspect-square overflow-hidden rounded-full border-[6px] border-char shadow-2xl shadow-black/50">
                <img src={images.aboutSmall} alt="Grilled meat platter" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="absolute -left-3 top-10 hidden rounded-full border border-cream/15 bg-char/80 px-4 py-2 backdrop-blur sm:block">
              <span className="eyebrow text-saffron">Family run</span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-saffron">02</span>
              <span className="h-px w-8 bg-cream/20" />
              <span className="eyebrow text-cream/50">Our Story</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.3rem,5.5vw,4rem)] font-light leading-[1.02] tracking-[-0.03em]">
              A table where <em className="italic text-saffron">everyone</em> is family.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-cream/65 sm:text-base">
              <p>
                A1 began with a simple promise: food that tastes like it was cooked at home, for people
                you love. Big flavours, generous portions and a welcome that feels like an old friend.
              </p>
              <p>
                Whether it's a quick lunch, a late-night grill box or a long celebration with the whole
                family — the coals are lit and there's always a seat for you.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08} className="border-t border-cream/15 pt-5">
                <span className="font-display text-sm italic text-saffron">{p.n}</span>
                <h3 className="mt-2 font-display text-xl font-normal tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{p.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <figure className="mt-16 rounded-[1.75rem] border border-cream/10 bg-cream/[0.03] p-7 sm:p-9">
              <div className="flex gap-1 text-saffron" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl font-light leading-snug tracking-tight text-cream sm:text-2xl">
                “The mixed grill is unreal — smoky, juicy and huge portions. Feels like eating at a
                friend's house. Our new favourite spot.”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-cream/45">
                — Google review
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
