import { useNavigate, useOutletContext } from 'react-router-dom'
import LOGO from 'assets/img/logo.png'
import { v4 as uuidv4 } from 'uuid'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextoAccion } from 'Components/utilidades/TextoAccion'
import { IconCar, IconUsersInactive } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import PuntosNext from 'Components/utilidades/PuntosNext'
import { OutletRegistro } from '../Registro'
import { useContext } from 'react'
import { AuthContext } from 'context/auth/AuthContext'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' }
]

const DatosPersonales = () => {
  const {operario, setOperario} = useOutletContext<OutletRegistro>()
  const navigate = useNavigate();

  const validar = Yup.object().shape({
    sobreNombre: Yup
      .string()
      .max(15, 'maximo 15 caracteres'),
    nombres: Yup
      .string()
      .max(40, 'maximo 40 caracteres')
      .required('es requerido'),
    apellidos: Yup
      .string()
      .max(40, 'maximo 40 caracteres')
      .required('es requerido')
  })

  return (
    <Formik
      initialValues={{
        sobreNombre: operario?.sobreNombre,
        nombres: operario?.nombres,
        apellidos: operario?.apellidos
      }}
      validationSchema={validar}
      onSubmit={async (values) => {
        setOperario((prev) => ({
          ...prev,
          sobreNombre: values.sobreNombre,
          nombres: values.nombres,
          apellidos: values.apellidos
        }));

        navigate('/auth/registro/datos-contacto')

      }}
    >
      {({ errors, touched, handleChange }) => (
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


          <InputFormik
            nombre="nombres"
            errors={errors}
            touched={touched}
            titulo='Nombres'
            handleChange={handleChange}
          >
            <IconUsersInactive stile={`h-6 w-6`} />
          </InputFormik>

          <InputFormik
            nombre="apellidos"
            errors={errors}
            touched={touched}
            titulo='Apellidos'
            handleChange={handleChange}
          >
            <IconUsersInactive stile={`h-6 w-6`} />
          </InputFormik>

          <InputFormik
            nombre="sobreNombre"
            errors={errors}
            touched={touched}
            titulo='Sobre Nombre'
            handleChange={handleChange}
          >
            <IconUsersInactive stile={`h-6 w-6`} />
          </InputFormik>

          {/*  */}

          <div className="w-72 sm:w-80">
            <ButtonAction type="submit" text="CONTINUAR" />
            <TextoAccion
              direccion='/auth/login'
              texto="cancelar"
            />

          </div>
          <PuntosNext puntos={rutas} />
        </Form>
      )}
    </Formik>
  )
}

export default DatosPersonales
