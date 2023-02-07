import { fetchConToken } from 'helpers/fetch'
import { useReducer } from 'react'
import { IReclamo, IRespuesta, IRol, IUsuario, Operario } from 'types-yola'
import { UserContext } from './UserContext'
import userReducer from './userReducer'

export interface UserState {
  roles: IRol[]
  caceros: IUsuario[]
  operarios: IUsuario[]
  casero: IUsuario | null
  getdata: boolean
  usuarios: IUsuario[]
  usuarioSeleccionado: IUsuario | null
  claims: IReclamo[]
  trabajadores: IUsuario[]
  nuevoOperario: Operario
}

const INITIAL_STATE: UserState = {
  caceros: [],
  roles: [],
  casero: null,
  operarios: [],
  getdata: false,
  usuarios: [],
  usuarioSeleccionado: null,
  claims: [],
  trabajadores: [],
  nuevoOperario: null
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatchUser] = useReducer(userReducer, INITIAL_STATE)

  const obtenerCaseros = async () => {
    const resp = await fetchConToken<IRespuesta<IUsuario[]>>({
      endpoint: 'auth'
    })
    if (resp.ok) {
      dispatchUser({ type: 'OBTENER_USUARIOS', payload: resp.data })
    }
  }

  const obtenerUsuarios = async () => {
    const resp = await fetchConToken<IRespuesta<IUsuario[]>>({
      endpoint: 'auth'
    })
    if (resp.ok) {
      dispatchUser({ type: 'OBTENER_USUARIOS', payload: resp.data })
    }
  }

  const obtenerUsuario = async (id: string) => {
    const resp = await fetchConToken<IRespuesta<IUsuario>>({
      endpoint: `usuarios/${id}`
    })
    if (resp.ok) {
      dispatchUser({ type: 'SELECCIONAR_USUARIO', payload: resp.data })
    }
  }

  const filtrarUsuarios = async (options: Object):Promise<IRespuesta<IUsuario[]>> => {

    const respuesta = await fetchConToken<IRespuesta<IUsuario[]>>({
      endpoint: 'usuarios/filtrar',
      method: 'POST',
      body: options,
    });

    if (respuesta.ok) {
      dispatchUser({ type: 'OBTENER_USUARIOS', payload: respuesta.data });
    }

    return respuesta;

  }

  const getClaimsAll = async () => {
    const resp = await fetchConToken<IRespuesta<IReclamo[]>>({
      endpoint: 'reclamos'
    })

    if (resp.ok) {
      dispatchUser({
        type: 'OBTENER_RECLAMOS',
        payload: resp.data
      })
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatchUser,
        obtenerCaseros,
        obtenerUsuarios,
        obtenerUsuario,
        getClaimsAll,
        filtrarUsuarios
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
