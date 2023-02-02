import ButtonAction from '../../../../Components/utilidades/ButtonAction'

const NuevoAbono = () => {
  return (
    <div className="mt-7 flex flex-col gap-y-7 ">
      <div>
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="  w-full">Numero</span>
          <span className="text-color_green_7 w-24 font-medium  ">0005</span>
          <span className="text-color_green_7 w-full font-medium  "></span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full">Código</span>
          <span className="text-color_green_7 w-24 font-medium  ">
            A235KG201
          </span>
          <span className="text-color_green_7 w-full font-medium  "></span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
        <p className="text-color_green_5 flex  justify-center text-center">
          <span className="w-full ">Pendiente</span>
          <span className="text-color_green_7 w-24 font-medium  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
      </div>

      <div className="relative flex items-center  ">
        <input
          autoComplete={'off'}
          name="password"
          id="text"
          type="text"
          placeholder="0"
          className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 pl-11  text-base outline-none sm:text-lg"
        />
      </div>

      <ButtonAction text="ABONAR" />
    </div>
  )
}

export default NuevoAbono
