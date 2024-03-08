import { motion } from 'framer-motion'
import AnimatePreviewCard from '../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../components/Animate/Titles'
import ComStack from '../components/ComStack'
import GradientCard from '../components/GradientCard'
import About from '../components/Main/About'
import PreviewCard from '../components/Work/PreviewCard'
import db from '../firebase'
import { callApplications } from '../hooks/serverHooks/apps/useApplication'
import { Firestore } from '../types/Firestore'

type Schemas = Firestore['schemas']
type Work = Schemas['Work'][]

export async function getStaticProps() {
  const { apps } = await callApplications(db, 'work', 3)

  return {
    props: {
      work: apps,
    },
    revalidate: 10,
  }
}

export default function Home({ work }: { work: Work }) {
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
      <div className='relative flex flex-col overflow-hidden'>
        <section className='mt-32 xl:mt-56 xl:p-4'>
          <motion.h1
            variants={containerTitle}
            initial='hidden'
            animate='show'
            className='text-lg font-bold md:text-2xl'
          >
            {namearr.map((letter, i) => (
              <motion.span variants={item} key={i}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <GradientCard styles='mt-4'>
            <motion.h2
              variants={containerDesc}
              initial='hidden'
              animate='show'
              className='p-5 text-base dark:text-sec_addition xl:text-[17px]'
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
      <section id='projects' className='my-28 pt-8 xl:p-4 2xl:my-44'>
        <HeaderTitles title='Projects' />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 2,
          }}
          className='flex flex-col items-start justify-between xl:flex-row xl:items-center'
        >
          <p className='mb-2 mt-4 xl:text-[17px]'>
            Latest and greatest in the collection, why not take a look?
          </p>
        </motion.div>
        <div className='no-scrollbar -mx-4 overflow-y-hidden pl-4 lg:m-0 lg:overflow-visible lg:p-0'>
          <AnimatePreviewCard>
            {work.map(({ name, role, previewImage, isgroup, dId, endDate }) => (
              <PreviewCard
                key={dId}
                name={name}
                role={role}
                img={previewImage}
                groupProject={isgroup}
                id={dId}
                href='work'
                endDate={endDate ? endDate.seconds * 1000 : null}
              />
            ))}
          </AnimatePreviewCard>
        </div>
      </section>
      <About title='About Me' />
      <ComStack title='Tech i enjoy' />
    </>
  )
}
