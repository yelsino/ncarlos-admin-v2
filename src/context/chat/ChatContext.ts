import { Dispatch, createContext } from 'react'

import { ChatState } from './ChatProvider'
import { ChatAction } from './chatReducer'

interface ChatContextProps extends ChatState {
    chatDispatch: Dispatch<ChatAction>;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps)
