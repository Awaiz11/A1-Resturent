import { Reveal } from "./Reveal";
import { site } from "../data/site";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-16 bg-cream py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-bone px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          {/* decorative rings */}
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-ink/[0.07]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-ember/15" />

          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              <span className="eyebrow text-ember">03</span>
              <span className="h-px w-8 bg-ink/20" />
              <span className="eyebrow text-muted">Visit us</span>
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink">
              The grill is lit. <em className="italic text-ember">Pull up a chair.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Walk-ins always welcome. For groups and celebrations, give us a call and we'll have your
              table ready.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ember sm:w-auto"
              >
                Call {site.phone}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink sm:w-auto"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.9 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Get directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
