import { createContext, useMemo, useState } from 'react'

type StateContextType = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  projectView: boolean
  setProjectView: (value: boolean) => void
  formLoading: boolean
  handleFormLoading: (value: boolean) => void
}

const StateContext = createContext<StateContextType | null>(null)

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [projectView, setProjectView] = useState(false)
  const [formLoading, handleFormLoading] = useState(false)

  const value = useMemo(
    () => ({ isOpen, setIsOpen, projectView, setProjectView, formLoading, handleFormLoading }),
    [isOpen, projectView, formLoading],
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
