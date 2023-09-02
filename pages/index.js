import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
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
import { Sendicon } from '../assets'
import AnimatePreviewCard from '../components/Animate/AnimatePreviewCard'

export async function getStaticProps() {
  const collectionRef = collection(db, 'work')
  const q = await query(collectionRef, orderBy('id', 'desc'), limit(3))

  const workDocs = await getDocs(q)
  const work = []

  workDocs.forEach((doc) => {
    work.push({ dId: doc.id, ...doc.data() })
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
    "Hi, i'm Sebastian Christopther, a full time frontend developer that always gives it 100%"
  const namearr = [...name]
  const descarr = [...desc]
  const containerTitle = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const containerDesc = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        <section className="mt-40 xl:mt-72 xl:p-4">
          <motion.h1
            variants={containerTitle}
            initial="hidden"
            animate="show"
            className="text-lg md:text-2xl xl:text-3xl font-bold"
          >
            {namearr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-secondary/70 dark:from-white/10 rounded-md mt-4 p-[1px]"
          >
            <div className="bg-gradient-to-r from-projectview to-white dark:from-projectview_dark dark:to-additional rounded-md">
              <motion.h2
                variants={containerDesc}
                initial="hidden"
                animate="show"
                className="dark:text-sec_addition text-base xl:text-[17px] p-5"
              >
                {descarr.map((letter, i) => (
                  <motion.span variants={item} key={i}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-fit"
          >
            <Link href="/#projects">
              <div className="flex items-center mt-[30px] dark:text-sec_addition hover:underline underline-offset-2 cursor-pointer">
                <p className="text-md mr-1">Projects in close vicinity</p>
                <div className="dark:text-tertiary -rotate-45">
                  <ExternalLink />
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      </div>
      <section id="projects" className="my-80 pt-8 xl:p-4 2xl:my-96">
        <HeaderTitles title="Projects" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 2,
          }}
          className="flex flex-col xl:flex-row justify-between items-start xl:items-center"
        >
          <p className="xl:text-md mt-4 mb-2">
            Here you will find a list of my projects in detail, click any project to view it.
          </p>
          <Link href="/work">
            <div className="flex items-center dark:text-sec_addition hover:underline underline-offset-2 cursor-pointer">
              <button className="xl:text-md capitalize mr-1">View all projects</button>
              <div className="dark:text-tertiary -rotate-45">
                <Sendicon />
              </div>
            </div>
          </Link>
        </motion.div>
        <div className="-mx-4 pl-4 overflow-y-hidden lg:overflow-visible">
          <AnimatePreviewCard>
            {work.map(({ name, role, previewImage, dId }, i) => (
              <PreviewCard
                name={name}
                role={role}
                img={previewImage}
                id={dId}
                increaseDelay={i}
                key={i}
                href={'work/apps'}
              />
            ))}
          </AnimatePreviewCard>
        </div>
      </section>
      <About title="About Me" mail="Contact Me" />
      <ComStack title="Tech i enjoy" />
    </>
  )
}
