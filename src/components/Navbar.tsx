import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { EASE } from "./Reveal";
import { cn } from "../utils/cn";
import { site } from "../data/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
        scrolled && !open
          ? "bg-cream/85 py-3 shadow-[0_1px_0_rgba(20,17,15,0.08)] backdrop-blur-xl"
          : "py-5",
        open && "bg-cream"
      )}
    >
      <nav className="container-x flex items-center justify-between">
        <Logo light={light} />

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative text-[13px] font-medium tracking-wide transition-colors duration-300",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                  light ? "text-cream/80 hover:text-cream" : "text-ink/70 hover:text-ink"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 sm:inline-flex",
              light
                ? "bg-cream text-ink hover:bg-saffron"
                : "bg-ink text-cream hover:bg-ember"
            )}
          >
            Book a table
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "relative grid h-10 w-10 place-items-center rounded-full border transition-colors md:hidden",
              light ? "border-cream/25 text-cream" : "border-ink/15 text-ink"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-[72px] bg-cream md:hidden"
          >
            <div className="container-x flex h-full flex-col justify-between pb-10 pt-8">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-ink/10 py-5"
                    >
                      <span className="font-display text-4xl font-light tracking-tight text-ink">
                        {l.label}
                      </span>
                      <span className="text-xs text-muted">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-4">
                <a
                  href={site.phoneHref}
                  className="flex w-full items-center justify-center rounded-full bg-ink py-4 text-sm font-semibold text-cream"
                >
                  Book a table · {site.phone}
                </a>
                <p className="text-center text-xs text-muted">100% Halal · Dine-in · Takeaway · Delivery</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
