import { motion } from 'framer-motion'

const AnimateTitles = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        delay: 0.2,
        duration: 1,
      }}
      className="flex justify-center text-2xl items-center p-4 font-bold"
    >
      {children}
    </motion.div>
  )
}

export default AnimateTitles
