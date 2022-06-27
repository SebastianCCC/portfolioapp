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
      <div className="flex flex-col items-center min-h-screen relative">
        <section className="text-primary dark:text-white m-auto w-4/5 md:w-1/2 border-b border-secondary p-4 z-[15]">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
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
            className="text-sm lg:text-lg font-light pt-6"
          >
            {descarr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </section>
        <div className="absolute sm:right-[21%] md:right-1/4 top-[10%] sm:top-[7%] md:top-[22%] lg:top-[15%] z-0">
          {mounted && <BackHeroIcon fillRef={theme} />}
        </div>
        <ComStack title="Preferred Stack" />
      </div>
      <About title="About Me" mail="offcccor@gmail.com" />
    </>
  )
}
