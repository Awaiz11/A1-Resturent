import { motion, type HTMLMotionProps } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/**
 * Minimal scroll reveal — fades in with a gentle 20px upward drift.
 * Runs once; respects reduced-motion via the root MotionConfig.
 */
export function Reveal({ delay = 0, y = 20, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
