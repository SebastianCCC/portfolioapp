import { collection, getDocs } from 'firebase/firestore'
import db from '../../../firebase'
import { motion } from 'framer-motion'
import { AiOutlineAppstore } from 'react-icons/ai'
import AnimateTitles from '../../../components/Animate/Titles'
import Link from 'next/link'
import HeaderTitles from '../../../components/Animate/Titles'
import Image from 'next/image'
import PreviewCard from '../../../components/Work/PreviewCard'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=' + process.env.USERNAME)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
    revalidate: 10,
  }
}

export default function Articles({ articles }) {
  return (
    <>
      <div className="pt-20 xl:p-4">
        <HeaderTitles title="Articles" />
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
          Here you will find all of my articles in detail, click any article to view it.
        </motion.p>
        <AnimatePreviewCard>
          {articles.map(({ title, tags, cover_image, url }, i) => (
            <PreviewCard
              name={title}
              role={tags}
              img={cover_image}
              increaseDelay={i}
              key={i}
              href={url}
              externalLink={true}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
