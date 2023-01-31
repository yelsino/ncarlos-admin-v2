import { ADD_NOTIFICATION } from '../../types/notificacionTypes'

const notificacionReducer = (state:any, action:any) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notificaciones: [...state.notificaciones, action.payload]
      }
    case 'UPDATE_ITEM':
      // update a item of state
      return {
        ...state,
        notificaciones: state.notificaciones.map((v:any) => (v.id === action.payload) ? { ...v, show: false } : v)
      }
    // case REMOVE_NOTIFICATION:
    //   const notification = state.notificaciones
    //   const index = notification.findIndex(v => v.id === action.payload)
    //   notification.splice(index, 1)
    //   return {
    //     ...state,
    //     notificaciones: notification
    //   }
    default:
      return state
  }
}

export default notificacionReducer
