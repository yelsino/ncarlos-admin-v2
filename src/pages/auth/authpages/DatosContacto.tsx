import { useNavigate, useOutletContext } from 'react-router-dom'
import LOGO from 'assets/img/logo.png'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { IconDireccion, IconEmail, IconPhone, IconUsersInactive } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import PuntosNext from 'Components/utilidades/PuntosNext'
import { TextoAccion } from 'Components/utilidades/TextoAccion'
import { SubTitulo } from 'Components/utilidades/SubTitulo'
import { FormikProps } from 'types-yola'
import { OutletRegistro } from '../Registro'
import { AuthContext } from 'context/auth/AuthContext'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' }
]

interface FormValues {
  celular: string;
  correo: string;
  direccion: string;
}

const DatosContacto = () => {

  const navigate = useNavigate()
  const {operario, setOperario} = useOutletContext<OutletRegistro>()
  const { setNotificacion } = useContext(NotificacionContext);
  const { registrarOperario } = useContext(AuthContext)

  const validar = Yup.object().shape({
    celular: Yup
      .string()
      .required('es requerido')
      .min(9, 'minimo 9 caracteres')
      .max(9, 'maximo 9 caracteres'),
    correo: Yup
      .string()
      .email('formato invalido')
      .required('es requerido'),
    direccion: Yup
      .string()
      .required('es requerido')
  });

  const handleSubmit = async (values: FormValues) => {
    setOperario((prev)=>({
      ...prev, 
      celular: values.celular, 
      correo: values.correo, 
      direccion: values.direccion
    }))
    if (
      !operario.password ||
      !operario.nombres ||
      !operario.apellidos ||
      !operario.documento ||
      !values.correo ||
      !values.celular ||
      !values.direccion 
    ) {
      return setNotificacion({
        type: 1,
        message: 'Verifique que todos los campos esten llenos'
      })
    }

    const respuesta = await registrarOperario({
      direccion: values.direccion,
      celular: `${values.celular}`,
      correo: values.correo,
      sobreNombre: operario.sobreNombre,
      nombres: operario.nombres,
      apellidos: operario.apellidos,
      documento: `${operario.documento}`,
      password: operario.password
    });

    if(!respuesta.ok)
    return setNotificacion({type: 1,message: respuesta.mensaje})
    
    navigate('/auth/registro/finalizado')

  }

  return (
    <Formik
      initialValues={{
        celular: operario?.celular,
        correo: operario?.correo,
        direccion: operario?.direccion
      }}
      validationSchema={validar}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched }:FormikProps<FormValues>) => (
        <Form className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
          <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
            <img src={LOGO} alt="logo de negocios carlos" />
          </div>
         <SubTitulo/>
          <Titulo texto="DATOS DE CONTACTO" />

          <InputFormik 
            nombre="celular"
            errors={errors}
            touched={touched}
            titulo='N° celular'
            type='number'
          >
            <IconPhone />
          </InputFormik>

          <InputFormik 
            nombre="correo"
            errors={errors}
            touched={touched}
            titulo='Correo'
            type='email'
          >
            <IconEmail />
          </InputFormik>

          <InputFormik 
            nombre="direccion"
            errors={errors}
            touched={touched}
            titulo='Dirección de domicilio'
          >
            <IconDireccion />
          </InputFormik>

          <div className="w-72 sm:w-80">
            <ButtonAction type="submit" text="REGISTRAR" />
            <TextoAccion
              texto="cancelar registro"
              direccion='/auth/login'
            />
          
          </div>
          <PuntosNext puntos={rutas} />
        </Form>
      )}
    </Formik>
  )
}

export default DatosContacto
