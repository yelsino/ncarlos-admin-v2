// @ts-nocheck
import { useReducer } from 'react'
import notificacionReducer from './notificacionReducer'
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../types/notificacionTypes'
import { NotificacionContext } from './notificacionContext'

export interface NotificacionState {
  notificaciones: any[]
}

const INITIAL_STATE:NotificacionState = {
  notificaciones: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const NotificacionState = ({children}:Props) => {

  const [state, dispatch] = useReducer(notificacionReducer, INITIAL_STATE)

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
        ...notificaciones,
        setNotificacion,
        removeNotificacion
      }}
    >
      {children}
    </NotificacionContext.Provider>
  )
}

export default NotificacionState
