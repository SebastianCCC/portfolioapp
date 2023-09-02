import { motion } from 'framer-motion'

const HeaderTitles = ({ title }) => {
  return (
    <motion.header
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        delay: 0.2,
        duration: 1,
      }}
      className="flex items-center text-base tracking-[2px] dark:text-tertiary"
    >
      <h2 className="uppercase pr-2 flex-shrink-0">{title}</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{
          type: 'spring',
          delay: 0.7,
          duration: 2.5,
        }}
        className="dark:bg-tertiary bg-additional h-[1px]"
      />
    </motion.header>
  )
}

export default HeaderTitles
