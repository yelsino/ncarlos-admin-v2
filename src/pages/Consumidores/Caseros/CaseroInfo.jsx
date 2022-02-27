const CaseroInfo = () => {
  return (
    <div className="flex flex-col gap-5    mx-auto  mt-5 overflow-y-auto datos_casero">
      <p className="text-color_green_6  w-full flex ">
        <span className="w-36">Nombres:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className="w-36 ">Apellidos:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className="  w-36 ">N° documento:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className="  w-36 ">N° celular:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className=" w-36">Correo:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className="  w-36 ">Provincia:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>
      <p className="text-color_green_6  w-full flex">
        <span className=" w-36">Dirección:</span>
        <span className="text-color_green_7">Yelsin Yelsiño</span>
      </p>

      <p className="text-base text-red-500 cursor-pointer  text-center  mt-3  w-full ">eliminar usuario</p>
    </div>
  );
}

export default CaseroInfo;