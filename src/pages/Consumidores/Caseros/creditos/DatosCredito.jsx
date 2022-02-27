const DatosCredito = () => {
  return (
    <>

      <div className="detalle_credito overflow-y-auto">
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="  w-full">Numero</span>
          <span className="text-color_green_7 font-medium w-24  ">0005</span>
          <span className="text-color_green_7 font-medium w-full  "></span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full">Código</span>
          <span className="text-color_green_7 font-medium w-24  ">A235KG201</span>
          <span className="text-color_green_7 font-medium w-full  "></span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Credito</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Restan</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Abonado</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
      </div>
    </>
  );
}

export default DatosCredito;