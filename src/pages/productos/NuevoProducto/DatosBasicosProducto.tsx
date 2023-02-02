import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { RadioGroup } from '@headlessui/react'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { IconNext } from 'Components/Icons'

const DatosBasicosProducto = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useOutletContext<any>()

  const alert = useContext(NotificacionContext) as any

  const handleSubmit = () => {
    if (
      !product.category ||
      !product.wholesale_form ||
      !product.form_retail
    ) {
      alert.setNotificacion({
        type: 1,
        message: 'Todos los campos son requeridos'
      })
      return
    }
    navigate('/productos/nuevo-producto/precios')
  }

  return (
    <div className='flex-col flex items-center'>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">{product.name}</p>
      <div>
        <div className='w-60'>
          <img src={product.img_local} />
        </div>

        <RadioGroup value={product.category}
          onChange={(e) => setProduct({ ...product, category: e })}
        >
          <RadioGroup.Label className={'text-color_green_7 font-light text-lg font-poppins text-center'}>¿Categoria del producto?</RadioGroup.Label>
          <div className=' grid grid-cols-2 gap-5 mt-5'>
            {inputCategories.map(v =>
              <RadioGroup.Option key={v.id} value={v.value}>
                {({ checked }) => (
                  <span className={`cursor-pointer text-color_green_6 flex gap-x-2 items-center ${checked ? 'bg-color_green_3 text-black ' : ''}`}>
                    <input
                      className='accent-violet-500'
                      checked={checked}
                      type='radio'
                      readOnly
                    />
                    <span className='capitalize'>{v.value}</span>
                  </span>
                )}
              </RadioGroup.Option>
            )}
          </div>
        </RadioGroup>

        <RadioGroup value={product.form_retail}
          onChange={(e) => setProduct({ ...product, form_retail: e })}
        >
          <RadioGroup.Label className={'text-color_green_7 font-light text-lg font-poppins text-center'}>¿Forma de venta en minoreo?</RadioGroup.Label>
          <div className=' grid grid-cols-2 gap-5 mt-5'>
            {inputRetail.map(v =>
              <RadioGroup.Option key={v.id} value={v.value}>
                {({ checked }) => (
                  <span className={`cursor-pointer text-color_green_6 flex gap-x-2 items-center ${checked ? 'bg-color_green_3 text-black ' : ''}`}>
                    <input
                      className='accent-violet-500'
                      checked={checked}
                      type='radio'
                      readOnly
                    />
                    <span className='capitalize'>{v.value}</span>
                  </span>
                )}
              </RadioGroup.Option>
            )}
          </div>
        </RadioGroup>

        <RadioGroup value={product.wholesale_form}
          onChange={(e) => setProduct({ ...product, wholesale_form: e })}
        >
          <RadioGroup.Label className={'text-color_green_7 font-light text-lg font-poppins text-center'}>¿Forma de venta en mayoreo?</RadioGroup.Label>
          <div className=' grid grid-cols-2 gap-5 mt-5'>
            {inputWholesaling.map(v =>
              <RadioGroup.Option key={v.id} value={v.value}>
                {({ checked }) => (
                  <span className={`cursor-pointer text-color_green_6 flex gap-x-2 items-center ${checked ? 'bg-color_green_3 text-black ' : ''}`}>
                    <input
                      className='accent-violet-500'
                      checked={checked}
                      type='radio'
                      readOnly
                    />
                    <span className='capitalize'>{v.value}</span>
                  </span>
                )}
              </RadioGroup.Option>
            )}
          </div>
        </RadioGroup>

      </div>
      <div className='flex justify-center'>
        <ButtonNext
          onClick={handleSubmit}
          text={<IconNext />} />
      </div>
    </div>
  )
}

const inputCategories = [
  { id: uuidv4(), value: 'frutas' },
  { id: uuidv4(), value: 'vegetales' },
  { id: uuidv4(), value: 'abarrotes' }
]
const inputRetail = [
  { id: uuidv4(), value: 'kilos' },
  { id: uuidv4(), value: 'unidades' }
]
const inputWholesaling = [
  { id: uuidv4(), value: 'costales' },
  { id: uuidv4(), value: 'bolsas' },
  { id: uuidv4(), value: 'cajones' }
]

export default DatosBasicosProducto
