/** Shared Framer Motion presets — keep animations subtle for performance. */

// Spring transition for bouncy, modern feel
const springTransition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, duration: 0.6 },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, duration: 0.6 },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springTransition, duration: 0.6 },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springTransition, duration: 0.6 },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition, duration: 0.6 },
  },
};

export const blurFadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = (delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delayChildren, delayChildren: 0.1 },
  },
});

export const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, duration: 0.5 },
  },
};

export const viewportOnce = {
  once: false, // Changed to false so elements re-animate when scrolling up and down
  amount: 0.15,
  margin: "0px 0px -10% 0px",
};
