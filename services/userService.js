import { IDENTITY_TOOLKIT_URL_API } from '../config'
import { client } from '../utils/client'
import { errorParser } from '../utils/errorParser'

export function postUserLogin(data) {
  // if no baseURL is provided, the client will use localhost in development
  return client()
    .post(`/api/auth/login`, data)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}

export function postUser(token) {
  return client(IDENTITY_TOOLKIT_URL_API)
    .post(`/v1/accounts:lookup?key=${process.env.APIKEY}`, { idToken: token })
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
