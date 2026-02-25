import type { Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const inViewOnce = { once: true, amount: 0.2 } as const;

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const fadeInSoft: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

export const mediaReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: smoothEase },
  },
};

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

export const statNumberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
