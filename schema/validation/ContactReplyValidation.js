import { schema } from '../ContactReplySchema'

export const ContactReplyValidation = (contactObject) => {
  return schema
    .validate(contactObject, { strict: true })
    .then((res) => res)
    .catch((err) => err)
}
