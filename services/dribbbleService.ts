import { AxiosResponse } from 'axios'
import { DRIBBBLE_URL_API } from '../config'
import { Dribbble } from '../types/Dribbble'
import { authClient } from '../utils/client'
import { errorParser } from '../utils/errorParser'

type Schemas = Dribbble['schemas']
type Shot = AxiosResponse<Schemas['Shot'][]>

export function getShots() {
  return authClient(DRIBBBLE_URL_API, process.env.DRIBBBLE_ACCESS_TOKEN)
    .get(`/v2/user/shots`)
    .then((res: Shot) => res.data)
    .catch((err) => errorParser(err.response))
}
