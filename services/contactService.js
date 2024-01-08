import { client } from '../utils/client'
import { errorParser } from '../utils/errorParser'

export function postContactForm(data) {
  // if no baseURL is provided, the client will use localhost in development
  return client()
    .post(`/api/email/send`, data)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}

export function postContactReplyForm(data) {
  // if no baseURL is provided, the client will use localhost in development
  return client()
    .post(`/api/email/reply`, data)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
