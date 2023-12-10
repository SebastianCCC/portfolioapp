import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { motion } from 'framer-motion'
import AnimatePreviewCard from '../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../components/Animate/Titles'
import ComStack from '../components/ComStack'
import GradientCard from '../components/GradientCard'
import About from '../components/Main/About'
import PreviewCard from '../components/Work/PreviewCard'
import db from '../firebase'

export async function getStaticProps() {
  const collectionRef = collection(db, 'work')
  const q = query(collectionRef, orderBy('id', 'desc'), limit(3))

  const workDocs = await getDocs(q)
  const work = []

  const readMoreCard = {
    name: 'Read more',
    role: 'View all of my projects',
    dId: 'readmore',
  }

  work.push(readMoreCard)

  workDocs.forEach((doc) => {
    work.push({ dId: doc.id, ...doc.data() })
  })

  return {
    props: {
      work: JSON.parse(JSON.stringify(work)),
    },
    revalidate: 10,
  }
}

export default function Home({ work }) {
  const name = 'Software engineer with a passion.'
  const desc =
    "Hi, i'm Sebastian Christopher, a full time frontend developer that always gives it 100%"
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
        <section className="mt-32 xl:mt-56 xl:p-4">
          <motion.h1
            variants={containerTitle}
            initial="hidden"
            animate="show"
            className="text-lg md:text-2xl font-bold"
          >
            {namearr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <GradientCard styles="mt-4">
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
          </GradientCard>
        </section>
      </div>
      <section id="projects" className="my-28 pt-8 xl:p-4 2xl:my-44">
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
        </motion.div>
        <div className="sm:-mx-4 sm:pl-4 lg:m-0 lg:p-0 sm:overflow-y-hidden lg:overflow-visible">
          <AnimatePreviewCard>
            {work.map(({ name, role, previewImage, dId, endDate }, i) => (
              <PreviewCard
                name={name}
                role={role}
                img={previewImage}
                id={dId}
                increaseDelay={i}
                key={i}
                href="work"
                endDate={endDate}
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
