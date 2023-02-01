import { createContext } from 'react'
import { ICategoria } from 'types-yola'
import { CategoriaState } from './CategoriaProvider'

interface CategoriaContextProps extends CategoriaState {
    categorias: ICategoria[];
    obtenerCategorias: () => Promise<void>;
    obtenerCategoria: (id: string) => Promise<void>;
}

export const CategoriaContext = createContext<CategoriaContextProps>({} as CategoriaContextProps)
