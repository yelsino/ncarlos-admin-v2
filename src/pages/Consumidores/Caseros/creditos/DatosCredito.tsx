const DatosCredito = () => {
  return (
    <>
      <div className="detalle_credito overflow-y-auto">
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="  w-full">Numero</span>
          <span className="text-color_green_7 w-24 font-medium  ">0005</span>
          <span className="text-color_green_7 w-full font-medium  "></span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full">Código</span>
          <span className="text-color_green_7 w-24 font-medium  ">
            A235KG201
          </span>
          <span className="text-color_green_7 w-full font-medium  "></span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full ">Credito</span>
          <span className="text-color_green_7 w-24 font-medium  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full ">Restan</span>
          <span className="text-color_green_7 w-24 font-medium  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full ">Abonado</span>
          <span className="text-color_green_7 w-24 font-medium  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
      </div>
    </>
  )
}

export default DatosCredito
