const DatosCompra = () => {
  return (
    <div className=" datos_compra flex h-full flex-col justify-between pb-14">
      <p className="text-color_green_6 text-center ">
        Lunes 18 de noviembre 2021
      </p>
      <p className="text-color_green_6 text-center ">n° 0005</p>
      <p className="text-center tracking-widest  ">
        <span className="bg-color_green_2 border-color_green_7 text-color_green_7 font-poppins rounded-lg border py-4 px-8 text-lg font-bold">
          # HTAAW250
        </span>
      </p>
      <p className="text-color_green_6 text-center text-2xl">S/. 159.00</p>
      <p className="text-color_green_7 font-poppins text-center text-lg font-semibold">
        cancelado
      </p>
    </div>
  )
}

export default DatosCompra
