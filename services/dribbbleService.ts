import { Dribbble } from '../types/Dribbble'
import { DRIBBBLE_URL_API } from '../config'
import { authClient } from '../utils/client'
import { errorParser, ErrorParserSchema } from '../utils/errorParser'

type Schemas = Dribbble['schemas']
type Shot = Schemas['Shot'][] & ErrorParserSchema

export function getShots(): Promise<Shot> {
	return authClient(DRIBBBLE_URL_API, process.env.DRIBBBLE_ACCESS_TOKEN)
		.get(`/v2/user/shots`)
		.then((res) => res.data)
		.catch((err) => errorParser(err.response))
}
