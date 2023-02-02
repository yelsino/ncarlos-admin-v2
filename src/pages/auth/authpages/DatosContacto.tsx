import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../../../assets/img/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { UserContext } from 'context/user/userContext'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { IconCar, IconEmail, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import PuntosNext from 'Components/utilidades/PuntosNext'

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' }
]

const DatosContacto = () => {
  const { users, setUser }: any = useContext(UserContext)
  const navigate = useNavigate()
  const notificacionContex = useContext(NotificacionContext)
  const { setNotificacion }: any = notificacionContex
  const { newWorker } = users

  const validar = Yup.object().shape({
    celular: Yup.string().required('es requerido'),
    correo: Yup.string().required('es requerido'),
    direccion: Yup.string().required('es requerido')
  })

  return (
    <Formik
      initialValues={{
        celular: newWorker.celular,
        correo: newWorker.correo,
        direccion: newWorker.direccion
      }}
      validationSchema={validar}
      onSubmit={(values: any) => {
        setUser((data: any) => ({
          ...data,
          newWorker: {
            ...data.newWorker,
            celular: values.celular,
            correo: values.correo,
            direccion: values.direccion
          }
        }))
        if (
          !users.newWorker.email ||
          !users.newWorker.password ||
          !users.newWorker.apodo ||
          !users.newWorker.nombres ||
          !users.newWorker.apellidos
        ) {
          return setNotificacion({
            type: 1,
            message: 'todos los datos son requeridos'
          })
        }
        navigate('/auth/registro/finalizado')
      }}
    >
      {({ errors, touched }: any) => (
        <Form className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
          <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
            <img src={LOGO} alt="logo de negocios carlos" />
          </div>
          <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold  sm:top-10 sm:right-10 sm:flex">
            <span>
              <IconCar />
            </span>
            <h1>Administrador</h1>
          </div>
          <Titulo texto="DATOS DE CONTACTO" />

          <div className=" relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="celular" className="text-color_green_6">
                N° celular
              </label>
              {errors.celular && touched.celular ? (
                <div className="text-color_green_7">{errors.celular}</div>
              ) : null}
            </div>
            <Field
              autoComplete={'off'}
              className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              name="celular"
              id="celular"
            />
            <label
              htmlFor="celular"
              className="text-color_green_7 absolute right-2 top-7  p-3 sm:p-4"
            >
              <IconEmail />
            </label>
          </div>
          {/*  */}
          <div className="relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="correo" className="text-color_green_6">
                Correo
              </label>
              {errors.correo && touched.correo ? (
                <div className="text-color_green_7">{errors.correo}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="correo"
                id="correo"
                type="correo"
                className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              />
              <label
                htmlFor="correo"
                className="text-color_green_7 absolute right-5"
              >
                <IconKey />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="direccion" className="text-color_green_6">
                Dirección
              </label>
              {errors.direccion && touched.direccion ? (
                <div className="text-color_green_7">{errors.direccion}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="direccion"
                id="direccion"
                type="direccion"
                className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              />
              <label
                htmlFor="email"
                className="text-color_green_7 absolute right-5"
              >
                <IconKey />
              </label>
            </div>
          </div>

          <div className="w-72 sm:w-80">
            <ButtonAction type="submit" text="REGISTRAR" />
            <Link to="/auth/login">
              <p className="text-color_green_6 mb-3 cursor-pointer text-right">
                cancelar
              </p>
            </Link>
          </div>
          <PuntosNext puntos={rutas} />
        </Form>
      )}
    </Formik>
  )
}

export default DatosContacto
