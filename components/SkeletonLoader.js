import { motion } from 'framer-motion'
import { LogoIconDark } from './Header/images'

function SkeletonLoader({ loaded, animation, children }) {
  return (
    <>
      {!loaded && (
        <motion.div
          className="max-w-full"
          initial={animation.hidden}
          whileInView={animation.show}
          viewport={{ once: true }}
        >
          <motion.div
            variants={animation}
            className="bg-secondary dark:bg-sec_tertiary w-full h-[200px] xl:h-[300px] rounded-md absolute z-10"
          >
            <div className="w-4/5 h-4 bg-white dark:bg-additional absolute bottom-5 z-10 rounded-md mx-4" />
            <div className="w-3/5 h-4 bg-white dark:bg-additional absolute bottom-14 z-10 rounded-md mx-4" />
          </motion.div>
        </motion.div>
      )}
      {children}
    </>
  )
}

export default SkeletonLoader
