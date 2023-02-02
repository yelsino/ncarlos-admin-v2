import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from '../../../Components/Icons'
import { v4 as uuidv4 } from 'uuid'
import { Field, Form, Formik } from 'formik'
import Titulo from '../../../Components/utilidades/Titulo'
import ButtonAction from '../../../Components/utilidades/ButtonAction'
import PuntosNext from '../../../Components/utilidades/PuntosNext'
import * as Yup from 'yup'
import { useContext } from 'react'
import { UserContext } from 'context/user/userContext'

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' }
]

const DatosPersonales = () => {
  const { users, setUser }: any = useContext(UserContext)
  const { newWorker } = users
  const navigate = useNavigate()

  console.log(uuidv4())

  const validar = Yup.object().shape({
    apodo: Yup.string().required('es requerido'),
    nombres: Yup.string().required('es requerido'),
    apellidos: Yup.string().required('es requerido')
  })

  return (
    <Formik
      initialValues={{
        apodo: newWorker.apodo,
        nombres: newWorker.nombres,
        apellidos: newWorker.apellidos
      }}
      validationSchema={validar}
      onSubmit={(values: any) => {
        setUser((data: any) => ({
          ...data,
          newWorker: {
            ...data.newWorker,
            apodo: values.apodo,
            nombres: values.nombres,
            apellidos: values.apellidos
          }
        }))
        navigate('/auth/registro/datos-contacto')
      }}
    >
      {({ errors, touched }: any) => (
        <Form className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
          <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
            <img src={LOGO} alt="logo negocios carlos" />
          </div>
          <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold  sm:top-10 sm:right-10 sm:flex">
            <span>
              <IconCar />
            </span>
            <h1>Administrador</h1>
          </div>
          <Titulo texto="DATOS DE PERSONALES" />

          <div className=" relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="password" className="text-color_green_6">
                Apodo
              </label>
              {errors.apodo && touched.apodo ? (
                <div className="text-color_green_7">{errors.apodo}</div>
              ) : null}
            </div>
            <Field
              autoComplete={'off'}
              className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              name="apodo"
              id="apodo"
            />
            <label
              htmlFor="apodo"
              className="text-color_green_7 absolute right-2 top-7  p-3 sm:p-4"
            >
              <IconEmail />
            </label>
          </div>
          {/*  */}
          <div className="relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="nombres" className="text-color_green_6">
                Nombres
              </label>
              {errors.nombres && touched.nombres ? (
                <div className="text-color_green_7">{errors.nombres}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="nombres"
                id="nombres"
                type="nombres"
                className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              />
              <label
                htmlFor="nombres"
                className="text-color_green_7 absolute right-5"
              >
                <IconKey />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="apellidos" className="text-color_green_6">
                Apellidos
              </label>
              {errors.apellidos && touched.apellidos ? (
                <div className="text-color_green_7">{errors.apellidos}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="apellidos"
                id="apellidos"
                type="apellidos"
                className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
              />
              <label
                htmlFor="apellidos"
                className="text-color_green_7 absolute right-5"
              >
                <IconKey />
              </label>
            </div>
          </div>

          <div className="w-72 sm:w-80">
            <ButtonAction type="submit" text="CONTINUAR" />
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

export default DatosPersonales
