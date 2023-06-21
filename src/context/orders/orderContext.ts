import { createContext, Dispatch } from 'react'
import { OrderAction } from './orderReducer'
import { OrderState } from './orderProvider'

interface OrderContextProps extends OrderState {
  dispatchOrder: Dispatch<OrderAction>
  getOrders: () => Promise<void>
}

export const OrderContext = createContext<OrderContextProps>(
  {} as OrderContextProps
)
