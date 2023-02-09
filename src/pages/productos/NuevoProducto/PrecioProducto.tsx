import { useContext } from 'react'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import { IconNext } from 'Components/Icons'
import { OutletProducto } from '../NuevoProducto'
import { Formik, Form } from 'formik'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'
import * as Yup from 'yup'
import ViewProduct from 'Components/Organismos/ViewProduct/ViewProduct'
import ButtonAction from 'Components/utilidades/ButtonAction'
interface FormValues {
  precioVenta: number
  cantidadPorUnidad: number
  // precioCompra: number
}

const PrecioProducto = () => {
  const navigate = useNavigate()
  const { nuevoProducto, setNuevoProducto } = useOutletContext<OutletProducto>()
  const alert = useContext(NotificacionContext)

  const handleSubmit = (values:FormValues) => {
    setNuevoProducto((prev) => ({
      ...prev, 
      precioVenta: values?.precioVenta,
      cantidadPorUnidad: values?.cantidadPorUnidad,
    }))
    navigate('/productos/nuevo-producto/precios-minoreo')
  }

  const validar = Yup.object().shape({
    precioVenta: Yup
      .number()
      .moreThan(0, 'mayor a 0')
      .lessThan(5000, 'menor a 5000')
      .required('es requerido'),
      cantidadPorUnidad: Yup
      .number()
      .moreThan(0, 'mayor a 0')
      .lessThan(5000, 'menor a 5000')
      .required('es requerido'),
      
    // precioCompra: Yup.string().required('es requerido')
  })

  return (
    <>
      <Formik<FormValues>
        initialValues={{
          precioVenta: nuevoProducto.precioVenta,
          cantidadPorUnidad: nuevoProducto.cantidadPorUnidad
          // precioCompra: nuevoProducto.precioCompra
        }}
        validationSchema={validar}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, handleChange, values }) => (
          <Form>
            
            <div className="flex justify-center flex-col items-center gap-y-3">
              <p className="font-poppins text-xl font-semibold">
                {nuevoProducto.nombre}
              </p>
              <div className="mb-3 flex h-[130px] w-[140px] items-center justify-center rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[20px] rounded-br-[50px] bg-emerald-300 bg-opacity-50 ">
                <img
                  src={nuevoProducto.imagenLocal}
                  className=" mb-3 scale-125"
                />
              </div>

              <p className="text-color_green_6 text-lg text-center">
                Este producto se vende por{' '}
                {nuevoProducto.envoltorio.toLocaleLowerCase()} y{' '}
                {nuevoProducto.tipoVenta.toLocaleLowerCase()}
              </p>
            </div>

            <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light">
              Configuración de precios <br /> al mayoreo
            </p>
            <div className="flex  flex-col items-center w-72 mb-5 mx-auto gap-y-3">
              <InputFormik
                nombre="precioVenta"
                errors={errors}
                type="number"
                touched={touched}
                titulo={`Precio por ${nuevoProducto.envoltorio.toLocaleLowerCase()}`}
                value={values.precioVenta}
                handleChange={handleChange}
              />

              <InputFormik
                nombre="cantidadPorUnidad"
                errors={errors}
                touched={touched}
                type="number"
                titulo={`${nuevoProducto.tipoVenta} por ${nuevoProducto.envoltorio}`}
                value={values.cantidadPorUnidad}
                handleChange={handleChange}
              />

              <div className="flex justify-center">
                <ButtonAction
                  text='SIGUIENTE'
                  type='submit'
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PrecioProducto
