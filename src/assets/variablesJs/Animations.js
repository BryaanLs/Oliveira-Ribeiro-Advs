export const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.6 } },
  hidden: {
    opacity: 0,
  },
};

export const fromRightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hidden: { opacity: 0, x: 100 },
};
export const fromLeftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hidden: { opacity: 0, x: -100 },
};

export const scaleVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const fromBottomVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hidden: { opacity: 0, y: 100 },
};

export const fromBottomWithBlurVariant = {
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)", // No final da animação, o desfoque é removido
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    filter: "blur(10px)", // Desfoque forte no início da animação
  },
};
