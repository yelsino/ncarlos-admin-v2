import { createContext, useReducer, useState } from 'react'
import { IReclamo, IUsuario } from 'types-yola'
import { fetchConToken } from '../../helpers/fetch'
import { UserContext } from './UserContext'
import userReducer from './userReducer'

export interface UserState {
  caceros: IUsuario[],
  casero: IUsuario | null,
  getdata: boolean,
  usuarios: IUsuario[],
  user_selected: IUsuario | null,
  claims: IReclamo[],
  trabajadores: IUsuario[],
  newWorker: any
}

const INITIAL_STATE:UserState = {
  caceros: [],
  casero: null,
  getdata: false,
  usuarios: [],
  user_selected: null,
  claims: [],
  trabajadores: [],
  newWorker: {
    email: '',
    password: '',
    apodo: '',
    nombres: '',
    apellidos: '',
    celular: '',
    correo: '',
    direccion: ''
  }
}

export const UserProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const obtenerCaseros = async () => {
    const resp = await fetchConToken('users/caseros')
    console.log(resp)
    if (resp.ok) {
      // setUser({ ...users, caceros: resp.usuarios })
    }
  }

  const obtenerUsuarios = async () => {
    const resp = await fetchConToken('users')
    if (resp.ok) {
      // setUser({ ...users, usuarios: resp.usuarios })
    }
  }

  const getDetailUser = async (id:any) => {
    try {
      const resp = await fetchConToken(`users/detail/${id}`)
      console.log(resp)
      if (resp.ok) {
        // setUser({ ...users, user_selected: resp.data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getDetailCasero = async (id:any) => {
    try {
      const resp = await fetchConToken(`users/detail-casero/${id}`)
      console.log(resp)
      if (resp.ok) {
        // setUser({ ...users, casero: resp.data, getdata: true })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getClaimsAll = async () => {
    try {
      const resp = await fetchConToken('claims')
      if (resp.ok) {
        // setUser({ ...users, claims: resp.claims })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{
      ...state,
      dispatchUser: dispatch,
      obtenerCaseros,
      obtenerUsuarios,
      getDetailUser,
      getClaimsAll,
      getDetailCasero
    }}>
      {children}
    </UserContext.Provider>
  )
}
