import { AxiosResponse } from 'axios'
import { FORUM_URL, FORUM_URL_API } from '../config'
import { Forum } from '../types/Forum'
import { client } from '../utils/client'
import { errorParser } from '../utils/errorParser'

type Schemas = Forum['schemas']
type Article = AxiosResponse<Schemas['Article'][]>
type Reaction = AxiosResponse<Schemas['Reaction']>

export function getArticlesByUsername() {
  return client(FORUM_URL_API)
    .get(`/articles?username=${process.env.USERNAME}`)
    .then((res: Article) => res.data)
    .catch((err) => errorParser(err.response))
}

export function getReactionsById(article_id: number) {
  return client(FORUM_URL)
    .get(`/reactions?article_id=${article_id}`)
    .then((res: Reaction) => res.data)
    .catch((err) => errorParser(err.response))
}
