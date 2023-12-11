import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import db from '../../../firebase'

export async function getStaticProps() {
  const collectionRef = collection(db, 'work')
  const q = await query(collectionRef, orderBy('id', 'desc'))

  const workDocs = await getDocs(q)
  const work = []

  workDocs.forEach((doc) => {
    work.push({ dId: doc.id, ...doc.data() })
  })

  return {
    props: {
      work: JSON.parse(JSON.stringify(work)),
    },
    revalidate: 10,
  }
}

export default function Apps({ work }) {
  return (
    <>
      <div className="pt-28 xl:p-4">
        <HeaderTitles title="Projects" />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          className="mt-4 mb-20 xl:text-[17px]"
        >
          Here you will find all of my apps in detail, click any project to view it.
        </motion.p>
        <AnimatePreviewCard>
          {work.map(({ name, role, previewImage, dId, endDate }, i) => (
            <PreviewCard
              name={name}
              role={role}
              img={previewImage}
              id={dId}
              increaseDelay={i}
              endDate={endDate.seconds * 1000}
              key={i}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
