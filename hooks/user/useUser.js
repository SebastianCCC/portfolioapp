import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { postUserLogin } from '../../services/userService'
import { StateContext } from '../../utils/StateContext'
import { setCookies } from '../../utils/cookies'
import { replaceRoute } from '../../utils/navigateToRoute'

export const useUserLogin = () => {
  const { handleFormLoading } = useContext(StateContext)
  const [error, handleError] = useState(false)

  const router = useRouter()

  const onSubmit = async (values) => {
    handleFormLoading(true)
    let [res] = await Promise.allSettled([
      postUserLogin(values),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ])

    if (!res.value.error) {
      setCookies(res.value)
      replaceRoute('/', router)
      handleFormLoading(false)
    } else {
      handleError(res.value.message)
      handleFormLoading(false)
    }
  }

  return { error, onSubmit }
}
