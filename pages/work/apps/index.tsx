import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import db from '../../../firebase'
import { callApplications } from '../../../hooks/react-server/apps/useApplication'
import { Firestore } from '../../../types/Firestore'

type Schemas = Firestore['schemas']
type Work = Schemas['Work'][]

export async function getStaticProps() {
  // @ts-ignore - If no fetchLimit is provided, it will default to every document in the collection
  const { apps } = await callApplications(db, 'work')

  return {
    props: {
      work: apps,
    },
    revalidate: 3600,
  }
}

export default function Apps({ work }: { work: Work }) {
  return (
    <>
      <div className='pt-28 xl:p-4'>
        <HeaderTitles
          title='Favorite Projects'
          description='A collection of my favorite projects I have worked on. Some are group projects, others are solo projects.'
        />
        <AnimatePreviewCard>
          {work.map(({ name, role, previewImage, isgroup, dId, endDate }) => (
            <PreviewCard
              collapsed={true}
              name={name}
              role={role}
              img={previewImage}
              groupProject={isgroup}
              id={dId}
              endDate={endDate ? endDate.seconds * 1000 : null}
              key={dId}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
