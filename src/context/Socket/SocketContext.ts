import { createContext } from 'react'

interface SocketContextProps {
    socket: any;
    online: boolean;
    conectarSocket: () => void;
    desconectarSocket: () => void;
}

export const SocketContext = createContext<SocketContextProps>(
    {} as SocketContextProps
)
