import { useNavigate, useOutletContext } from 'react-router-dom'
import LOGO from 'assets/img/logo.png'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { IconEmail, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import Parrafo from 'Components/utilidades/Parrafo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import PuntosNext from 'Components/utilidades/PuntosNext'
import { SubTitulo } from 'Components/utilidades/SubTitulo'
import { TextoAccion } from 'Components/utilidades/TextoAccion'
import { FormikProps } from 'types-yola'
import { OutletRegistro } from '../Registro'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' }
]

interface FormValues {
  documento: string;
  password: string;
}

const DatosBasicos = () => {

  const {operario, setOperario} = useOutletContext<OutletRegistro>()

  const navigate = useNavigate()

  const validar = Yup.object().shape({
    documento: Yup
      .string()
      .max(20, 'maximo 20 caracteres')
      .min(7, 'minimo 7 caracteres')
      .required('es requerido'),
    password: Yup
      .string()
      .min(6, 'minimo 6 caracteres')
      .max(30, 'maximo 30 caracteres')
      .required('es requerido')
  });


  return (
    <Formik
      initialValues={
        {
          documento: operario?.documento,
          password: operario?.password
        } as FormValues
      }
      validationSchema={validar}
      onSubmit={(values) => {
        setOperario((prev) => ({
          ...prev, 
          documento: values?.documento, 
          password: values?.password
        }))
        navigate('/auth/registro/datos-personales')
      }}
    >
      {({ errors, touched }: FormikProps<FormValues>) => (
        <Form className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
          <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
            <img src={LOGO} alt="logo negocios carlos" />
          </div>
          <SubTitulo />
          <Titulo texto="REGISTRO" />
          <Parrafo
            text="
              Más vale una contraseña segura que una amonestación segura 😉
              "
          />

          <InputFormik 
            nombre="documento"
            errors={errors}
            touched={touched}
            titulo='Documento (DNI)'
          >
            <IconEmail />
          </InputFormik>

          <InputFormik 
            nombre="password"
            errors={errors}
            touched={touched}
            titulo='Contraseña'
            type='password'
          >
            <IconKey />
          </InputFormik>

          <div className="w-72 sm:w-80">
            <ButtonAction type="submit" text="CONTINUAR" />
            <TextoAccion direccion="/auth/login" texto="Ya estoy registrado" />
          </div>
          <PuntosNext puntos={rutas} />
        </Form>
      )}
    </Formik>
  )
}

export default DatosBasicos
