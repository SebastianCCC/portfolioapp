import { signInWithEmailAndPassword } from 'firebase/auth'
import { errorParser } from '../utils/errorParser'

export function postLoginUser(auth, data) {
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => user)
    .catch((error) => errorParser(error))
}
