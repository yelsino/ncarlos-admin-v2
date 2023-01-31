const DireccionUsuario = () => {
  return (
    <div className="direccion_usuario overflow-y-auto font-poppins flex flex-col gap-y-10 w-full  ">
      <p className="text-color_green_7 text-lg font-medium text-center tracking-tighter ">Jr agusto B. leguia 556</p>

      <div className="flex flex-col items-center">
        <span className="text-color_green_6 font-light">Provincia</span>
        <span className="text-color_green_7">Satipo</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-color_green_6  font-light">Referencia</span>
        <span className="text-color_green_7">Puerta blanca frente al estadio</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-color_green_6 font-light">Fecha registro</span>
        <span className="text-color_green_7">Lunes 22 de octubre 2022</span>
      </div>
    </div>
  )
}

export default DireccionUsuario
