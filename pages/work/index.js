import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'
import { motion } from 'framer-motion'
import { AiOutlineAppstore } from 'react-icons/ai'
import AnimateTitles from '../../components/Animate/Titles'
import Link from 'next/link'

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, 'work'))
  const work = []

  querySnapshot.forEach((doc) => {
    work.push({ id: doc.id, ...doc.data() })
  })

  return {
    props: {
      work,
    },
    revalidate: 10,
  }
}

export default function Work({ work }) {
  const container = {
    hidden: { x: '-100vw' },
    show: {
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1.2,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { x: '-100vw' },
    show: { x: 0 },
  }
  return (
    <>
      <div className="flex flex-col items-center min-w-full min-h-screen pt-20">
        <AnimateTitles>
          <span className="text-secondary -rotate-6">
            <AiOutlineAppstore />
          </span>
          <h2 className="capitalize pl-2">Projects</h2>
        </AnimateTitles>
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center md:flex-row md:flex-wrap items-start w-full sm:w-4/5 md:w-fit gap-4"
        >
          {work.map(({ endDate, name, role, isgroup, id }, i) => (
            <Link href={'work/' + id} key={i}>
              <motion.article
                variants={item}
                className="p-2 rounded cursor-pointer dark:bg-primary bg-tertiary w-full md:w-2/5"
              >
                <div className="pb-10 mb-2 border-b border-white select-none">
                  <div className="flex justify-between items-center">
                    <h2 className="text-base lg:text-2xl font-bold dark:text-white text-primary">
                      {name}
                    </h2>
                    <p className="text-xs lg:text-base text-white">{endDate}</p>
                  </div>
                  <p className="text-sm md:text-base text-white">
                    {isgroup ? 'Group Project' : 'Solo Project'}
                  </p>
                </div>
                <p className="capitalize text-sm text-white md:text-base">{role}</p>
              </motion.article>
            </Link>
          ))}
        </motion.section>
      </div>
    </>
  )
}
