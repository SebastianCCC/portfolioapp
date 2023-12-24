import { FORUM_URL, FORUM_URL_API } from '../config'
import { client } from '../utils/client'
import { errorParser } from '../utils/errorParser'
// trigger build
export function getArticlesByUsername() {
  return client(FORUM_URL_API)
    .get(`/articles?username=${process.env.USERNAME}`)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}

export function getReactionsById(article_id) {
  return client(FORUM_URL)
    .get(`/reactions?article_id=${article_id}`)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
