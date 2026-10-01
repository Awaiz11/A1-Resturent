import { cn } from "../utils/cn";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-3", className)} aria-label="A1 Restaurant — home">
      <span
        className={cn(
          "relative grid h-10 w-10 place-items-center rounded-full border transition-colors duration-500",
          light ? "border-cream/30 text-cream" : "border-ink/20 text-ink"
        )}
      >
        <span className="font-display text-[17px] font-medium leading-none tracking-tight">
          A<span className="text-ember">1</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-medium tracking-tight transition-colors duration-500",
            light ? "text-cream" : "text-ink"
          )}
        >
          A1 Restaurant
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] transition-colors duration-500",
            light ? "text-cream/50" : "text-muted"
          )}
        >
          Grill & Kitchen
        </span>
      </span>
    </a>
  );
}
