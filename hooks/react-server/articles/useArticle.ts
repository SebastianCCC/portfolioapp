import { getArticlesByUsername, getReactionsById } from '../../../services/forumService'
import { Forum } from '../../../types/Forum'

type Schemas = Forum['schemas']
type Articles = Schemas['Article'][]
type ArticleCounts = Schemas['ArticleCounts']
type ArticlesWithLikes = { likes: ArticleCounts }[] & Articles

export const callArticlesByUsername = async () => {
  let loading = false
  let error: boolean | string = false
  let articles: Articles = []

  const articlesByUsername = async () => {
    loading = true
    const articlesWithoutLikes = await getArticlesByUsername()

    if (!('error' in articlesWithoutLikes)) {
      articles = articlesWithoutLikes
      loading = false
    } else {
      error = articlesWithoutLikes.message
      loading = false
    }
  }

  await articlesByUsername()
  return { error, loading, articles }
}

export const callArticlesReactionsById = async (articles: Articles) => {
  let loading = false
  let error: boolean | string = false
  let articlesWithLikes: ArticlesWithLikes = []

  const reactionsById = async () => {
    loading = true
    for (let index = 0; index < articles.length; index++) {
      const reactions = await getReactionsById(articles[index].id)

      if (!('error' in reactions)) {
        const likes = reactions.article_reaction_counts.filter(
          (reaction) => reaction.category === 'like',
        )[0]
        articlesWithLikes.push({
          ...articles[index],
          likes,
        })

        loading = false
      } else {
        error = reactions.message
        loading = false
      }
    }
  }

  await reactionsById()

  return {
    error,
    loading,
    articlesWithLikes: articlesWithLikes.sort((a, b) => (b.likes.count || 0) - (a.likes.count || 0)),
  }
}
