import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiStarHalfLine } from 'react-icons/ri'
import AnimateTitles from '../../Animate/Titles'
import avatarImage from './/images/avatar.jpeg'
import { MailIcon } from './images'

const About = ({ title, mail }) => {
  return (
    <section id="about" className="text-black dark:text-white p-4 mt-40 w-full overflow-y-hidden">
      <AnimateTitles>
        <span className="text-secondary">
          <RiStarHalfLine />
        </span>
        <h2 className="capitalize pl-2">{title}</h2>
      </AnimateTitles>
      <div className="flex flex-col lg:flex-row justify-center items-center">
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
          <Link href="/contact">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
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
      </div>
    </section>
  )
}

export default About
