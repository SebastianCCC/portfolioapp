import { signInWithEmailAndPassword } from 'firebase/auth'
import { SECURE_GOOGLE_URL_API } from '../config'
import { urlencodedClient } from '../utils/client'
import { errorParser } from '../utils/errorParser'

export function postLoginUser(auth, data) {
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => user)
    .catch((error) => errorParser(error))
}

export function postRefreshIdToken(data) {
  return urlencodedClient(SECURE_GOOGLE_URL_API, `/v1/token?key=${process.env.APIKEY}`, 'POST', data)
    .then((token) => {
      if (token.ok) {
        return token.json()
      } else {
        throw new Error(token)
      }
    })
    .catch((error) => errorParser(error))
}
