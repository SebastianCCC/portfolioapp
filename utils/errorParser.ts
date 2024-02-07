import { FirebaseError } from '@firebase/util'
import { AxiosResponse } from 'axios'

export type ErrorParserSchema = {
	message: string
	status?: number | string
	error: boolean
}

type Error = AxiosResponse & FirebaseError

export const errorParser = (error?: Error): ErrorParserSchema => {
	const errorMessage = message(error)

	return {
		message: errorMessage,
		status: error?.status || error?.code,
		error: true,
	}
}

const message = (error?: Error) => {
	switch (error?.status || error?.code) {
		case 401:
		case 'auth/wrong-password':
			return 'Incorrect email or password'

		case 403:
		case 'INVALID_ID_TOKEN':
			return 'You are not authorized to access this content'

		case 404:
			return 'Looking so hard but could not find what you are looking for'

		case 422:
			return 'Please fill in the required fields correctly'

		case 500:
			return 'Something went wrong on the server'

		default:
			return 'Something went wrong'
	}
}
