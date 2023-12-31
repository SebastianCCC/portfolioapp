import { auth } from '../../../firebase'
import { callUserLogin } from '../../../hooks/serverHooks/user/useAuth'
import { UserValidation } from '../../../schema/validation/UserValidation'

const handler = async (req, res) => {
  const value = await UserValidation(req.body)
  const { user, error } = await callUserLogin(auth, value)

  if (value.errors) {
    res.status(422).json({ errors: value.errors, input: value.path, parms: value.params })
  }

  if (!error) {
    res.status(200).json({ user: { ...user.providerData[0], uid: user.uid }, token: user.stsTokenManager })
  } else {
    res.status(401).json({ errors: [error] })
  }
}

export default handler
