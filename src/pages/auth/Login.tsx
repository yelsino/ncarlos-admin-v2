import { useContext } from 'react'
import IMGDEVELOPER from '../../assets/img/developer.svg'
import LOGO from '../../assets/img/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { AuthContext } from 'context/auth/AuthContext'
import { IconCar, IconEmail, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import ButtonAction from 'Components/utilidades/ButtonAction'

const Login = () => {
  const notificacionContex = useContext(NotificacionContext)
  const { setNotificacion }: any = notificacionContex
  const { userLogin } = useContext(AuthContext)
  // const navigate = useNavigate();

  const validar = Yup.object().shape({
    email: Yup.string().email('formato invalido').required('es requerido'),
    password: Yup.string().required('es requerido')
  })

  return (
    <div className="bg-color_green_1 flex h-full items-center justify-center">
      <div className="flex  max-w-5xl items-center justify-center ">
        <Formik
          initialValues={{
            email: 'yelsin@gmail.com',
            password: 'yelsin312@231'
          }}
          validationSchema={validar}
          onSubmit={async (values: any) => {
            const res = await userLogin({
              correo: values.email,
              password: values.password
            })
            if (!res.ok) {
              return setNotificacion({ type: 1, message: res.mensaje })
            }
          }}
        >
          {({ errors, touched }: any) => (
            <Form className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
              <div className=" w-24 select-none  object-contain sm:w-40 md:hidden">
                <img src={LOGO} alt="logo de negocios carlos" />
              </div>
              <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold sm:top-10 sm:right-10 sm:flex">
                <span>
                  <IconCar />
                </span>
                <h2>Administrador</h2>
              </div>
              <Titulo texto="INICIAR SESIÓN" />
              <div className=" relative w-72 sm:w-80">
                <div className="flex gap-x-1">
                  <label htmlFor="password" className="text-color_green_6">
                    Email
                  </label>
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <Field
                  autoComplete={'off'}
                  className=" text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
                  name="email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="text-color_green_7 absolute right-2 top-7 p-3 sm:p-4"
                >
                  <IconEmail />
                </label>
              </div>
              <div className="relative w-72 sm:w-80">
                <div className="flex gap-x-1">
                  <label htmlFor="password" className="text-color_green_6">
                    Contraseña
                  </label>
                  {errors.password && touched.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>
                <div className="relative flex items-center">
                  <Field
                    autoComplete={'off'}
                    name="password"
                    id="password"
                    type="password"
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
                <ButtonAction type="submit" text="CONTINUAR" />

                <Link
                  to="/auth/restore"
                  className="text-color_green_4 cursor-pointer text-center"
                >
                  <p className="text-color_green_6 mb-3 cursor-pointer text-center">
                    Olvidé mis credenciales
                  </p>
                </Link>
                <Link
                  to="/auth/registro"
                  className="text-color_green_4 cursor-pointer text-center"
                >
                  <p>Registrarme</p>
                </Link>
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
