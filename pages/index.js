import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import { motion } from 'framer-motion'
import ComStack from '../components/ComStack'
import About from '../components/Main/About'
import { BackHeroIcon } from '../components/Main/Hero/Background'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from '../assets'
import HeaderTitles from '../components/Animate/Titles'
import PreviewCard from '../components/Work/PreviewCard'

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, 'work'))
  const work = []

  querySnapshot.forEach((doc) => {
    work.push({ id: doc.id, ...doc.data() })
  })

  return {
    props: {
      work,
    },
    revalidate: 10,
  }
}

export default function Home({ work }) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const name = 'Software engineer with a passion.'
  const desc =
    "Hi, i'm Sebastian Christopther, a full time Front-end developer that always gives it 100%"
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
        <section className="mt-40 xl:mt-80 xl:p-4">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-lg md:text-2xl xl:text-3xl xl:font-bold"
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
            className="text-base xl:text-md py-6"
          >
            {descarr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.8,
              duration: 2,
            }}
          >
            <Link href="/#projects">
              <div className="flex dark:text-tertiary cursor-pointer">
                <p className="mr-1">Projects in close vicinity</p>
                <div className="-rotate-45">
                  <ExternalLink />
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      </div>
      <section id="projects" className="my-80 pt-8 xl:p-4">
        <HeaderTitles title="Projects" />
        <p className="mt-4 mb-2">
          Here you will find a list of my projects in detail, click any project to view it.
        </p>
        <Link href="/work">
          <button className="dark:text-tertiary">View all projects</button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full py-4">
          {work.map(
            ({ name, role, previewImage, id }, i) =>
              i <= 2 && <PreviewCard key={i} name={name} role={role} img={previewImage} id={id} />
          )}
        </div>
      </section>
      <About title="About Me" mail="Contact Me" />
      <ComStack title="Tech i enjoy" />
    </>
  )
}
