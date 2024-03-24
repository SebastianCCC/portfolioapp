import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import { callDribbbleShots } from '../../../hooks/react-server/artworks/useArtwork'
import { Dribbble } from '../../../types/Dribbble'

type Schemas = Dribbble['schemas']

export async function getStaticProps() {
  const { shots } = await callDribbbleShots()

  return {
    props: {
      artwork: shots,
    },
    revalidate: 10,
  }
}

export default function Artwork({ artwork }: { artwork: Schemas['Shot'][] }) {
  return (
    <>
      <div className='pt-28 xl:p-4'>
        <HeaderTitles
          title='Where my passion started'
          description='Like what you see? Designed in either Photoshop or Zbrush, without the help of AI.'
        />
        <AnimatePreviewCard>
          {artwork.map(({ title, tags, images, html_url, id, published_at }) => (
            <PreviewCard
              collapsed={true}
              name={title}
              role={tags?.join(', ')}
              img={images.hidpi}
              key={id}
              href={html_url}
              endDate={published_at}
              externalLink={!!html_url}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
