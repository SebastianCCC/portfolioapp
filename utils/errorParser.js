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
    case 404:
      return 'Looking so hard but could not find what you are looking for'

    case 422:
      return 'Please fill in the required fields'

    case 500:
      return 'Something went wrong on the server'

    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email or password'

    default:
      return 'Something went wrong'
  }
}
