import { motion } from 'framer-motion'

type HeaderTitlesProps = {
  title: string
}

const HeaderTitles = ({ title }: HeaderTitlesProps) => {
  return (
    <motion.header
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
      }}
      className='flex items-center text-base tracking-[2px] dark:text-tertiary'
    >
      <h2 className='flex-shrink-0 pr-2 uppercase'>{title}</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 1,
          duration: 3,
        }}
        className='h-[1px] bg-additional dark:bg-tertiary'
      />
    </motion.header>
  )
}

export default HeaderTitles
