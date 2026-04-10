/** Shared Framer Motion presets — keep animations subtle for performance. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = (delayChildren = 0.06) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delayChildren, delayChildren: 0.05 },
  },
});

export const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};
