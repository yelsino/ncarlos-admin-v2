import ButtonAction from "../../../../Components/utilidades/ButtonAction";


const NuevoAbono = () => {
  return (
    <div className="flex flex-col gap-y-7 mt-7 ">
      <div>
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="  w-full">Numero</span>
          <span className="text-color_green_7 font-medium w-24  ">0005</span>
          <span className="text-color_green_7 font-medium w-full  "></span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full">Código</span>
          <span className="text-color_green_7 font-medium w-24  ">A235KG201</span>
          <span className="text-color_green_7 font-medium w-full  "></span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />
        <p className="text-center flex  justify-center text-color_green_5">
          <span className="w-full ">Pendiente</span>
          <span className="text-color_green_7 font-medium w-24  ">259.00</span>
          <span className=" w-full">soles</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />
      </div>

      <div className="relative flex items-center  ">
        <input
          autoComplete={"off"}
          name="password"
          id='text'

          type="text"
          placeholder="0"
          className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 pl-11'
        />
      </div>

      <ButtonAction text='ABONAR' />
    </div>
  );
}

export default NuevoAbono;