import { createContext, Dispatch } from 'react'
import { OrderState } from './orderProvider'
import { OrderAction } from './orderReducer'

interface OrderContextProps extends OrderState {
  dispatchOrder: Dispatch<OrderAction>
  getOrders: () => Promise<void>
}

export const OrderContext = createContext<OrderContextProps>(
  {} as OrderContextProps
)
