import { NextResponse } from 'next/server'
import { callRefreshIdToken } from './hooks/react-server/user/useAuth'
import { getCookieValue, removeCookies, setCookie } from './utils/cookies'
import { expiredToken, protectedRoutes } from './utils/helper'

export async function middleware(req) {
  const res = NextResponse.next()
  const { pathname } = req.nextUrl
  const { token } = getCookieValue('token', { req, res })

  if (!token?.accessToken && protectedRoutes(pathname).length > 0) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (token?.accessToken && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (token?.accessToken && expiredToken(token?.expirationTime)) {
    const { error, exchangeToken } = await callRefreshIdToken(token?.refreshToken)

    if (!error) {
      setCookie('token', exchangeToken, { req, res })
    } else {
      removeCookies(['token', 'user'], { req, res })
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/contact/reply', '/login'],
}
