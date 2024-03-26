export const convertSecondsToDate = (seconds) => {
  return Date.now(seconds * 1000)
}

export const expiredToken = (expirationTime) => {
  return Date.now() > expirationTime
}

export const protectedRoutes = (pathname) => {
  const routes = ['/contact/reply']
  return routes.filter((route) => route === pathname)
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}
