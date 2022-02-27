const UsuarioInfo = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center  mx-auto">
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className=" w-36 sm:w-full md:w-36 ">Nombres:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className="  w-36 sm:w-full md:w-36 truncate ">Apellidos:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className="  w-36 sm:w-full md:w-36 truncate ">N° documento:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className="  w-36 sm:w-full md:w-36 truncate ">N° celular:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className=" w-36 sm:w-full md:w-36 truncate">Correo:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className="  w-36 sm:w-full md:w-36 truncate ">Provincia:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex  sm:flex-col md:flex-row">
        <span className=" w-36 sm:w-full md:w-36 truncate">Dirección:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>

      <p className="text-base text-red-500 cursor-pointer  text-center  mt-3  w-full ">eliminar usuario</p>
    </div>
  );
}

export default UsuarioInfo;