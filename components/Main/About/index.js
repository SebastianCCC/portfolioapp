import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiStarHalfLine } from 'react-icons/ri'
import AnimateTitles from '../../Animate/Titles'
import avatarImage from './/images/Sebastian.png'
import { MailIcon } from './images'
import { useState } from 'react'

const About = ({ title, mail }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <section id="about" className="text-black dark:text-white p-4 mt-40 w-full overflow-y-hidden">
      <AnimateTitles>
        <span className="text-secondary">
          <RiStarHalfLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <div
        className={`flex flex-col lg:flex-row justify-center items-center ${
          isShown && 'xl:items-start'
        }`}
      >
        <div className="flex flex-col">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="rounded-full border border-secondary p-2 w-fit"
          >
            <div className="relative select-none pointer-events-none rounded-full overflow-hidden w-[150px] h-[150px]">
              <Image
                lazyBoundary="0px"
                layout="fill"
                src={avatarImage}
                alt={'A Photo of me'}
                className="object-cover w-full absolute"
              />
            </div>
          </motion.div>
          <Link href="/contact">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.8,
                duration: 1.5,
              }}
              className="group flex pt-2 justify-center items-center cursor-pointer"
            >
              <div className="text-secondary">
                <MailIcon />
              </div>
              <p className="group-hover:text-primary pl-2 font-bold">{mail}</p>
            </motion.div>
          </Link>
        </div>
        <div className="flex flex-col lg:pl-4 items-start">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="max-w-prose text-sm pt-2 lg:p-0"
          >
            I've always enjoyed creating stuff, and clearly remember all the drawings, I think one
            of them was a mickey mouse one. And at the age of thirteen I got my first computer and I
            remember it could do anything, and of course I had to play all the cool games.
            {isShown && (
              <>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                  }}
                  className={`pt-2 block`}
                >
                  But quickly realized I enjoyed the development aspect of games, and jumped to
                  developing plugins, extensions and addons for popular games like Minecraft, GTA V
                  and Counterstrike. A few months later Discord became a thing and just a year after
                  Discords initial release I joined and discovered robots. And the kid I was didn’t
                  expect the mind-blowing experience of interacting with an API on that scale.
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                  }}
                  className={`pt-2 block -z-10`}
                >
                  A few years later I started doing game design and 3d in the more popular program
                  ZBrush, and realized the visual aspects of development was the thing for me. And
                  that's where my passion for Web dev started. During Corona I started an education
                  in front-end, and I can only say that has been one of my best decisions ever.
                  Meeting so many clever people was overwhelming but at the same time just what I
                  needed, and I knew this was it.
                </motion.span>
              </>
            )}
          </motion.p>
          <motion.div layout className="z-10">
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
              className="dark:text-tertiary text-white dark:bg-primary bg-tertiary mt-2 p-2 rounded dark:hover:text-white hover:text-primary"
            >
              {isShown ? 'Read Less' : 'Read More'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
