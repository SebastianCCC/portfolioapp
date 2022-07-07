import { motion } from 'framer-motion'
import ComStack from '../components/ComStack'
import About from '../components/Main/About'
import { BackHeroIcon } from '../components/Main/Hero/Background'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Home() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    <>
      <div className="flex justify-center items-center pt-20">
        {mounted && <BackHeroIcon fillRef={theme} />}
        <div className="pl-2 dark:text-white text-primary">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 1,
            }}
            className="text-3xl font-medium"
          >
            Portfolio
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.7,
              duration: 1,
            }}
          >
            Seechris
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen relative overflow-hidden">
        <section className="text-primary dark:text-white m-auto w-4/5 md:w-1/2 border-b border-secondary pb-4 z-[15]">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-center font-bold"
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
            className="text-sm lg:text-lg pt-6 font-bold xl:text-center"
          >
            {descarr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </section>
        <ComStack title="Preferred Stack" />
      </div>
      <About title="About Me" mail="Contact Me" />
    </>
  )
}
