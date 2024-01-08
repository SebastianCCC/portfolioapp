export const errorParser = (error) => {
  const errorMessage = message(error)

  return {
    message: errorMessage,
    status: error?.status || error?.code,
    error: true,
  }
}

const message = (error) => {
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
