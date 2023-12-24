import { schema } from '../ContactSchema'

export const ContactValidation = (contactObject) => {
  return schema
    .validate(contactObject, { strict: true })
    .then((res) => res)
    .catch((err) => err)
}
