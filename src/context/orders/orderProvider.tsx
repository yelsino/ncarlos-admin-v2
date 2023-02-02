import { useReducer } from 'react'
import { IPedido } from 'types-yola'
// import { fetchConToken } from '../../helpers/fetch'
import { OrderContext } from './orderContext'
import orderReducer from './orderReducer'

export interface OrderState {
  orders: IPedido[]
}

const INITIAL_STATE: OrderState = {
  orders: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const OrderProvider = ({ children }: Props) => {
  const [data, setData] = useReducer(orderReducer, INITIAL_STATE)

  const getOrders = async () => {
    // const resp = await fetchConToken('orders')
    // console.log(resp)
    // if (resp.ok) {
    //   setData({ ...data, orders: resp.orders })
    // }
  }

  return (
    <OrderContext.Provider
      value={{
        ...data,
        dispatchOrder: setData,
        getOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
