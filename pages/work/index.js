import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'
import { motion } from 'framer-motion'
import { AiOutlineAppstore } from 'react-icons/ai'
import AnimateTitles from '../../components/Animate/Titles'
import Link from 'next/link'
import HeaderTitles from '../../components/Animate/Titles'
import Image from 'next/image'

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
    hidden: { width: 0 },
    show: {
      width: '100%',
      transition: {
        delay: 0.2,
        duration: 3.5,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { width: 0 },
    show: { width: '100%' },
  }
  return (
    <>
      <div className="pt-20 xl:p-4">
        <HeaderTitles title="Projects" />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          className="mt-4 mb-20 xl:text-md"
        >
          Here you will find all of my projects in detail, click any project to view it.
        </motion.p>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {work.map(({ name, role, previewImage, id }, i) => (
            <Link href={'work/' + id} key={i}>
              <motion.article className="group flex flex-col justify-between rounded cursor-pointer w-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: 0.2,
                    duration: 3.5,
                  }}
                  className="group-hover:scale-105 relative select-none pointer-events-none w-full h-[200px] xl:h-[300px]"
                >
                  {previewImage ? (
                    <Image
                      lazyBoundary="0px"
                      layout="fill"
                      objectFit="cover"
                      src={previewImage}
                      alt={'A Photo of me'}
                    />
                  ) : (
                    <div className="bg-secondary w-full h-full"></div>
                  )}
                </motion.div>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: 0.8,
                    duration: 2,
                  }}
                  className="text-[16px] dark:text-tertiary mt-[20px] mb-2"
                >
                  {role}
                </motion.p>
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: 1.5,
                    duration: 2,
                  }}
                  className="text-md tracking-[2px]"
                >
                  {name}
                </motion.h3>
              </motion.article>
            </Link>
          ))}
        </motion.section>
      </div>
    </>
  )
}
