import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [projectView, setProjectView] = useState(false)
  const [formLoading, handleFormLoading] = useState(false)

  const value = useMemo(
    () => ({ isOpen, setIsOpen, projectView, setProjectView, formLoading, handleFormLoading }),
    [isOpen, projectView, formLoading]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }