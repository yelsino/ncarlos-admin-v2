import { IconSetting } from 'Components/Icons'
import './reportes.css'

const ReporteProductos = () => {
  return (
    <div className="font-poppins mt-5 w-11/12 p-5 font-light">
      <p className=" text-color_green_7 font-poppins text-center text-lg font-semibold">
        Reporte de productos
      </p>
      <div className="text-color_green_6 mt-5 flex w-full justify-between">
        <p>Top 10 mas vendidos</p>
        <span>
          <IconSetting />
        </span>
      </div>

      {/* ITEMS */}
      <div className="reportes_productos mt-3 flex flex-col gap-y-5 overflow-hidden  overflow-y-auto text-sm">
        {productos.map((p) => (
          <div key={p.id} className="flex  justify-between ">
            <div className="flex items-center gap-x-5">
              <div className="bg-color_green_3 h-20 w-20 rounded-lg">
                <img alt="img reporte" src={p.img} />
              </div>
              <div className="flex flex-col">
                <span className="text-color_green_5">5 unidades</span>
                <span className=" text-color_green_7">Mandarinas Wando</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className=" text-color_green_6">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReporteProductos

const productos = [
  {
    id: '1',
    name: 'Producto 1',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '2',
    name: 'Producto 2',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '3',
    name: 'Producto 3',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '4',
    name: 'Producto 4',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '5',
    name: 'Producto 5',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '6',
    name: 'Producto 6',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '7',
    name: 'Producto 7',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '8',
    name: 'Producto 8',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '9',
    name: 'Producto 9',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  },
  {
    id: '10',
    name: 'Producto 10',
    price: 'S/. 100.00',
    img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png'
  }
]
