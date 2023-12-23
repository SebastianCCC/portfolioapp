import { useContext, useState } from 'react'
import { postContactForm } from '../../services/contactService'
import { StateContext } from '../../utils/StateContext'

export const useContact = () => {
  const { setFormLoading } = useContext(StateContext)
  const [success, handleSuccess] = useState(false)
  const [error, handleError] = useState(false)

  const onSubmit = async (values) => {
    setFormLoading(true)
    let [res] = await Promise.allSettled([
      postContactForm(values),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ])

    if (!res.value.error) {
      handleSuccess(true)
      setFormLoading(false)
    } else {
      handleError(res.value.message)
      setFormLoading(false)
    }
  }

  return { success, error, onSubmit }
}
