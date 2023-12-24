import { motion } from 'framer-motion'
import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import {
  callArticlesByUsername,
  callArticlesReactionsById,
} from '../../../hooks/serverHooks/articles/useArticles'

export async function getStaticProps() {
  const { articles } = await callArticlesByUsername()
  const { articlesWithLikes } = await callArticlesReactionsById(articles)

  return {
    props: {
      articles: articlesWithLikes,
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
          className="mt-4 mb-20 xl:text-[17px] max-w-[800px] 2xl:max-w-full m-auto"
        >
          Here you will find all of my articles in detail, click any article to view it.
        </motion.p>
        <AnimatePreviewCard>
          {articles.map(({ title, tags, cover_image, url, edited_at }, i) => (
            <PreviewCard
              collapsed={true}
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
