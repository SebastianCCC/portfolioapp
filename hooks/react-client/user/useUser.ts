import { useRouter } from 'next/router'
import { useState } from 'react'
import { postUserLogin } from '../../../services/userService'
import { setCookies } from '../../../utils/cookies'
import { replaceRoute } from '../../../utils/navigateToRoute'
import { useContext } from '../../../utils/useContext'

export const useUserLogin = () => {
  const { handleFormLoading } = useContext()
  const [error, handleError] = useState<string | boolean>(false)

  const router = useRouter()
  // @ts-ignore
  const onSubmit = async (values) => {
    handleFormLoading(true)
    let [res] = await Promise.allSettled([
      postUserLogin(values),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ])
    // @ts-ignore
    if (!res.value.error) {
      // @ts-ignore
      setCookies(res.value)
      replaceRoute('/', router)
      handleFormLoading(false)
    } else {
      // @ts-ignore
      handleError(res.value.message)
      handleFormLoading(false)
    }
  }

  return { error, onSubmit }
}
