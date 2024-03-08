import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import { callDribbbleShots } from '../../../hooks/serverHooks/artworks/useArtwork'
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
        <HeaderTitles title='Artwork' />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          className='m-auto mb-20 mt-4 max-w-[800px] xl:text-[17px] 2xl:max-w-full'
        >
          Here you will find all of my art in detail, click any artwork to view it.
        </motion.p>
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
              externalLink={true}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
