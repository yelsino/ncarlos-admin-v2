import { Link } from 'react-router-dom'
import LOGO from '../../../assets/img/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { IconCar, IconKey } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import Parrafo from 'Components/utilidades/Parrafo'
import ButtonAction from 'Components/utilidades/ButtonAction'
import { useContext } from 'react'
import { AuthContext } from 'context/auth/AuthContext'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { TextoAccion } from 'Components/utilidades/TextoAccion'

const RestoreInit = () => {
  
  const { restaurarOperario } = useContext(AuthContext);
  const { setNotificacion } = useContext(NotificacionContext)
  
  const validar = Yup.object().shape({
    document: Yup.string().required('es requerido'),
  })

  return (
    <Formik
      initialValues={{
        document: '77068150',
      }}
      validationSchema={validar}
      onSubmit={async (values: any) => {
        const res = await restaurarOperario(values.document)
        if (!res.ok) return setNotificacion({ type: 1, message: res.mensaje })
      }}
    >
      {({ errors, touched }: any) => (
        <Form 
          className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2"
        >
          <div className="w-24 object-contain  sm:w-32 md:hidden md:w-32 ">
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
              <label htmlFor="document" className="text-color_green_6">
                N° documento
              </label>
              {errors.document && touched.document ? (
                <div className="text-color_green_7">{errors.document}</div>
              ) : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={'off'}
                name="document"
                id="document"
                type="text"
                className="text-color_green_7 bg-color_green_3 w-full rounded-md p-4 text-base  outline-none sm:text-lg tracking-widest font-poppins"
              />
              <label
                htmlFor="email"
                className="text-color_green_7 absolute right-5"
              >
                <IconKey />
              </label>
            </div>
          </div>

          <div className="mt-5 w-72 sm:w-80 flex flex-col">
            <ButtonAction type="submit" text="CONTINUAR"  />
            <TextoAccion
              direccion='/auth/login'
              texto='Ya me acordé!'
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RestoreInit
