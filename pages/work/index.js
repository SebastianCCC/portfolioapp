import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'
import { motion } from 'framer-motion'
import { AiOutlineAppstore } from 'react-icons/ai'
import AnimateTitles from '../../components/Animate/Titles'
import Link from 'next/link'
import HeaderTitles from '../../components/Animate/Titles'
import Image from 'next/image'
import PreviewCard from '../../components/Work/PreviewCard'
import { StarIcon, NewsPaper } from '../../assets'

export default function Work({ work }) {
  const Projects = [
    { name: 'Applications', path: 'work/apps', icon: <StarIcon /> },
    { name: 'Articles', path: '/work/articles', icon: <NewsPaper /> },
  ]
  return (
    <>
      <div className="pt-20 xl:p-4">
        <HeaderTitles title="Category" />
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
          Here you will find all of my projects in detail, click any category.
        </motion.p>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {Projects.map(({ name, path, icon }, i) => (
            <Link href={path} key={i}>
              <PreviewCard name={name} icon={icon} />
            </Link>
          ))}
        </motion.section>
      </div>
    </>
  )
}
