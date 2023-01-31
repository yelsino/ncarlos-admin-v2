import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetch'
import { scrollToBottom } from '../helpers/scrollToBottom'
import { chatTypes } from '../types/chatTypes'

export const useOpenChat = () => {
  const { dispatch, chatState }:any = useContext(ChatContext)

  const abrirChat = async (id:any) => {
    dispatch({
      type: chatTypes.CHAT_ACTIVO,
      payload: id
    })

    const resp = await fetchConToken(`messages/${id}`)

    dispatch({
      type: chatTypes.CARGAR_MENSAJES,
      payload: resp.mensajes
    })

    scrollToBottom('mensajes')
  }

  return [
    chatState,
    abrirChat
  ]
}
