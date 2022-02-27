import { chatTypes } from "../../types/chatTypes";


export const chatReducer = (state, action) => {
  switch (action.type) {
    case chatTypes.usuariosCargados:
      return {
        ...state,
        usuarios: action.payload
      };
    case chatTypes.CHAT_ACTIVO:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
        userSelected: state.usuarios.find(e => e.uid === action.payload)
      }
    case chatTypes.NUEVO_MENSAJE:
      if (state.chatActivo === action.payload.de ||
        state.chatActivo === action.payload.para) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload]
        }
      } else return state;

    case chatTypes.CARGAR_MENSAJES:
      return {
        ...state,
        mensajes: action.payload
      }
    case chatTypes.LIMPIAR_MENSAJES:
      return {
        // uid: '',
        chatActivo: null,
        usuarios: [],
        mensajes: []
      }

    default:
      return state;
  }
}