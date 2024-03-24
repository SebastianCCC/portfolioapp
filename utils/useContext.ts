import { StateContext } from '../providers/StateContext'
import { useContext as ReadContext } from 'react'

export function useContext() {
  const context = ReadContext(StateContext)
  if (context === null) {
    throw new Error(`useContext must be used within a Provider`)
  }
  return context
}
