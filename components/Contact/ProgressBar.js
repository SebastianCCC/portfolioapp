import { LogoRocket } from '../../assets'
import { motion } from 'framer-motion'

export default function ProgressBar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className="fixed top-0 left-0 bg-sec_addition dark:bg-additional w-full h-full z-30"
      />
      <div className="fixed w-[300px] sm:w-[350px] h-full left-0 right-0 top-1/2 mx-auto z-40">
        <div className="flex justify-center p-4">
          <LogoRocket />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-3 bg-secondary dark:bg-tertiary rounded-xl overflow-hidden"
        >
          <motion.div
            initial={{ width: '5%' }}
            animate={{ width: '100%' }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="h-full bg-projectview_dark dark:bg-white"
          />
        </motion.div>
      </div>
    </>
  )
}
