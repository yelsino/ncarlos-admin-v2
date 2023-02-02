const DireccionUsuario = () => {
  return (
    <div className="direccion_usuario font-poppins flex w-full flex-col gap-y-10 overflow-y-auto  ">
      <p className="text-color_green_7 text-center text-lg font-medium tracking-tighter ">
        Jr agusto B. leguia 556
      </p>

      <div className="flex flex-col items-center">
        <span className="text-color_green_6 font-light">Provincia</span>
        <span className="text-color_green_7">Satipo</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-color_green_6  font-light">Referencia</span>
        <span className="text-color_green_7">
          Puerta blanca frente al estadio
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-color_green_6 font-light">Fecha registro</span>
        <span className="text-color_green_7">Lunes 22 de octubre 2022</span>
      </div>
    </div>
  )
}

export default DireccionUsuario
