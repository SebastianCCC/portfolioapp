export const animation = () => {
  const container = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.2,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.7,
      },
    },
  }

  const item = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return { container, item }
}
