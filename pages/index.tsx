import Image from 'next/image'
import { useRef, useState } from 'react'
import AnimatePreviewCard from '../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../components/Animate/Titles'
import ComStack from '../components/ComStack'
import About from '../components/Main/About'
import PreviewCard from '../components/Work/PreviewCard'
import db from '../firebase'
import { callApplications } from '../hooks/react-server/apps/useApplication'
import { Firestore } from '../types/Firestore'
import { getProjectColorMatch } from '../utils/getProjectColorMatch'
import { getRandomInt } from '../utils/helper'

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
    revalidate: 30,
  }
}

export default function Home({ work, randomInt }: { work: Work; randomInt: number }) {
  const [loaded, setLoaded] = useState(false)

  let ref = useRef<HTMLImageElement>(null)
  const ADJUST_BRIGHTNESS = 40
  const ColorMatch = getProjectColorMatch(ref, ADJUST_BRIGHTNESS)

  return (
    <div className='-m-4'>
      <section className='relative flex'>
        {loaded && (
          <div
            className='absolute h-[1000px] w-full opacity-10 dark:opacity-70 md:dark:opacity-100 lg:opacity-40'
            style={{
              backgroundImage: `radial-gradient(circle farthest-side, ${ColorMatch} 5%, rgba(0,0,0,0) 95%)`,
            }}
          />
        )}
        <div className='mt-28 flex w-full justify-end xl:mt-14'>
          <div className='relative m-auto h-[300px] w-[95%] overflow-hidden rounded-md dark:drop-shadow-lg xSmall:h-[400px] md:h-[600px] xl:m-0 xl:w-[85%] xl:rounded-l-md xl:rounded-r-none 2xl:m-auto 2xl:rounded-md'>
            <div className='relative z-10 grid h-full'>
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
      <section id='projects' className='mx-4 my-11 pt-8 xl:p-4'>
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
