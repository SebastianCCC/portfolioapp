import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'
import { motion } from 'framer-motion'

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, 'work'))
  const work = []

  querySnapshot.forEach((doc) => {
    work.push(doc.data())
  })

  return {
    props: {
      work,
    },
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
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-4/5 md:w-3/5 lg:w-1/2"
        >
          {work.map(({ startDate, endDate, name, role, isgroup, deployed }, i) => (
            <motion.article
              variants={item}
              className="p-2 rounded dark:bg-pink bg-purple w-full"
              key={i}
            >
              <a href={deployed} target="_blank" rel="noopener noreferrer">
                <div className="pb-10 mb-2 border-b border-white">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h2>
                    <p className="text-sm md:text-base">{endDate}</p>
                  </div>
                  <p className="text-sm md:text-base">
                    {isgroup ? 'Group Project' : 'Solo Project'}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm md:text-base">Role</p>
                  <div className="mx-1 dark:bg-white rounded-full w-1 h-1"></div>
                  <p className="uppercase text-sm md:text-base">{role}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </>
  )
}
