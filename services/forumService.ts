import { FORUM_URL, FORUM_URL_API } from '../config'
import { Forum } from '../types/Forum'
import { client } from '../utils/client'
import { ErrorParserSchema, errorParser } from '../utils/errorParser'

type Schemas = Forum['schemas']
type Article = Schemas['Article'][] & ErrorParserSchema
type Reaction = Schemas['Reaction'] & ErrorParserSchema

export function getArticlesByUsername(): Promise<Article> {
  return client(FORUM_URL_API)
    .get(`/articles?username=${process.env.USERNAME}`)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}

export function getReactionsById(article_id: number): Promise<Reaction> {
  return client(FORUM_URL)
    .get(`/reactions?article_id=${article_id}`)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
