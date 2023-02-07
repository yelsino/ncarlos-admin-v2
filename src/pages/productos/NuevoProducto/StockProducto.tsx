import { IconNext } from 'Components/Icons'
import { Formik, Form } from 'formik'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { OutletProducto } from '../NuevoProducto'
import * as Yup from 'yup'
import ButtonAction from 'Components/utilidades/ButtonAction'

interface FormValues {
  unidades: number
  sobrante: number
  alertaCantidad: number
}


const StockProducto = () => {
  const { nuevoProducto, setNuevoProducto} = useOutletContext<OutletProducto>();

  const navigate = useNavigate() as any

  // const alert = useContext(NotificacionContext) as any

  const handleSubmit = (values) => {

    setNuevoProducto((prev)=>({
      ...prev,
      unidades: values.unidades,
      sobrante: values.sobrante,
      alertaCantidad: values.alertaCantidad
    }))
   
    navigate('/productos/nuevo-producto/resumen')
  }


  const validar = Yup.object().shape({
    unidades: Yup
      .number()
      .max(5000,"maximo 5000")
      .required('es requerido'),
    sobrante: Yup
      .number()
      .max(1000,"maximo 1000")
      .required('es requerido'),
    alertaCantidad: Yup
      .number()
      .max(100,"maximo 100")
      .required('es requerido'),
  })


  return (
    <>
      <Formik<FormValues>
        initialValues={{
          unidades: 0,
          sobrante: 0,
          alertaCantidad: 0
        }}
        onSubmit={handleSubmit}
        validationSchema={validar}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <div className="w-80 mx-auto">
              <div className="w-full">
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
                </div>

                <div className="text-color_green_6 mt-3 w-full lowercase">
                  <p className="flex  justify-between px-5">
                    <span className="  ">
                      Cantidad por {nuevoProducto?.envoltorio}
                    </span>
                    <span className="text-color_green_7    ">
                      {nuevoProducto?.cantidadPorUnidad}{' '}
                      {nuevoProducto?.tipoVenta}
                    </span>
                  </p>
                  <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />

                  <p className="flex justify-between  px-5">
                    <span className="  ">
                      Precio por {nuevoProducto?.envoltorio}
                    </span>
                    <span className="text-color_green_7  ">
                      S/. {nuevoProducto.precioVenta}
                    </span>
                  </p>
                  <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />

                  <p className="flex justify-between  px-5">
                    <span className="  ">
                      Precio por {nuevoProducto?.tipoVenta}
                    </span>
                    <span className="text-color_green_7  ">
                      s/.
                      {nuevoProducto.precioUnidad}{' '}
                    </span>
                  </p>
                </div>

                <p className="text-color_green_7 font-poppins my-5 text-center text-lg font-light">
                  Configuración de stock
                </p>

                <div className="flex w-full flex-col items-center gap-y-4">
                  <InputFormik
                    nombre="unidades"
                    errors={errors}
                    touched={touched}
                    type="number"
                    titulo={`¿Cuantos ${nuevoProducto.envoltorio} tienes?`}
                    value={values.unidades}
                    handleChange={handleChange}
                  />
                  <InputFormik
                    nombre="sobrante"
                    errors={errors}
                    touched={touched}
                    type="number"
                    titulo={`¿Cuantos ${nuevoProducto.tipoVenta} sobran?`}
                    value={values.sobrante}
                    handleChange={handleChange}
                  />

                  <InputFormik
                    nombre="alertaCantidad"
                    errors={errors}
                    touched={touched}
                    type="number"
                    titulo={`¿Cantidad minima para alertar?`}
                    value={values.alertaCantidad}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <ButtonAction type="submit" text="Siguiente" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StockProducto
