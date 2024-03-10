import AnimatePreviewCard from '../../../components/Animate/AnimatePreviewCard'
import HeaderTitles from '../../../components/Animate/Titles'
import PreviewCard from '../../../components/Work/PreviewCard'
import {
  callArticlesByUsername,
  callArticlesReactionsById,
} from '../../../hooks/serverHooks/articles/useArticle'
import { Forum } from '../../../types/Forum'

type Schemas = Forum['schemas']
type Articles = Schemas['Article'][]
type ArticleCounts = Schemas['ArticleCounts']
type ArticlesWithLikes = Articles & { likes: ArticleCounts }[]

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

export default function Articles({ articles }: { articles: ArticlesWithLikes }) {
  return (
    <>
      <div className='pt-28 xl:p-4'>
        <HeaderTitles
          title='Articles are great'
          description="The complete list of every article i've witten. I promise they are worth the read."
        />
        <AnimatePreviewCard>
          {articles.map(({ title, tags, cover_image, url, created_at, id }) => (
            <PreviewCard
              collapsed={true}
              name={title}
              role={tags}
              img={cover_image}
              key={id}
              href={url}
              endDate={created_at}
              externalLink={!!url}
            />
          ))}
        </AnimatePreviewCard>
      </div>
    </>
  )
}
