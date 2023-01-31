import { createContext, useState } from 'react'
import { fetchConToken } from '../../helpers/fetch'

export const ListContext = createContext(null) as any

const initialState = {
  lists: []
}

export const ListProvider = ({ children }:any) => {
  const [lists, setLists] = useState<any>(initialState)

  const obtenerListas = async () => {
    const resp = await fetchConToken('lists')

    if (resp.ok) {
      // setLists();
    }
  }

  return (
    <ListContext.Provider value={{
      lists,
      obtenerListas,
      setLists
    }}>
      {children}
    </ListContext.Provider>
  )
}
