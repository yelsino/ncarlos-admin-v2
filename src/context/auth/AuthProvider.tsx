import { createContext, useState, useCallback, useContext } from 'react'
import { IUsuario } from 'types-yola'
import { fetchConToken, fetchSinToken } from '../../helpers/fetch'
import { chatTypes } from '../../types/chatTypes'
import { ChatContext } from '../chat/ChatContext'
import { AuthContext } from './AuthContext'


export interface AuthState {
  uid: string | null
  checking: boolean
  logged: boolean
  user: IUsuario | null
}

const INITIAL_STATE = {
  uid: null,
  checking: true,
  logged: false,
  user: null
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }:Props) => {
  const [auth, setAuth] = useState(INITIAL_STATE)
  const { dispatch }:any = useContext(ChatContext)

  const login = async (email:any, password:any) => {
    const resp = await fetchSinToken('login/worker', { email, password }, 'POST')

    if (resp.ok) {
      localStorage.setItem('token', resp.token)
      const { usuario } = resp

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        user: usuario
      })
    }

    return resp
  }

  const register = async () => {
    // const resp = await fetchSinToken('api/login/new', { nombre, email, password }, 'POST');
    // console.log(resp);
  }

  const verificarToken = useCallback(async () => {
    const token = localStorage.getItem('token') || ''

    // si token no existe
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        user: null
      })

      return false
    }

    const resp = await fetchConToken('login/renew')
    if (resp.ok) {
      localStorage.setItem('token', resp.token)
      const { usuario } = resp

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        user: usuario
      })
      return true
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        user: null
      })
      return false
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')

    dispatch({ type: chatTypes.LIMPIAR_MENSAJES })

    setAuth({
      uid: null,
      checking: false,
      logged: false,
      user: null
    })
  }

  return (
    <AuthContext.Provider value={{
      ...auth,
      login,
      register,
      verificarToken,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}