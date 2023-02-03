import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'
const INITIALSTATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
}
export const Context = createContext(INITIALSTATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIALSTATE)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
