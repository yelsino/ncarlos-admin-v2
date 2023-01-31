import { NotificacionAction } from './../../interfaces/notificacion.interface'
import { NotificacionState } from '../../interfaces/notificacion.interface'

export const notificacionReducer = (
  state: NotificacionState,
  action: NotificacionAction
): NotificacionState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notificaciones: [...state.notificaciones, action.payload]
      }

    case 'REMOVE_NOTIFICATION': {
      const notification = state.notificaciones
      const index = notification.findIndex(v => v.id === action.payload)
      notification.splice(index, 1)
      return {
        ...state,
        notificaciones: notification
      }
    }

    case 'UPDATE_NOTIFICATION':
      return {
        ...state,
        notificaciones: state.notificaciones.map(n => (n.id === action.payload) ? { ...n, show: false } : n)
      }

    default:
      return state
  }
}
