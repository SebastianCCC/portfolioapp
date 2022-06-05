import { AboutIcon } from './images'
import { RiStarHalfLine } from 'react-icons/ri'
import Image from 'next/image'
import avatarImage from './/images/avatar.jpeg'
import AnimateTitles from '../../Animate/Titles'
import { motion } from 'framer-motion'

const About = ({ title, mail }) => {
  return (
    <section id="about" className="text-white p-4 w-full">
      <AnimateTitles>
        <span className="text-pink">
          <RiStarHalfLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <div className="flex justify-center items-center p-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="rounded-full border border-pink p-2"
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
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="max-w-prose pl-4 text-sm"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit ipsum, quidem
          commodi itaque asperiores dolores perferendis illo libero? Provident quasi unde
          consequatur molestiae repellat ratione eligendi ab consectetur quos?
        </motion.p>
      </div>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 0.4,
          duration: 1.5,
        }}
        className="text-center"
      >
        {mail}
      </motion.p>
    </section>
  )
}

export default About
