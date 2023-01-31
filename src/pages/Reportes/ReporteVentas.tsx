
const ReporteVentas = () => {
  return (

    <>
      <p className=" text-color_green_7 text-3xl font-poppins font-bold border-b pb-3">Reporte ventas</p>
      <div className="my-5 flex gap-x-2 ">
        <p className="text-color_green_7 font-medium px-2 py-1 bg-color_green_2 inline rounded-full font-poppins tracking-tighter">Los ultimos 7 días</p>
        <p className="text-color_gray_2 font-medium px-2 py-1 bg-gray-100 inline rounded-full font-poppins tracking-tighter">Los ultimos 28 días</p>
        <p className="text-color_gray_2 font-medium px-2 py-1 bg-gray-100 inline rounded-full font-poppins tracking-tighter">Los ultimos 60 días</p>
        <p className="text-color_gray_2 font-medium px-2 py-1 bg-gray-100 inline rounded-full font-poppins tracking-tighter">Personalizado</p>
      </div>

      <div className="flex gap-x-2 justify-between">
        <div className="bg-color_green_2 w-44 h-28">
        </div>
        <div className="bg-gray-100 w-44 h-28">
        </div>
        <div className="bg-gray-100 w-44 h-28">
        </div>
        <div className="bg-gray-100 w-44 h-28">
        </div>
      </div>

      <div className="pt-7">
        <p className=" text-color_gray_1 text-lg font-poppins font-semibold  pb-3">Diagrama de ventas</p>

        <div className=" w-full bg-gray-100 h-56 flex justify-center items-center text-gray-600">
          aqui va el grafico
        </div>
      </div>

    </>

  )
}

export default ReporteVentas

// <div className="w-11/12 p-5 mt-5 font-poppins font-light">
// <p className=" text-center text-color_green_7 font-semibold text-lg font-poppins">Reporte de ventas</p>
// <div className="flex justify-between w-full text-color_green_6 mt-5">
//   <p>Top 10 mejores ventas</p>
//   <span ><IconSetting /></span>
// </div>

// <p className="flex w-full text-color_green_7 my-5">
//   <span className="w-6/12">Cliente</span>
//   <span className="w-3/12">Fecha</span>
//   <span className="w-3/12">Monto</span>
// </p>

// {/* ITEMS */}
// <div className="flex flex-col gap-y-5">
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
//   <p className="flex w-full text-color_green_6">
//     <span className="w-6/12">Juan vastidas</span>
//     <span className="w-3/12">12/05/22</span>
//     <span className="w-3/12 flex gap-x-3">S/.200.0 <span className="text-color_green_4"><IconLink /></span></span>
//   </p>
// </div>
// </div>
