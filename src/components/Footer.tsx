import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { site } from "../data/site";

function ColTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="eyebrow text-saffron">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div className="container-x relative z-10 pt-20 sm:pt-28">
        <Reveal className="grid gap-14 border-b border-cream/10 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              Charcoal grill, slow-cooked curries and dum biryani. 100% halal, cooked fresh every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cream/15 px-4 py-2 text-xs font-medium text-cream/70 transition-colors duration-300 hover:border-saffron hover:text-saffron"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <ColTitle>Find us</ColTitle>
            <address className="mt-5 not-italic leading-relaxed text-cream/80">
              {site.address.map((line, i) => (
                <span key={line} className={i === site.address.length - 1 ? "mt-1 block text-sm text-cream/45" : "block"}>
                  {line}
                </span>
              ))}
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream underline decoration-cream/25 underline-offset-[6px] transition-colors hover:decoration-saffron"
            >
              Open in Maps <span className="text-saffron">↗</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <ColTitle>Hours</ColTitle>
            <ul className="mt-5 space-y-3 text-sm">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-cream/45">{h.days}</span>
                  <span className="text-cream/85">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <ColTitle>Contact</ColTitle>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="text-cream/85 transition-colors hover:text-saffron">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all text-cream/85 transition-colors hover:text-saffron">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-cream/45">Dine-in · Takeaway · Delivery</li>
            </ul>
          </div>
        </Reveal>

        {/* oversized wordmark */}
        <div aria-hidden className="select-none overflow-hidden pt-10">
          <p className="whitespace-nowrap text-center font-display text-[clamp(2.75rem,11.5vw,10.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-cream/[0.06]">
            A<em className="italic text-ember/30">1</em> Restaurant
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-cream/40 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <a href="#top" className="transition-colors hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
