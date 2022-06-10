import { motion } from 'framer-motion'
import { IoLogoNodejs } from 'react-icons/io'
import { RiStackLine } from 'react-icons/ri'
import { SiTailwindcss, SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoElectron } from 'react-icons/io5'
import AnimateTitles from '../Animate/Titles'

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
  const container = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.2,
        duration: 1,
        staggerChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { y: 200 },
    show: { y: 0 },
  }
  return (
    <section className="text-black dark:text-white text-center p-4 w-full">
      <AnimateTitles>
        <span className="text-pink">
          <RiStackLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-evenly w-full m-auto p-4 overflow-y-hidden lg:w-1/2"
      >
        {stacks.map(({ name, icon }, i) => (
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center p-2"
            key={i}
          >
            <div className="text-3xl">{icon}</div>
            <p>{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ComStack
