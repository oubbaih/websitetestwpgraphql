import React, { createContext, useReducer, useContext } from "react"
import { ReducerFunction } from "./ReducerFunction"
import { InitalVariables } from "./InitialValues"
const InitialStateContext = createContext()
const DispatchContext = createContext()
function Index({ children }) {
  const [state, dispatch] = useReducer(ReducerFunction, InitalVariables)
  return (
    <InitialStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </InitialStateContext.Provider>
  )
}

export default Index

export const useStateContextValues = () => useContext(InitialStateContext)
export const useDispatchFunctions = () => useContext(DispatchContext)
