import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState('John Doe')
  const [email, setEmail] = useState('JohnDoe@mail.com')

  const value = useMemo(
    () => ({ showPassword, setShowPassword, fullName, setFullName, email, setEmail }),
    [showPassword, fullName, email]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
