export const errorParser = (error) => {
  const errorMessage = message(error)

  return {
    message: errorMessage,
    status: error?.status,
    error: true,
  }
}

const message = (error) => {
  switch (error?.status) {
    case 404:
      return 'Looking so hard but could not find what you are looking for'

    case 500:
      return 'Something went wrong on the server'

    default:
      return 'Something went wrong'
  }
}
