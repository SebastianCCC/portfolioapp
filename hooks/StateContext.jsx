import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [projectView, setProjectView] = useState(false)
  const [formLoading, setFormLoading] = useState(false)

  const value = useMemo(
    () => ({ isOpen, setIsOpen, projectView, setProjectView, formLoading, setFormLoading }),
    [isOpen, projectView, formLoading]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
