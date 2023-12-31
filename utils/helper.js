export const convertSecondsToDate = (seconds) => {
  return Date.now(seconds * 1000)
}

export const expiredToken = (expirationTime) => {
  return Date.now() > expirationTime
}
