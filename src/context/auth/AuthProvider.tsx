import { fetchConToken, fetchSinToken } from 'helpers/fetch';
import { useCallback, useReducer } from 'react'
import { IAuth, IAuthRest, IRespuesta, IUsuario } from 'types-yola'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

export interface AuthState {
    uid: string | null;
    checking: boolean;
    logged: boolean;
    user: IUsuario | null;
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
  const [auth, dispatchAuth] = useReducer(authReducer, INITIAL_STATE)
  // const { chatDispatch } = useContext(ChatContext)

  const userLogin = async (data:IAuth): Promise<IRespuesta<IAuthRest>> => {
    console.log(data)

    dispatchAuth({ type: 'LOADING', payload: true })

    const resp = await fetchSinToken<IRespuesta<IAuthRest>>({
      endpoint: 'auth/login',
      body: data,
      method: 'POST'
    }).finally(() => dispatchAuth({ type: 'LOADING', payload: false }))

    if (resp.ok) {
      const { usuario, token } = resp.data

      localStorage.setItem('token', token)

      dispatchAuth({
        type: 'LOGIN',
        payload: usuario
      })
      return resp
    }

    localStorage.setItem('noPassword', 'true')
    return resp
  }

  const registrarConEmail = async (
    data: IAuth
  ): Promise<IRespuesta<IAuthRest>> => {
    const resp = await fetchSinToken<IRespuesta<IAuthRest>>({
      endpoint: 'auth/registro-correo',
      body: data,
      method: 'POST'
    })

    if (resp.ok) {
      localStorage.setItem('token', resp.data.token)
      dispatchAuth({
        type: 'LOGIN',
        payload: resp.data.usuario
      })
      return resp
    }
    localStorage.setItem('noPassword', 'true')
    return resp
  }

  const verificarToken = useCallback(async () => {
    const token = localStorage.getItem('token') || ''
    // si token no existe
    if (!token) {
      dispatchAuth({ type: 'LOGOUT' })

      return false
    }

    const resp = await fetchConToken<IRespuesta<IAuthRest>>({ endpoint: 'auth/re-login' })
    // const { usuario } = resp;
    console.log(resp)

    if (!resp.ok) {
      localStorage.removeItem('token')
      window.location.reload()
      return false
    }

    if (resp.ok) {
      localStorage.setItem('token', resp.data.token)
      dispatchAuth({
        type: 'LOGIN',
        payload: resp.data.usuario
      })
      return true
    } else {
      dispatchAuth({ type: 'LOGOUT' })
      return false
    }
  }, [])

  const userLogout = () => {
    localStorage.removeItem('token')
    dispatchAuth({
      type: 'LOGOUT'
    })
  }

  return (
    <AuthContext.Provider value={{
      ...auth,
      dispatchAuth,
      verificarToken,
      userLogout,
      userLogin,
      registrarConEmail
    }}>
      {children}
    </AuthContext.Provider>
  )
}
