import { getArticlesByUsername, getReactionsById } from '../../../services/forumService'
import { Forum } from '../../../types/Forum'

type Schemas = Forum['schemas']

export const callArticlesByUsername = async () => {
  let loading = false
  let error: boolean | string = false
  let articles: Schemas['Article'][] = []

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

export const callArticlesReactionsById = async (articles: Schemas['Article'][]) => {
  let loading = false
  let error: boolean | string = false
  let articlesWithLikes: Schemas['Article'][] = []

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
          likes: likes.count,
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
    articlesWithLikes: articlesWithLikes.sort((a, b) => (b.likes || 0) - (a.likes || 0)),
  }
}
