import { fetchConToken, fetchSinToken } from 'helpers/fetch'
import { useCallback, useReducer } from 'react'
import { IAuth, IAuthRest, IRespuesta, IUsuario, Operario, IAuthOperario } from 'types-yola'
import { waitSeconds } from 'Utils/UI'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

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

export const AuthProvider = ({ children }: Props) => {
  const [auth, dispatchAuth] = useReducer(AuthReducer, INITIAL_STATE)
  // const { chatDispatch } = useContext(ChatContext)

  const userLogin = async (data: IAuth): Promise<IRespuesta<IAuthRest>> => {

    await waitSeconds(500);

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

  const operarioLogin = async (data: IAuthOperario): Promise<IRespuesta<IAuthRest>> => {

    await waitSeconds(500);

    const resp = await fetchSinToken<IRespuesta<IAuthRest>>({
      endpoint: 'auth/login-operario',
      body: data,
      method: 'POST'
    })

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
    console.log(resp);

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

  const userLogout = async () => {
    waitSeconds(500);
    localStorage.removeItem('token')
    dispatchAuth({
      type: 'LOGOUT'
    })
  }

  const restaurarOperario = async (documento:string):Promise<IRespuesta<IAuthRest>> => {
    waitSeconds(500);
    const respuesta = await fetchSinToken<IRespuesta<IAuthRest>>({
      endpoint: 'auth/restaurar-operario/' + documento,
      method: 'POST'
    })

    if (respuesta.ok) {
      localStorage.setItem('token', respuesta.data.token)
      dispatchAuth({
        type: 'LOGIN',
        payload: respuesta.data.usuario
      })
      return respuesta
    }
    localStorage.setItem('noPassword', 'true')
    return respuesta
  }

  const registrarOperario = async (operario: Operario):Promise<IRespuesta<IAuthRest>>   => {
    const resp = await fetchConToken<IRespuesta<IAuthRest>>({
      endpoint: 'auth/registrar-operario',
      method: 'POST',
      body: operario
    })

    return resp
  }

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        dispatchAuth,
        verificarToken,
        userLogout,
        userLogin,
        registrarConEmail,
        restaurarOperario,
        registrarOperario,
        operarioLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
