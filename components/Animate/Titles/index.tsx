import { motion } from 'framer-motion'

type HeaderTitlesProps = {
  title: string
  description?: string
}

const HeaderTitles = ({ title, description }: HeaderTitlesProps) => {
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
      className='my-10 text-center'
    >
      <h2 className='m-auto mb-2 max-w-screen-xSmall text-md tracking-[1px]'>{title}</h2>
      <p className='m-auto max-w-screen-md text-sm tracking-[2px] opacity-80'>{description}</p>
    </motion.header>
  )
}

export default HeaderTitles
