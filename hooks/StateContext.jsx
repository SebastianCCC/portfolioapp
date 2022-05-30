import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [isHover, setIsHover] = useState(false)

  const value = useMemo(() => ({ isHover, setIsHover }), [isHover])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
