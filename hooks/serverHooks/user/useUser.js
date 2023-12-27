import { postLoginUser } from '../../../services/userService'

export const callUserLogin = async (auth, data) => {
  let loading = false
  let error = null
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
