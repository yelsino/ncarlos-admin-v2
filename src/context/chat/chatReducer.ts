import { IMenaje, IUsuario } from 'types-yola'

export type ChatAction =
  | { type: 'USUARIOS_CARGADOS'; payload: Array<IUsuario> }
  | { type: 'CHAT_ACTIVO'; payload: IUsuario }
  | { type: 'NUEVO_MENSAJE'; payload: IMenaje}
  | { type: 'CARGAR_MENSAJES'; payload: Array<IMenaje> }
  | { type: 'LIMPIAR_MENSAJES' }

export const chatReducer = (state:any, action:ChatAction) => {
  switch (action.type) {
    case 'USUARIOS_CARGADOS':
      return {
        ...state,
        usuarios: action.payload
      }
    case 'CHAT_ACTIVO':
      if (state.chatActivo === action.payload) return state
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
        userSelected: state.usuarios.find((e:any) => e.uid === action.payload)
      }
    case 'NUEVO_MENSAJE':
      if (state.chatActivo === action.payload.de ||
        state.chatActivo === action.payload.para) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload]
        }
      } else return state

    case 'CARGAR_MENSAJES':
      return {
        ...state,
        mensajes: action.payload
      }
    case 'LIMPIAR_MENSAJES':
      return {
        // uid: '',
        chatActivo: null,
        usuarios: [],
        mensajes: []
      }

    default:
      return state
  }
}
