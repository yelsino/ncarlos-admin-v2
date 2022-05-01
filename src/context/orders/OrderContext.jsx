import { createContext, useState, } from 'react';
import { fetchConToken } from "../../helpers/fetch";

export const OrderContext = createContext(null);

const initialState = {
  orders: [],
};

export const OrderProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  const getOrders = async () => {
    const resp = await fetchConToken(`orders`);

    console.log(resp);
    if (resp.ok) {
      setData({ ...data, orders: resp.orders });
    }
  }; 

  return (
    <OrderContext.Provider
      value={{
        data,
        getOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
