// @ts-nocheck
import { useReducer } from 'react'
import notificacionReducer from './notificacionReducer'
import NotificacionContext from './notificacionContext'
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../types/notificacionTypes'

const NotificacionState = (props:any) => {
  const InitialState = {
    notificaciones: []
  }
  const [state, dispatch] = useReducer(notificacionReducer, InitialState)

  const setNotificacion = (props) => {
    const finditem = state.notificaciones.find(v => v.message === props.message)
    if (finditem) removeNotificacion(finditem.id)
    return dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        id: `${Date.now()}${(Math.random() * 10)}`,
        show: true,
        ...props
      }
    })
  }

  const removeNotificacion = (id) => {
    Promise.resolve(() => {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: id
      })
    }).then(() => {
      return dispatch({
        type: REMOVE_NOTIFICATION,
        payload: id
      })
    })
    return { ok: true }
  }

  return (
    <NotificacionContext.Provider
      value={{
        notificaciones: state.notificaciones,
        setNotificacion,
        removeNotificacion
      }}
    >
      {props.children}
    </NotificacionContext.Provider>
  )
}

export default NotificacionState
