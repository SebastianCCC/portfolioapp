import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { postContactForm, postContactReplyForm } from '../../../services/contactService'
import { StateContext } from '../../../utils/StateContext'
import { removeCookies } from '../../../utils/cookies'
import { replaceRoute } from '../../../utils/navigateToRoute'

export const useContact = () => {
  const { handleFormLoading } = useContext(StateContext)
  const [success, handleSuccess] = useState(false)
  const [error, handleError] = useState(false)

  const onSubmit = async (values) => {
    handleFormLoading(true)
    let [res] = await Promise.allSettled([
      postContactForm(values),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ])

    if (!res.value.error) {
      handleSuccess(res.value.userEmail)
      handleFormLoading(false)
    } else {
      handleError(res.value.message)
      handleFormLoading(false)
    }
  }

  return { success, error, onSubmit }
}

export const useContactReply = () => {
  const { handleFormLoading } = useContext(StateContext)
  const [success, handleSuccess] = useState(false)
  const [error, handleError] = useState(false)

  const router = useRouter()

  const onSubmit = async (values) => {
    handleFormLoading(true)
    let [res] = await Promise.allSettled([
      postContactReplyForm(values),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ])

    if (!res.value.error) {
      handleSuccess(res.value.userEmail)
      handleFormLoading(false)
    } else {
      handleError(res.value.message)
      handleFormLoading(false)

      if (res.value.status === 403) {
        removeCookies(['token', 'user'])
        replaceRoute('/login', router)
      }
    }
  }

  return { success, error, onSubmit }
}
