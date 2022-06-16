import { motion } from 'framer-motion'
import Image from 'next/image'
import { RiStarHalfLine } from 'react-icons/ri'
import AnimateTitles from '../../Animate/Titles'
import avatarImage from './/images/avatar.jpeg'
import { MailIcon } from './images'

const About = ({ title, mail }) => {
  return (
    <section id="about" className="text-black dark:text-white p-4 mt-20 w-full overflow-y-hidden">
      <AnimateTitles>
        <span className="text-pink">
          <RiStarHalfLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <div className="flex flex-col lg:flex-row justify-center items-center p-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="rounded-full border border-pink p-2 w-fit"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit ipsum, quidem
            commodi itaque asperiores dolores perferendis illo libero? Provident quasi unde
            consequatur molestiae repellat ratione eligendi ab consectetur quos?
          </motion.p>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.8,
              duration: 1.5,
            }}
            className="flex pt-2 justify-center items-center"
          >
            <div className="text-pink">
              <MailIcon />
            </div>
            <p className="pl-2">{mail}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
