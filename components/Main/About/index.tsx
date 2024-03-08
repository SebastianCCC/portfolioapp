import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import getWindowSize from '../../../utils/getWindowSize'
import HeaderTitles from '../../Animate/Titles'
import avatarImage from './/images/Sebastian.png'

type AboutProps = {
  title: string
}

const About = ({ title }: AboutProps) => {
  const [isShown, setIsShown] = useState(false)
  const { width } = getWindowSize()

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      y: width ?? 0 >= 1024 ? 0 : 50,
    },
  }

  return (
    <section id='about' className='mt-40 w-full text-black dark:text-sec_addition xl:p-4'>
      <HeaderTitles title={title} />
      <div className='relative w-full'>
        <div className='grain sm:left-[-150px]' />
        <div className='mt-4 flex flex-col items-start justify-center md:flex-row-reverse'>
          <div className='w-full md:w-3/4 lg:w-1/2'>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 1.5,
              }}
              className='pointer-events-none relative h-[357px] select-none'
            >
              <Image
                sizes='100vw'
                fill
                src={avatarImage}
                alt={'A Photo of me'}
                className='rounded-md object-cover'
              />
            </motion.div>
          </div>
          <div className='mr-10 w-full text-center sm:text-left lg:p-0'>
            <h3 className='mb-3 mt-7 text-base uppercase dark:text-tertiary md:mt-0'>Who am I?</h3>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 3,
              }}
              className='text-base leading-loose 2xl:text-[18px]'
            >
              I am Sebastian Christopher, I&apos;m the guy that gets excited over new tech, and the
              guy who enjoys every step of the way. I&apos;ve always enjoyed being creative, and at
              the age of thirteen I was lucky enough to get my first computer and before I knew it,
              I was hooked on developing.
              <>
                <motion.span
                  initial='closed'
                  animate={isShown ? 'open' : 'closed'}
                  variants={variants}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                  }}
                  className={`pt-2 lg:block ${isShown ? 'block' : 'hidden'}`}
                >
                  And quickly began to enjoy the development aspect of games, and jumped to
                  developing plugins, extensions and addons for popular games. A few years later I
                  started designing games and 3d in programs like ZBrush, and realized the visual
                  aspects of development was my passion. And that&apos;s where my passion for Web
                  development started.
                </motion.span>
                <motion.span
                  initial='closed'
                  animate={isShown ? 'open' : 'closed'}
                  variants={variants}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                  }}
                  className={`pt-2 lg:block ${isShown ? 'block' : 'hidden'} -z-10`}
                >
                  During Corona I started an education in front-end, and I can only say is has been
                  one of my best decisions ever. Meeting so many clever people was overwhelming but
                  at the same time just what I needed, and I knew this was it.
                </motion.span>
              </>
            </motion.p>
            <motion.div layout className='z-10 lg:hidden'>
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  delay: 0.8,
                  duration: 1.5,
                }}
                onClick={() => setIsShown(!isShown)}
                className='mt-2 rounded dark:text-white'
              >
                {isShown ? 'Read Less' : 'Read More'}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
