// Premium luxury animation variants — slow, elegant, smooth

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const floatingAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.04, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -25, transition: { duration: 0.4 } },
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.4 } },
  whileTap: { scale: 0.97 },
};

export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 4px 30px rgba(0,0,0,0.06)" },
  hover: { scale: 1.02, y: -10, boxShadow: "0 24px 50px rgba(0,0,0,0.12)", transition: { duration: 0.4, ease: "easeOut" } },
};

export const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } },
};

export const navAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const mobileMenuAnimation = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
};

export const modalAnimation = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.92, y: 20, transition: { duration: 0.3 } },
};

export const overlayAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
