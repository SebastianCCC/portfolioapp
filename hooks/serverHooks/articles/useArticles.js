import { getArticlesByUsername, getReactionsById } from '../../../services/forumService'

export const callArticlesByUsername = async () => {
  let loading = false
  let error = false
  let articles = []

  const articlesByUsername = async () => {
    loading = true
    const articlesWithoutLikes = await getArticlesByUsername()

    if (!articlesWithoutLikes.error) {
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

export const callArticlesReactionsById = async (articles) => {
  let loading = false
  let error = false
  let articlesWithLikes = []

  const reactionsById = async () => {
    loading = true
    for (let index = 0; index < articles.length; index++) {
      const reactions = await getReactionsById(articles[index].id)

      if (!reactions.error) {
        const likes = reactions.article_reaction_counts.filter(
          (reaction) => reaction.category === 'like'
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

  return { error, loading, articlesWithLikes: articlesWithLikes.sort((a, b) => b.likes - a.likes) }
}
