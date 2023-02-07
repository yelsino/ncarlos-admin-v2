import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { RadioGroup } from '@headlessui/react'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { IconNext } from 'Components/Icons'
import { OutletProducto } from '../NuevoProducto'
import { ProductoContext } from 'context/productos/ProductoContext'
import { TipoVenta } from 'types-yola'

const DatosBasicosProducto = () => {
  const navigate = useNavigate()
  const {nuevoProducto, setNuevoProducto} = useOutletContext<OutletProducto>()

  const alert = useContext(NotificacionContext) as any
  const { categorias } = useContext(ProductoContext)

  const handleSubmit = () => {
    if (!nuevoProducto.categoria || !nuevoProducto.envoltorio || !nuevoProducto.tipoVenta) {
      alert.setNotificacion({
        type: 1,
        message: 'Todos los campos son requeridos'
      })
      return
    }
    navigate('/productos/nuevo-producto/precios')
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center flex-col items-center gap-y-3">
        <p className="font-poppins text-xl font-semibold">
          {nuevoProducto.nombre}
        </p>
        <div className="mb-3 flex h-[130px] w-[140px] items-center justify-center rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[20px] rounded-br-[50px] bg-emerald-300 bg-opacity-50 ">
          <img src={nuevoProducto.imagenLocal} className=" mb-3 scale-125" />
        </div>
      </div>
      <div>
        <RadioGroup
          value={nuevoProducto?.categoria?.nombre}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, categoria: { nombre: e } })
          }
        >
          <RadioGroup.Label
            className={
              'text-color_green_7 font-poppins text-center text-lg font-light'
            }
          >
            ¿Categoria del producto?
          </RadioGroup.Label>
          <div className=" mt-5 grid grid-cols-2 gap-5">
            {categorias.map((categoria) => (
              <RadioGroup.Option key={categoria._id} value={categoria.nombre}>
                {({ checked }) => (
                  <span
                    className={`text-color_green_6 flex cursor-pointer items-center gap-x-2 ${
                      checked ? 'bg-color_green_3 text-black ' : ''
                    }`}
                  >
                    <input
                      className="accent-violet-500"
                      checked={checked}
                      type="radio"
                      readOnly
                    />
                    <span className="capitalize">{categoria.nombre}</span>
                  </span>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        <RadioGroup
          value={nuevoProducto.tipoVenta}
          onChange={(e) =>
            setNuevoProducto({
              ...nuevoProducto,
              tipoVenta: e
            })
          }
        >
          <RadioGroup.Label
            className={
              'text-color_green_7 font-poppins text-center text-lg font-light'
            }
          >
            ¿Forma de venta en minoreo?
          </RadioGroup.Label>
          <div className=" mt-5 grid grid-cols-2 gap-5">
            {inputRetail.map((v) => (
              <RadioGroup.Option key={v.id} value={v.value}>
                {({ checked }) => (
                  <span
                    className={`text-color_green_6 flex cursor-pointer items-center gap-x-2 ${
                      checked ? 'bg-color_green_3 text-black ' : ''
                    }`}
                  >
                    <input
                      className="accent-violet-500"
                      checked={checked}
                      type="radio"
                      readOnly
                    />
                    <span className="capitalize">{v.value}</span>
                  </span>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        <RadioGroup
          value={nuevoProducto.envoltorio}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, envoltorio: e })
          }
        >
          <RadioGroup.Label
            className={
              'text-color_green_7 font-poppins text-center text-lg font-light'
            }
          >
            ¿Forma de venta en mayoreo?
          </RadioGroup.Label>
          <div className=" mt-5 grid grid-cols-2 gap-5">
            {inputWholesaling.map((v) => (
              <RadioGroup.Option key={v.id} value={v.value}>
                {({ checked }) => (
                  <span
                    className={`text-color_green_6 flex cursor-pointer items-center gap-x-2 ${
                      checked ? 'bg-color_green_3 text-black ' : ''
                    }`}
                  >
                    <input
                      className="accent-violet-500"
                      checked={checked}
                      type="radio"
                      readOnly
                    />
                    <span className="capitalize">{v.value}</span>
                  </span>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="flex justify-center">
        <ButtonNext onClick={handleSubmit} text={<IconNext />} />
      </div>
    </div>
  )
}


const inputRetail = [
  { id: uuidv4(), value: 'KILOGRAMOS' },
  { id: uuidv4(), value: 'FRACCIONES' },
  { id: uuidv4(), value: 'LITROS' },
  { id: uuidv4(), value: 'UNIDADES' }
]
const inputWholesaling = [
  { id: uuidv4(), value: 'COSTALES' },
  { id: uuidv4(), value: 'BOLSAS' },
  { id: uuidv4(), value: 'CAJAS' }
]

export default DatosBasicosProducto
