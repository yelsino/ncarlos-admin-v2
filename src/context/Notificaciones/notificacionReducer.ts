import { ADD_NOTIFICATION } from '../../types/notificacionTypes'
import { NotificacionState } from './notificacionProvider';

export type NotificacionAction = 
  | { type: 'ADD_NOTIFICATION'; payload: any }
  | { type: 'UPDATE_ITEM'; payload: any }

const notificacionReducer = (
  state:any, 
  action:NotificacionAction
  ):NotificacionState => {
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
