import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import tinycolor from 'tinycolor2'
import AnimatePreviewCard from '../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../components/Animate/Titles'
import ComStack from '../components/ComStack'
import About from '../components/Main/About'
import PreviewCard from '../components/Work/PreviewCard'
import db from '../firebase'
import { callApplications } from '../hooks/react-server/apps/useApplication'
import { Firestore } from '../types/Firestore'
import { LightenDarkenColor } from '../utils/changeColorTint'
import { getColorFromImage } from '../utils/getColorFromImage'
import { getRandomInt } from '../utils/helper'
import { rgbToHex } from '../utils/rgbToHex'

type Schemas = Firestore['schemas']
type Work = Schemas['Work'][]

export async function getStaticProps() {
  const { apps } = await callApplications(db, 'work', 3)
  const randomInt = getRandomInt(apps.length)

  return {
    props: {
      work: apps,
      randomInt,
    },
    revalidate: 10,
  }
}

export default function Home({ work, randomInt }: { work: Work; randomInt: number }) {
  const [loaded, setLoaded] = useState(false)

  let ref = useRef(null)

  const ADJUST_BRIGHTNESS = 40

  const color = getColorFromImage(ref)
  const hexColor = rgbToHex(color?.[0], color?.[1], color?.[2])
  const tintetColor = LightenDarkenColor(
    hexColor,
    -tinycolor(hexColor).getBrightness() + ADJUST_BRIGHTNESS,
  )

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
    <div className='-m-4'>
      <section className='relative flex'>
        {loaded && (
          <div
            className='absolute h-[1000px] w-full opacity-10 dark:opacity-70 md:dark:opacity-100 lg:opacity-40'
            style={{
              backgroundImage: `radial-gradient(circle farthest-side, ${tintetColor} 5%, rgba(0,0,0,0) 95%)`,
            }}
          />
        )}
        <div className='mt-28 flex w-full justify-end xl:mt-14'>
          <div className='relative m-auto h-[300px] w-full overflow-hidden dark:drop-shadow-lg xSmall:h-[400px] sm:w-[95%] sm:rounded-md md:h-[600px] xl:m-0 xl:w-[85%] xl:rounded-l-md xl:rounded-r-none 2xl:m-auto 2xl:rounded-md'>
            <div className='relative z-10 grid h-full'>
              <div className='relative z-10 place-self-center'>
                <motion.h1
                  variants={containerTitle}
                  initial='hidden'
                  animate='show'
                  className='mb-2 text-center text-base font-bold tracking-[1px] text-white xSmall:text-md md:text-lg xl:mb-0'
                >
                  {namearr.map((letter, i) => (
                    <motion.span variants={item} key={i}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h2
                  variants={containerDesc}
                  initial='hidden'
                  animate='show'
                  className='m-auto w-[95%] text-center text-sm tracking-[1px] text-white xSmall:w-[90%] md:text-base'
                >
                  {descarr.map((letter, i) => (
                    <motion.span variants={item} key={i}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>
              <div className='absolute inset-0 bg-black/40' />
              <div className='absolute flex h-full w-full items-end sm:w-fit'>
                <div className='w-full rounded-r-md bg-projectview_dark/25 p-2 sm:mb-4 sm:w-fit'>
                  <h3 className='text-base tracking-[1px] text-white sm:text-sm'>
                    {work[randomInt].name}
                  </h3>
                </div>
              </div>
            </div>
            <Image
              ref={ref}
              fill
              src={work[randomInt].previewImage || ''}
              alt='featured project'
              className='object-cover'
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </section>
      <section id='projects' className='mx-4 my-11 pt-8 xl:p-4 2xl:my-44'>
        <HeaderTitles
          title='Latest Projects'
          description='Latest and greatest in the collection, so why not take a look?'
        />
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
      <div className='mx-4'>
        <About title='About Me' description='And who am I? And what am I doing in Paris??' />
        <ComStack title='Tech i enjoy' />
      </div>
    </div>
  )
}
