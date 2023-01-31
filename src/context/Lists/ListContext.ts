import { createContext, Dispatch } from "react";
import { ILista } from "types-yola";
import { ListState } from "./ListProvider";
import { ListAction } from "./ListReducer";

interface ListContextProps extends ListState {
	dispatchList: Dispatch<ListAction>
	lists: ILista[],
	obtenerListas: () => Promise<void>,
}

export const ListContext = createContext<ListContextProps>({} as ListContextProps)