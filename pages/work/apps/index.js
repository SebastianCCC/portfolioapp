import { collection, getDocs } from 'firebase/firestore'
import db from '../../../firebase'
import { motion } from 'framer-motion'
import { AiOutlineAppstore } from 'react-icons/ai'
import AnimateTitles from '../../../components/Animate/Titles'
import Link from 'next/link'
import HeaderTitles from '../../../components/Animate/Titles'
import Image from 'next/image'
import PreviewCard from '../../../components/Work/PreviewCard'

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

export default function Apps({ work }) {
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
          Here you will find all of my apps in detail, click any project to view it.
        </motion.p>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {work.map(({ name, role, previewImage, id }, i) => (
            <Link href={'apps/' + id} key={i}>
              <PreviewCard name={name} role={role} img={previewImage} id={id} />
            </Link>
          ))}
        </motion.section>
      </div>
    </>
  )
}
