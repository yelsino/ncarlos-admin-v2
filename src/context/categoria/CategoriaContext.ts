import { createContext } from "react";
import { ICategoria } from "types-yola";

interface CategoriaContextProps {
	categorias: ICategoria[],
	obtenerCategorias: () => void,
	
}

export const CategoriaContext = createContext<CategoriaContextProps>({} as CategoriaContextProps)