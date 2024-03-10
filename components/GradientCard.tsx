import classNames from 'classnames'
import { motion } from 'framer-motion'
import { checkBrowser } from '../utils/userAgent'

type GradientCardProps = {
  children: React.ReactNode
  to?: 'right' | 'bottom' | 'left' | 'top-to-left' | 'top'
  animateOnce?: boolean
  styles?: string
}

export default function GradientCard({
  children,
  to = 'right',
  animateOnce = false,
  styles,
}: GradientCardProps) {
  const bgGradient = classNames(
    to === 'right' && 'bg-gradient-to-r',
    to === 'bottom' && 'bg-gradient-to-b',
    to === 'left' && 'bg-gradient-to-l',
    to === 'top-to-left' && 'bg-gradient-to-t sm:bg-gradient-to-l',
    to === 'top' && 'bg-gradient-to-t',
  )

  return (
    <div className={styles}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: animateOnce }}
        className={
          checkBrowser() === 'firefox'
            ? 'rounded-md border border-secondary/70 dark:border-tertiary/25'
            : `${bgGradient} rounded-md from-secondary/70 p-[1px] dark:from-white/10`
        }
      >
        <div
          className={
            checkBrowser() === 'firefox'
              ? 'rounded-md bg-projectview dark:bg-[#151515]/50'
              : `${bgGradient} rounded-md from-projectview to-white dark:from-projectview_dark dark:to-additional`
          }
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}
