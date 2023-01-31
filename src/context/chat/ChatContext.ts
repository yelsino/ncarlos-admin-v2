import { createContext } from "react";
import { ChatState } from "./ChatProvider";

interface ChatContextProps extends ChatState  {
	
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps)