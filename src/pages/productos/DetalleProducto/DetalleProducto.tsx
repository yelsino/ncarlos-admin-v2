import ButtonAction from 'Components/utilidades/ButtonAction'
import { useNavigate } from 'react-router-dom'
import mandarina from '../../../assets/img/mandarina.png'

const DetalleProducto = () => {
  const navigate = useNavigate()
  return (
    <div className="mx-auto  max-w-sm overflow-y-auto pt-10">
      <div className="flex w-full flex-col items-center ">
        <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
          Mandarina wando
        </p>
        <div className="w-full">
          <div className="mx-auto w-28">
            <img src={mandarina} />
          </div>

          <div className="  text-color_green_6 mt-3 w-full ">
            <p className="flex  justify-between px-5">
              <span className="  ">Categoria</span>
              <span className="text-color_green_7    ">frutas</span>
            </p>
            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Cantidad por cajón</span>
              <span className="text-color_green_7  ">10 kilos</span>
            </p>

            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Precio por cajón</span>
              <span className="text-color_green_7  ">S/. 25.00</span>
            </p>

            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Precio por kilo</span>
              <span className="text-color_green_7  ">S/. 5.00</span>
            </p>

            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Total en cajas</span>
              <span className="text-color_green_7  ">10 cajas 5 kilos</span>
            </p>

            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Total en kilos</span>
              <span className="text-color_green_7  ">105 kilos</span>
            </p>

            <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

            <p className="flex justify-between  px-5">
              <span className="  ">Alertarme en</span>
              <span className="text-color_green_7">10 kilos</span>
            </p>
          </div>
        </div>
        <div className="my-5 w-full">
          <ButtonAction
            onClick={() => navigate('/productos/nuevo-producto/nombre')}
            text=" ACTUALIZAR "
          />
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto
