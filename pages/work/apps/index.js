import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import db from '../../../firebase'
import { callApplications } from '../../../hooks/serverHooks/apps/useApplication'

export async function getStaticProps() {
  const { apps } = await callApplications(db, 'work')

  return {
    props: {
      work: apps,
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
              collapsed={true}
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
