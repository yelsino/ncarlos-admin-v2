import { useLocation } from 'react-router-dom'

const PedidoProductos = () => {
  const {
    state: { order }
  } = useLocation()
  const {
    list: { products }
  } = order

  return (
    <div className="productos_pedido flex flex-col gap-y-5 overflow-hidden overflow-y-auto ">
      {products.map((v: any) => (
        <div key={v._id} className="flex  justify-between ">
          <div className="flex items-center gap-x-5">
            <div className="bg-color_green_3 h-20 w-20 rounded-lg">
              <img alt="img pedido" src={v.product?.img} />
            </div>
            <div className="flex flex-col">
              <span className="text-color_green_5">{v.quantity} unidades</span>
              <span className="text-color_green_7 text-lg">
                {v.product?.name}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-color_green_6 text-lg">
              S/. {v.product?.retail_price * v.quantity}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PedidoProductos
