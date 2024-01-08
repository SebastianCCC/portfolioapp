import { postUser } from '../../../services/userService'

export const callUserData = async (idToken) => {
  let loading = false
  let error = false
  let user = null

  const userData = async () => {
    loading = true
    const loginUser = await postUser(idToken)

    if (!loginUser.error) {
      user = loginUser
      loading = false
    } else {
      error = loginUser.message
      loading = false
    }
  }

  await userData()
  return { error, loading, user }
}
