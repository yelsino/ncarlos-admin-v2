import { IPedido } from 'types-yola'
import { OrderState } from './OrderProvider'

export type OrderAction = 
  | { type: 'GET_ORDERS'; payload: Array<IPedido> }
  | { type: 'SELECCIONAR_ORDEN'; payload: IPedido }

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'GET_ORDERS':
      return {
        ...state,
        orders: action.payload
      }
    case 'SELECCIONAR_ORDEN':
      return {
        ...state,
        orden: action.payload
      }
    default:
      return state
  }
}

export default orderReducer
