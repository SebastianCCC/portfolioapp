import { postLoginUser, postRefreshIdToken } from '../../../services/authService'
import { convertSecondsToDate } from '../../../utils/helper'

export const callUserLogin = async (auth, data) => {
  let loading = false
  let error = false
  let user = null

  const userLogin = async () => {
    loading = true
    const loginUser = await postLoginUser(auth, data)

    if (!loginUser.error) {
      user = loginUser
      loading = false
    } else {
      error = loginUser.message
      loading = false
    }
  }

  await userLogin()
  return { error, loading, ...user }
}

export const callRefreshIdToken = async (refresh_token) => {
  let loading = false
  let error = false
  let exchangeToken = null

  const refreshIdToken = async () => {
    loading = true
    const userToken = await postRefreshIdToken({ refresh_token, grant_type: 'refresh_token' })

    if (!userToken.error) {
      exchangeToken = {
        accessToken: userToken.access_token,
        refreshToken: userToken.refresh_token,
        expirationTime: convertSecondsToDate(userToken.expires_in),
      }
      loading = false
    } else {
      error = userToken.message
      loading = false
    }
  }

  await refreshIdToken()
  return { error, loading, exchangeToken }
}
