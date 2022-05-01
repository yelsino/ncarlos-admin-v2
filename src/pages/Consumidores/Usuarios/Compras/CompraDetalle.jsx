const CompraDetalle = () => {
  return (
    <>
      <div className=" text-color_green_6 mt-10">
        <p className="flex  px-5 justify-between">
          <span className="  ">Cantidad productos</span>
          <span className="text-color_green_7    ">14</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

        <p className="flex  text-color_green_6 px-5 justify-between">
          <span className=" ">Codigo compra</span>
          <span className="text-color_green_7  ">FAT20K02</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

        <p className="flex   px-5 justify-between">
          <span className=" ">Fecha</span>
          <span className="text-color_green_7  ">12/05/2022</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Total de la compra</span>
          <span className="text-color_green_7  ">S/. 125.00</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Estado de la compra</span>
          <span className="text-color_green_7  ">entregado</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

      </div>
    </>
  );
}

export default CompraDetalle;