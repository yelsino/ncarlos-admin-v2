import { createContext, Dispatch } from "react";
import { NotificacionState } from "./notificacionProvider";
import { NotificacionAction } from "./notificacionReducer";


interface NotificacionContextProps extends NotificacionState {
	dispatchNotificacion: Dispatch<NotificacionAction>,
	setNotificacion: (props: any) => void,
	removeNotificacion: (props: any) => void,
}

export const NotificacionContext = createContext<NotificacionContextProps>({} as NotificacionContextProps)