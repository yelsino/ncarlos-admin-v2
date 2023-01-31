import { IPedido } from "types-yola";
import { OrderState } from "./OrderProvider";

export type OrderAction = { type: "GET_ORDERS"; payload: Array<IPedido> };

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
