import { ChatContext } from 'context/chat/ChatContext'
import { fetchConToken } from 'helpers/fetch'
import { useContext } from 'react'
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll'
import { IMenaje } from 'types-yola'

export const useOpenChat = () => {
  const { chatDispatch, usuarios } = useContext(ChatContext)

  const abrirChat = async (id:any) => {
    chatDispatch({
      type: 'CHAT_ACTIVO',
      payload: id
    })

    const resp = await fetchConToken<Array<IMenaje>>({ endpoint: `mensajes/${id}` })

    chatDispatch({
      type: 'CARGAR_MENSAJES',
      payload: resp
    })

    scrollToBottom('mensajes')
  }

  return {
    usuarios,
    abrirChat
  }
}
