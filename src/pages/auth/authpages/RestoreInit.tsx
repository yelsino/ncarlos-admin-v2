import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../../../assets/img/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { IconCar, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import Parrafo from 'Components/utilidades/Parrafo'
import ButtonAction from 'Components/utilidades/ButtonAction'

const RestoreInit = () => {
  const navigate = useNavigate()
  const validar = Yup.object().shape({
    email: Yup.string().email('formato invalido').required('es requerido'),
    password: Yup.string().required('es requerido')
  })
  return (
    <Formik
      initialValues={{
        email: 'yelsino@321.com',
        password: '321321'
      }}
      validationSchema={validar}
      onSubmit={() => {
        navigate('/auth/restore/finalizado')
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
          <Titulo texto="¿SIN CREDENCIALES?" />
          <Parrafo
            text="
              Si no recuerda ningún tipo de credencial, contacta con su supervisor, directamente.
              "
          />

          <div className="relative w-72 sm:w-80">
            <div className="flex gap-x-1">
              <label htmlFor="password" className="text-color_green_6">
                n° documento
              </label>
              {errors.password && touched.password ? (
                <div className="text-color_green_7">{errors.password}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="password"
                id="password"
                type="text"
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

          <div className="mt-5 w-72 sm:w-80">
            <ButtonAction type="submit" text="CONTINUAR" />
            <Link to="/auth/login">
              <p className="text-color_green_6 mb-3 cursor-pointer text-right">
                Ya me acordé!
              </p>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RestoreInit
