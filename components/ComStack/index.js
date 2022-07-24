import { motion } from 'framer-motion'
import { IoLogoNodejs } from 'react-icons/io'
import { RiStackLine } from 'react-icons/ri'
import { SiTailwindcss, SiReact } from 'react-icons/si'
import { TbBrandNextjs, TbBrandFirebase } from 'react-icons/tb'
import { IoLogoElectron } from 'react-icons/io5'
import AnimateTitles from '../Animate/Titles'
import Tech from './Tech'

const ComStack = ({ title }) => {
  const stacks = [
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
      icon: <TbBrandFirebase />,
    },
    {
      name: 'Tailwindcss',
      icon: <SiTailwindcss />,
    },
    {
      name: 'NodeJs',
      icon: <IoLogoNodejs />,
    },
    {
      name: 'Electron',
      icon: <IoLogoElectron />,
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
    <section className="text-black dark:text-white w-full mt-6 p-4">
      <h2 className="uppercase text-base tracking-[2px] dark:text-tertiary">{title}</h2>
      <div className="w-full sm:w-1/2 overflow-hidden relative">
        <div className="w-full h-full dark:bg-gradient-d-r bg-gradient-light-r absolute z-20"></div>
        <motion.div
          variants={horizontalScroll}
          initial="hidden"
          animate="show"
          className="flex w-[200%]"
        >
          <Tech stack={stacks} />
          <Tech stack={stacks} />
        </motion.div>
      </div>
    </section>
  )
}

export default ComStack
