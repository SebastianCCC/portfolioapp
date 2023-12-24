import { DRIBBBLE_URL_API } from '../config'
import { authClient } from '../utils/client'
import { errorParser } from '../utils/errorParser'

export function getShots() {
  return authClient(DRIBBBLE_URL_API, process.env.DRIBBBLE_ACCESS_TOKEN)
    .get(`/v2/user/shots`)
    .then((res) => res.data)
    .catch((err) => errorParser(err.response))
}
