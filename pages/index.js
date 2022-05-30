import { motion } from 'framer-motion'
import HeroImage from '../components/Main/hero/background'

export default function Home() {
  const name = "Hi, I'm Sebastian Christopher"
  const desc = 'A passionate full time Web Developer.'
  const namearr = [...name]
  const descarr = [...desc]
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <div className="flex items-center min-h-screen relative">
      <section className="text-white m-auto w-1/2 border-b border-pink p-4 z-[15]">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl lg:text-7xl"
        >
          {namearr.map((letter, i) => (
            <motion.span variants={item} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          variants={container}
          initial="hidden"
          animate="show"
          className="text-lg font-light pt-6"
        >
          {descarr.map((letter, i) => (
            <motion.span variants={item} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </section>
      <HeroImage />
    </div>
  )
}
