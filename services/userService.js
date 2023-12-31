import { client } from '../utils/client'
import { errorParser } from '../utils/errorParser'

export function postUserLogin(data) {
  // if no baseURL is provided, the client will use localhost in development
  return client()
    .post(`/api/auth/login`, data)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
