import { useLocation } from "react-router-dom";



const PedidoProductos = () => {

  const { state: { order } } = useLocation();
  const { list: { products, } } = order

  return (
    <div className="productos_pedido overflow-y-auto flex gap-y-5 flex-col overflow-hidden ">
      {products.map(v => (
        <div key={v._id} className="flex  justify-between ">
          <div className="flex items-center gap-x-5">
            <div className="bg-color_green_3 rounded-lg w-20 h-20">
              <img alt="img pedido" src={v.product?.img} />
            </div>
            <div className="flex flex-col">

              <span className="text-color_green_5">{v.quantity} unidades</span>
              <span className="text-lg text-color_green_7">{v.product?.name}</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg text-color_green_6">S/. {v.product?.retail_price * v.quantity}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PedidoProductos;
