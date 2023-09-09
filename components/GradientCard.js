import classNames from 'classnames'
import { motion } from 'framer-motion'

export default function GradientCard({ children, to = 'right', animateOnce }) {
  const bgGradient = classNames(
    to === 'right' && 'bg-gradient-to-r',
    to === 'bottom' && 'bg-gradient-to-b',
    to === 'left' && 'bg-gradient-to-t sm:bg-gradient-to-l',
    to === 'top' && 'bg-gradient-to-t'
  )

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: animateOnce }}
      className={`${bgGradient} from-secondary/70 dark:from-white/10 rounded-md mt-4 p-[1px]`}
    >
      <div
        className={`${bgGradient} from-projectview to-white dark:from-projectview_dark dark:to-additional rounded-md`}
      >
        {children}
      </div>
    </motion.div>
  )
}
