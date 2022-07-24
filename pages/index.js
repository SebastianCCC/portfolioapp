import { motion } from 'framer-motion'
import ComStack from '../components/ComStack'
import About from '../components/Main/About'
import { BackHeroIcon } from '../components/Main/Hero/Background'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from '../assets'

export default function Home() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const name = 'Software engineer with a passion.'
  const desc = 'I’m a full time Front-end developer that always gives it 100%'
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
      <div className="flex flex-col relative overflow-hidden">
        <section className="mt-20 mx-6">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-lg xl:text-2xl xl:font-bold"
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
            className="text-base py-6"
          >
            {descarr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <div>
            <Link href="/#projects">
              <div className="flex dark:text-tertiary">
                <p>Projects in close vicinity</p>
                <div className="-rotate-45">
                  <ExternalLink />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <About title="About Me" mail="Contact Me" />
      <ComStack title="Tech i enjoy" />
    </>
  )
}
