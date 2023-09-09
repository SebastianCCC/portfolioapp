import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiStarHalfLine } from 'react-icons/ri'
import HeaderTitles from '../../Animate/Titles'
import avatarImage from './/images/Sebastian.png'
import { MailIcon } from './images'
import { useState } from 'react'

const About = ({ title, mail }) => {
  const [isShown, setIsShown] = useState(false)

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : 50,
    },
  }

  return (
    <section id="about" className="text-black dark:text-sec_addition xl:p-4 mt-40 w-full">
      <HeaderTitles title={title} />
      <div className="w-full">
        <div className="flex flex-col mt-4 md:flex-row-reverse justify-center items-start">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 1.5,
              }}
              className="relative select-none pointer-events-none h-[357px]"
            >
              <Image
                sizes="100vw"
                fill
                src={avatarImage}
                alt={'A Photo of me'}
                className="object-cover rounded-md"
              />
            </motion.div>
          </div>
          <div className="w-full mr-10 lg:p-0 text-center sm:text-left">
            <h3 className="uppercase text-base dark:text-tertiary mt-7 md:mt-0 mb-3">Who am I?</h3>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 3,
              }}
              className="text-base lg:text-[18px] leading-loose"
            >
              I am Sebastian Christopher, I&apos;m the guy that gets excited over new tech, and the
              guy who enjoys every step of the way. I&apos;ve always enjoyed being creative, and at
              the age of thirteen I was lucky enough to get my first computer and before I knew it,
              I was hooked on developing.
              <>
                <motion.span
                  initial="closed"
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
                  initial="closed"
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
            <motion.div layout className="z-10 lg:hidden">
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
                className="dark:text-white mt-2 rounded"
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
