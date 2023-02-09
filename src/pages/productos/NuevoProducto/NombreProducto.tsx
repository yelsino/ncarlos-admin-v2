import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import IMG from '../../../assets/img/iconito.png'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { IconCameraOutline, IconNext } from 'Components/Icons'
import { OutletProducto } from '../NuevoProducto'
import { Field, Form, Formik } from 'formik'
import { FormikProps } from 'types-yola'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'
import * as Yup from 'yup'
import ButtonAction from 'Components/utilidades/ButtonAction'
interface FormValues {
  nombre: string
  imagen: any
}

const NombreProducto = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // context
  const {nuevoProducto,setNuevoProducto} = useOutletContext<OutletProducto>()

  const alert = useContext(NotificacionContext) as any

  const handleSubmit = (values:FormValues) => {
    if (!nuevoProducto.imagenLocal) {
      alert.setNotificacion({
        type: 1,
        message: 'Agrega una imagen'
      })
      return
    }

    setNuevoProducto((prev) => ({
      ...prev, 
      nombre: values?.nombre
    }))
    navigate('/productos/nuevo-producto/datos-basicos')
  }

  useEffect(() => {
    localStorage.setItem(
      'LSproduct',
      JSON.stringify({
        ...nuevoProducto,
        category: location.state?.from
      })
    )
  }, [])

  const validar = Yup.object().shape({
    imagen: Yup.mixed().required('Agrega una imagen'),
    nombre: Yup.string().required('es requerido').max(25, 'maximo 25 caracteres')
  })

  const encodeImageFileAsURL = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = function () {
      setNuevoProducto({
        ...nuevoProducto,
        imagen: file,
        imagenLocal: reader.result as any
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <Formik<FormValues>
        initialValues={{
          nombre: nuevoProducto.nombre,
          imagen: JSON.stringify(nuevoProducto.imagenLocal)
        }}
        validationSchema={validar}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, isSubmitting, handleChange,values }) => (
          <Form>
            <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
              {nuevoProducto.nombre ? nuevoProducto.nombre : 'Nuevo Producto'}
            </p>

            <div className="flex w-full flex-col items-center ">
              <div className="mt-10 ">
                
                <label
                  className={`${
                    nuevoProducto.imagenLocal
                      ? 'border-color_green_7 bg-color_green_3 text-color_green_7'
                      : ''
                  } flex border px-5 py-2 rounded-full items-center cursor-pointer hover:bg-color_green_3 hover:text-color_green_7 font-medium hover:border-color_green_7 transition duration-300 ease-in-out`}
                  htmlFor="imagen"
                >
                  Imagen <IconCameraOutline />
                </label>
               
                    <input
                      id="imagen"
                      type="file"
                      name="imagen"
                      className='hidden'
                      onChange={evento => {
                        encodeImageFileAsURL(evento)
                      }}                      
                    />
              </div>


          <div className="flex justify-center flex-col items-center gap-y-3 pt-5">
              
              <div className="mb-3 flex h-[130px] w-[140px] items-center justify-center rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[20px] rounded-br-[50px] bg-emerald-300 bg-opacity-50 ">

              <img
                className='mb-3 scale-125'
                  src={
                    nuevoProducto.imagenLocal ? nuevoProducto.imagenLocal : IMG
                  }
                />
              </div>

            
            </div>
              
              <div className="w-72 mb-5">
                <InputFormik
                  nombre="nombre"
                  errors={errors}
                  touched={touched}
                  titulo="Nombre"
                  value={values.nombre}
                  handleChange={handleChange}

                />
              </div>
            </div>

            <div className="flex justify-center">
              <ButtonAction
                text="SIGUIENTE"
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default NombreProducto
