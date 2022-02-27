const PedidoDetalle = () => {
  return (
    <div className="detelle_pedido overflow-y-auto">
      <h2 className=' text-center bg-color_green_3  text-color_green_7 tracking-widest py-4 rounded-lg text-lg font-semibold'>Orden #005 - Recibido</h2>

      <p className="text-center text-color_green_7 text-lg mt-4">Juan Alverto Coñazos</p>
      <div className=" overflow-y-auto text-color_green_6 mt-7">
        <p className="flex  px-5 justify-between">
          <span className="  ">Cantidad productos</span>
          <span className="text-color_green_7    ">14</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex  text-color_green_6 px-5 justify-between">
          <span className=" ">Codigo compra</span>
          <span className="text-color_green_7  ">FAT20K02</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex   px-5 justify-between">
          <span className=" ">Fecha de compra</span>
          <span className="text-color_green_7  ">12/05/2022</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Total de la compra</span>
          <span className="text-color_green_7  ">S/. 125.00</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Estado de la compra</span>
          <span className="text-color_green_7  ">entregado</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

      </div>
    </div>
  );
}

export default PedidoDetalle;