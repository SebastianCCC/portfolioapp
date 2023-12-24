import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import { callDribbbleShots } from '../../../hooks/serverHooks/artworks/useArtworks'

export async function getStaticProps() {
  const { shots } = await callDribbbleShots()

  return {
    props: {
      artwork: shots,
    },
    revalidate: 10,
  }
}

export default function Artwork({ artwork }) {
  return (
    <>
      <div className="pt-28 xl:p-4">
        <HeaderTitles title="Artwork" />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          className="mt-4 mb-20 xl:text-[17px] max-w-[800px] 2xl:max-w-full m-auto"
        >
          Here you will find all of my art in detail, click any artwork to view it.
        </motion.p>
        <AnimatePreviewCard>
          {artwork.map(({ title, tags, images, html_url, id, updated_at }, i) => (
            <PreviewCard
              collapsed={true}
              name={title}
              role={tags.join(', ')}
              img={images.hidpi}
              increaseDelay={i}
              key={id}
              href={html_url}
              endDate={updated_at}
              externalLink={true}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
