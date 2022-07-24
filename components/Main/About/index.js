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
      y: 50,
    },
  }

  return (
    <section id="about" className="text-black dark:text-white p-4 mt-40 w-full">
      <HeaderTitles title={title} />
      <div className="w-full">
        <div className="flex flex-col mt-4 md:flex-row-reverse justify-center items-start">
          <div className="relative select-none pointer-events-none w-full xl:w-4/5 h-[190px] xl:h-[357px]">
            <Image
              lazyBoundary="0px"
              layout="fill"
              objectFit="cover"
              src={avatarImage}
              alt={'A Photo of me'}
            />
          </div>
          <div className="w-full">
            <h3 className="uppercase text-base dark:text-tertiary mt-7 xl:mt-0 mb-3">
              Stuff about me
            </h3>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              className="mr-4 text-sm lg:p-0"
            >
              I&apos;ve always enjoyed creating stuff, and clearly remember all the drawings, I
              think one of them was a mickey mouse one. And at the age of thirteen I got my first
              computer and I remember it could do anything, and of course I had to play all the cool
              games.
              <>
                <motion.span
                  initial="closed"
                  animate={isShown ? 'open' : 'closed'}
                  variants={variants}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                  }}
                  className={`pt-2 md:block ${isShown ? 'block' : 'hidden'}`}
                >
                  But quickly realized I enjoyed the development aspect of games, and jumped to
                  developing plugins, extensions and addons for popular games like Minecraft, GTA V
                  and Counterstrike. A few months later Discord became a thing and just a year after
                  Discords initial release I joined and discovered robots. And the kid I was didn’t
                  expect the mind-blowing experience of interacting with an API on that scale.
                </motion.span>
                <motion.span
                  initial="closed"
                  animate={isShown ? 'open' : 'closed'}
                  variants={variants}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                  }}
                  className={`pt-2 md:block ${isShown ? 'block' : 'hidden'} -z-10`}
                >
                  A few years later I started doing game design and 3d in the more popular program
                  ZBrush, and realized the visual aspects of development was the thing for me. And
                  that&apos;s where my passion for Web dev started. During Corona I started an
                  education in front-end, and I can only say that has been one of my best decisions
                  ever. Meeting so many clever people was overwhelming but at the same time just
                  what I needed, and I knew this was it.
                </motion.span>
              </>
            </motion.p>
            <motion.div layout className="z-10 md:hidden">
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
                className="dark:text-tertiary text-white mt-2 rounded dark:hover:text-white hover:text-primary"
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
