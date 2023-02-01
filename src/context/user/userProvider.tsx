import { useReducer } from 'react'
import { IReclamo, IRespuesta, IUsuario } from 'types-yola'
import { fetchConToken } from '../../helpers/fetch'
import { UserContext } from './UserContext'
import userReducer from './userReducer'

export interface UserState {
  caceros: IUsuario[],
  casero: IUsuario | null,
  getdata: boolean,
  usuarios: IUsuario[],
  usuarioSeleccionado: IUsuario | null,
  claims: IReclamo[],
  trabajadores: IUsuario[],
  newWorker: any
}

const INITIAL_STATE:UserState = {
  caceros: [],
  casero: null,
  getdata: false,
  usuarios: [],
  usuarioSeleccionado: null,
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

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }:Props) => {
  const [state, dispatchUser] = useReducer(userReducer, INITIAL_STATE)

  const obtenerCaseros = async () => {
    const resp = await fetchConToken<IRespuesta<IUsuario[]>>({ endpoint: 'auth' })
    if (resp.ok) {
      dispatchUser({ type: 'OBTENER_USUARIOS', payload: resp.data })
    }
  }

  const obtenerUsuarios = async () => {
    const resp = await fetchConToken<IRespuesta<IUsuario[]>>({ endpoint: 'auth' })
    if (resp.ok) {
      dispatchUser({ type: 'OBTENER_USUARIOS', payload: resp.data })
    }
  }

  const obtenerUsuario = async (id:string) => {
    const resp = await fetchConToken<IRespuesta<IUsuario>>({ endpoint: `auth/${id}` })
    if (resp.ok) {
      dispatchUser({ type: 'SELECCIONAR_USUARIO', payload: resp.data })
    }
  }

  const getClaimsAll = async () => {
    const resp = await fetchConToken<IRespuesta<IReclamo[]>>({ endpoint: 'reclamos' })

    if (resp.ok) {
      dispatchUser({
        type: 'OBTENER_RECLAMOS',
        payload: resp.data
      })
    }
  }

  return (
    <UserContext.Provider value={{
      ...state,
      dispatchUser,
      obtenerCaseros,
      obtenerUsuarios,
      obtenerUsuario,
      getClaimsAll
    }}>
      {children}
    </UserContext.Provider>
  )
}
