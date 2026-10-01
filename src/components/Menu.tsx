import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, Reveal } from "./Reveal";
import { cn } from "../utils/cn";
import { menu, signatures, site, type MenuItem } from "../data/site";

const price = (n: number) => `${site.currency}${n.toFixed(2)}`;

function Tag({ t }: { t: NonNullable<MenuItem["tags"]>[number] }) {
  const styles: Record<string, string> = {
    Spicy: "text-ember border-ember/30",
    "Chef's pick": "text-[#9a6a12] border-saffron/50 bg-saffron/10",
    Veg: "text-[#4d6b3a] border-[#4d6b3a]/30",
    Sharing: "text-ink/70 border-ink/20",
  };
  return (
    <span className={cn("rounded-full border px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.12em]", styles[t])}>
      {t}
    </span>
  );
}

function SectionHeading() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <Reveal className="lg:col-span-7">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-ember">01</span>
          <span className="h-px w-8 bg-ink/20" />
          <span className="eyebrow text-muted">The Menu</span>
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1] tracking-[-0.03em] text-ink">
          Made over flame,
          <br />
          <em className="italic text-ember">served</em> with heart.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
        <p className="max-w-sm text-[15px] leading-relaxed text-muted">
          Every plate starts with fresh, halal-certified meat, whole spices toasted in-house and
          bread pulled from the tandoor to order.
        </p>
      </Reveal>
    </div>
  );
}

function Signatures() {
  return (
    <div className="mt-20 grid gap-16 sm:grid-cols-2 sm:gap-x-10 lg:mt-24 lg:grid-cols-3 lg:gap-12">
      {signatures.map((s, i) => (
        <Reveal
          key={s.name}
          delay={i * 0.1}
          className={cn("group text-center", i === 2 && "sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:max-w-none")}
        >
          <div className="relative mx-auto aspect-square w-[78%] max-w-[320px]">
            <div aria-hidden className="absolute -inset-3 rounded-full border border-dashed border-ink/15 transition-colors duration-500 group-hover:border-ember/40" />
            <div className="h-full w-full overflow-hidden rounded-full bg-bone shadow-[0_30px_60px_-30px_rgba(20,17,15,0.45)]">
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <span className="absolute -right-1 top-3 grid h-16 w-16 place-items-center rounded-full bg-ink font-display text-[15px] text-cream shadow-lg sm:h-[72px] sm:w-[72px]">
              {price(s.price)}
            </span>
          </div>
          <p className="eyebrow mt-9 text-ember">{s.note}</p>
          <h3 className="mt-3 font-display text-[1.75rem] font-normal tracking-tight text-ink">{s.name}</h3>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{s.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="group flex items-start gap-5 py-6 sm:gap-6">
      <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-bone ring-1 ring-ink/5 sm:h-[88px] sm:w-[88px]">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="min-w-0 flex-1 pt-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-xl font-normal tracking-tight text-ink sm:text-[1.35rem]">{item.name}</h4>
          <span aria-hidden className="relative top-[-4px] hidden flex-1 border-b border-dotted border-ink/25 sm:block" />
          <span className="ml-auto shrink-0 font-display text-lg text-ember sm:ml-0">{price(item.price)}</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <Tag key={t} t={t} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

function FullMenu() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;
  const half = Math.ceil(current.items.length / 2);
  const cols = [current.items.slice(0, half), current.items.slice(half)];

  return (
    <div className="mt-28 lg:mt-36">
      <Reveal className="flex flex-col items-center text-center">
        <span className="eyebrow text-muted">À la carte</span>
        <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
          The full <em className="italic">spread</em>
        </h3>
      </Reveal>

      {/* Tabs */}
      <Reveal delay={0.05} className="mt-10">
        <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div role="tablist" className="mx-auto flex w-max gap-2 rounded-full border border-ink/10 bg-bone/60 p-1.5">
            {menu.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors duration-300 sm:px-5",
                    isActive ? "text-cream" : "text-ink/60 hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* List */}
      <div className="mx-auto mt-12 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid gap-x-16 md:grid-cols-2"
          >
            {cols.map((col, i) => (
              <ul key={i} className="divide-y divide-ink/10 border-t border-ink/10">
                {col.map((item) => (
                  <MenuRow key={item.name} item={item} />
                ))}
              </ul>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Reveal className="mt-14 flex flex-col items-center gap-5 text-center">
        <p className="max-w-md text-xs leading-relaxed text-muted">
          All meat is 100% halal. Please let our team know about any allergies or dietary needs —
          we're always happy to adapt.
        </p>
        <a
          href={site.phoneHref}
          className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3 text-[13px] font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
        >
          Order for takeaway
          <span className="text-ember transition-colors group-hover:text-saffron">→</span>
        </a>
      </Reveal>
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="relative scroll-mt-16 bg-cream py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <SectionHeading />
        <Signatures />
        <FullMenu />
      </div>
    </section>
  );
}
