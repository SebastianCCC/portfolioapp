export const errorParser = (error) => {
  const errorMessage = message(error)

  return {
    message: errorMessage,
    status: error.response.status,
    error: true,
  }
}

const message = (error) => {
  switch (error.response.status) {
    case 404:
      return 'Looking so hard but could not find what you are looking for'

    default:
      return 'Something went wrong'
  }
}
