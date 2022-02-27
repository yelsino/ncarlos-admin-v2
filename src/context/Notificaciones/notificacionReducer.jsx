import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../../types/notificacionTypes";


const notificacionReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notificaciones: [...state.notificaciones, action.payload],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notificaciones: state.notificaciones.filter(v => v.id !== action.payload),
      };
    default:
      return state;
  }
}

export default notificacionReducer