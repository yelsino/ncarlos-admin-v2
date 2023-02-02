import { createContext, useReducer, useState } from 'react'
import { ILista, IRespuesta } from 'types-yola'
import { fetchConToken } from '../../helpers/fetch'
import { ListContext } from './ListContext'
import { listReducer } from './ListReducer'

export interface ListState {
  lists: ILista[]
}

const INITIAL_STATE: ListState = {
  lists: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ListProvider = ({ children }: Props) => {
  const [state, dispatchList] = useReducer(listReducer, INITIAL_STATE)

  const obtenerListas = async () => {
    const resp = await fetchConToken<IRespuesta<ILista>>({ endpoint: 'listas' })

    if (resp.ok) {
      // setLists();
    }
  }

  return (
    <ListContext.Provider
      value={{
        ...state,
        dispatchList,
        obtenerListas
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
