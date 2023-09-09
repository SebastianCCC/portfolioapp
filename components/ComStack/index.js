import { motion } from 'framer-motion'
import { SiFirebase, SiLinear, SiReact, SiTailwindcss, SiWarp } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Tech from './Tech'

const ComStack = ({ title }) => {
  const stack = [
    {
      name: 'React',
      icon: <SiReact />,
    },
    {
      name: 'NextJs',
      icon: <TbBrandNextjs />,
    },
    {
      name: 'Firebase',
      icon: <SiFirebase />,
    },
    {
      name: 'Linear',
      icon: <SiLinear />,
    },
    {
      name: 'Warp',
      icon: <SiWarp />,
    },
    {
      name: 'Tailwindcss',
      icon: <SiTailwindcss />,
    },
  ]

  const horizontalScroll = {
    hidden: { x: '0' },
    show: {
      x: '-50%',
      transition: {
        x: {
          ease: 'linear',
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
        },
      },
    },
  }

  return (
    <section className="text-black dark:text-white w-full mt-6 lg:py-6 xl:p-4 relative">
      <h2 className="uppercase text-base tracking-[2px] dark:text-tertiary">{title}</h2>
      <div className="w-full sm:w-1/2 overflow-hidden absolute">
        <div className="w-full h-full dark:bg-gradient-d-r bg-gradient-light-r absolute z-20"></div>
        <motion.div
          variants={horizontalScroll}
          initial="hidden"
          animate="show"
          className="flex w-[200%]"
        >
          <Tech stack={stack} />
          <Tech stack={stack} />
        </motion.div>
      </div>
    </section>
  )
}

export default ComStack
