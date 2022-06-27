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
    <section className="text-black dark:text-white text-center w-full">
      <AnimateTitles>
        <span className="text-secondary">
          <RiStackLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <div className="w-full sm:w-1/2 m-auto overflow-hidden relative">
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
