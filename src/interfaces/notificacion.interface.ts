export interface INotificacion {
  id?: string
  show?: boolean
  type: number
  message: string
}

export interface NotificacionState {
  notificaciones: Array<INotificacion>
}

export type NotificacionAction =
  | { type: 'UPDATE_NOTIFICATION'; payload: string }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'ADD_NOTIFICATION'; payload: INotificacion }
