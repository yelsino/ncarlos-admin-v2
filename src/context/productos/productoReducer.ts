import { IProducto } from "types-yola"
import { ProductoState } from "./ProductoProvider"

export type ProductoAction = 
	| { type: "OBTENER_PRODUCTOS", payload: IProducto[] }

const productoReducer = (
	state: ProductoState,
	action: ProductoAction
): ProductoState => {
	switch (action.type) {
		case "OBTENER_PRODUCTOS":
			return {
				...state,
				productos: action.payload
			}
		default:
			return state
	}
}

export default productoReducer;