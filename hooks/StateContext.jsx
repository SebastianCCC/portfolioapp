import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
