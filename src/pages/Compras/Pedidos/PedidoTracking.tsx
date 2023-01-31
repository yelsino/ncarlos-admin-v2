
const PedidoTracking = () => {
  // const { state: { order } } = useLocation();
  // console.log(order);

  return (
    <div className="flex  gap-x-5  overflow-y-auto tracking_pedido">
      <div>
        <div className="rounded-full bg-color_green_7  w-5 h-5"></div>
        <div className=" h-14 w-1 bg-clip-border border-color_green_4 border-dashed border-2 ml-2 my-1 " />
        <div className="rounded-full border-color_green_5 border-2 w-5 h-5"></div>
        <div className=" h-14 w-1 bg-clip-border border-color_green_4 border-dashed border-2 ml-2 my-1 " />
        <div className="rounded-full border-color_green_5 border-2 w-5 h-5"></div>
        <div className=" h-14 w-1 bg-clip-border border-color_green_4 border-dashed border-2 ml-2 my-1 " />
        <div className="rounded-full border-color_green_5 border-2 w-5 h-5"></div>
      </div>
      <span className="flex flex-col gap-y-14">
        <p className="text-color_green_7 ">Pedido recibido</p>
        <p className="text-color_green_5 ">Pedido despachado</p>
        <p className="text-color_green_5 pt-1">Pedido enviado</p>
        <p className="text-color_green_5 pt-1">Pedido entregado</p>
      </span>
    </div>
  )
}

export default PedidoTracking
