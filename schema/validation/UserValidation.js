import { schema } from '../UserSchema'

export const UserValidation = (userObject) => {
  return schema
    .validate(userObject, { strict: true })
    .then((res) => res)
    .catch((err) => err)
}
