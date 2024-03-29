import { useContext } from 'react'
import IMGDEVELOPER from 'assets/img/developer.svg'
import LOGO from 'assets/img/logo.png'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { NotificacionContext } from 'context/notificaciones/notificacionContext'
import { AuthContext } from 'context/auth/AuthContext'
import { IconEmail, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import { TextoAccion } from 'Components/utilidades/TextoAccion'
import { SubTitulo } from 'Components/utilidades/SubTitulo'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'

interface FormValues {
  documento: string;
  password: string;
}

const Login = () => {
  const notificacionContex = useContext(NotificacionContext)
  const { setNotificacion }: any = notificacionContex
  const { operarioLogin } = useContext(AuthContext)
  // const navigate = useNavigate();

  const validar = Yup.object().shape({
    documento: Yup.string().required('es requerido'),
    password: Yup.string().required('es requerido')
  })

  return (
    <div className="bg-color_green_1 flex h-full items-center justify-center">
      <div className="flex mx-auto items-center justify-center ">
        <Formik
          initialValues={{
            documento: '77068139',
            password: '77068139'
          } as FormValues}
          validationSchema={validar}
          onSubmit={async (values: any) => {
            
            const res = await operarioLogin({
              documento: values.documento,
              password: values.password
            })
            if (!res.ok) {
              return setNotificacion({ type: 1, message: res.mensaje })
            }
          }}
        >
          {({errors, touched, isSubmitting, handleChange, values}) => (
            <Form className="flex w-full flex-col items-center gap-5  md:w-1/2  mx-auto ">
              <div className=" w-24  object-contain sm:w-40 md:hidden">
                <img src={LOGO} alt="logo de negocios carlos" />
              </div>
             
              <SubTitulo/>
              <Titulo texto="INICIAR SESIÓN" />

              <div className='md:w-8/12 w-full'>
              <InputFormik 
                nombre="documento"
                errors={errors}
                touched={touched}
                titulo='Documento'
                handleChange={handleChange}
                value={values.documento}
              >
                <IconEmail />
              </InputFormik>

              <InputFormik 
                nombre="password"
                errors={errors}
                touched={touched}
                titulo='Contraseña'
                type='password'
                handleChange={handleChange}
                value={values.password}
              >
                <IconKey />
              </InputFormik>
              </div>

              <div className="w-72 sm:w-80 flex flex-col gap-y-2">
                <ButtonAction type="submit" text="CONTINUAR" esperando={isSubmitting} />

                <TextoAccion
                  texto="Olvidé mis credenciales"
                  direccion='/auth/restore'
                />
               
                <TextoAccion 
                  texto="¿No tengo una cuenta?"
                  direccion='/auth/registro'
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className="hidden p-10 md:flex md:w-1/2">
          <div className="w-10/12">
            <img src={IMGDEVELOPER} alt="img de administrador" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
