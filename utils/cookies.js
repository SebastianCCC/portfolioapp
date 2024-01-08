import { deleteCookie, hasCookie, getCookie, setCookie as cookie } from 'cookies-next'

const defaultOptions = {
  path: '/',
  httpOnly: false,
  secure: process.env.NEXT_PUBLIC_ENV ? false : true,
}

export const setCookie = (name, value, options) => {
  cookie(name, JSON.stringify(value), { ...options, ...defaultOptions })
}

export const setCookies = (cookies, options) => {
  Object.keys(cookies).map((singleCookie) => {
    cookie(singleCookie, cookies[singleCookie], { ...options, ...defaultOptions })
  })
}

export const getCookieValue = (name, options) => {
  if (!hasCookie(name, { ...options })) return { [name]: null }

  const cookie = getCookie(name, { ...options })
  const parsedCookie = JSON.parse(cookie)

  return { [name]: parsedCookie }
}

export const removeCookies = (cookies, options) => {
  cookies.map((singleCookie) => {
    deleteCookie(singleCookie, { ...options, ...defaultOptions })
  })
}
