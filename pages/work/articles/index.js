import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import { getArticlesByUsername, getReactionsById } from '../../../services/ForumService'

export async function getStaticProps() {
  const articlesBy = await getArticlesByUsername()
  let articles = []

  if (!articlesBy.error) {
    for (let index = 0; index < articlesBy.length; index++) {
      const reactions = await getReactionsById(articlesBy[index].id)

      if (!reactions.error) {
        const likes = reactions.article_reaction_counts.filter(
          (reaction) => reaction.category === 'like'
        )[0]
        articles.push({
          ...articlesBy[index],
          likes: likes.count,
        })
      }
    }
  }

  return {
    props: {
      articles: articles.sort((a, b) => b.likes - a.likes),
    },
    revalidate: 10,
  }
}

export default function Articles({ articles }) {
  return (
    <>
      <div className="pt-28 xl:p-4">
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
          {articles.map(({ title, tags, cover_image, url, edited_at }, i) => (
            <PreviewCard
              name={title}
              role={tags}
              img={cover_image}
              increaseDelay={i}
              key={i}
              href={url}
              endDate={edited_at}
              externalLink={true}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
