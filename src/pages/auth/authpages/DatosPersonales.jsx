import { Link, useNavigate } from "react-router-dom";
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../../components/Icons";
import { Field, Form, Formik } from "formik";
import Titulo from "../../../components/utilidades/Titulo";
import ButtonAction from "../../../components/utilidades/ButtonAction";
import PuntosNext from "../../../components/utilidades/PuntosNext";
import * as Yup from "yup";

const rutas = [
  { id: 1, link: '/auth/registro/datos-basicos' },
  { id: 2, link: '/auth/registro/datos-personales' },
  { id: 3, link: '/auth/registro/datos-contacto' },
]

const DatosPersonales = () => {

  const navigate = useNavigate();

  const validar = Yup.object().shape({
    email: Yup.string()
      .email('formato invalido')
      .required('es requerido'),
    password: Yup.string().required('es requerido'),
  });

  return (
    <Formik
      initialValues={{
        email: 'yelsino@321.com',
        password: '321321',
      }}
      validationSchema={validar}
      onSubmit={(values) => {
        navigate('/auth/registro/datos-contacto')
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
          <div className=" w-24 md:w-32 sm:w-32  select-none md:hidden object-contain">
            <img src={LOGO} alt="logo negocios carlos" />
          </div>
          <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
            <span><IconCar /></span>
            <h1 >Administrador</h1>
          </div>
          <Titulo texto="DATOS DE PERSONALES" />

          <div className=" w-72 sm:w-80 relative">
            <div
              className="flex gap-x-1"><label htmlFor='password' className="text-color_green_6">Email</label>
              {errors.email && touched.email ? <div className="text-color_green_7">{errors.email}</div> : null}
            </div>
            <Field
              autoComplete={"off"}
              className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              name="email"
              id='email'
            />
            <label
              htmlFor='email'
              className="absolute right-2 top-7 text-color_green_7  p-3 sm:p-4">
              <IconEmail />
            </label>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='password' className="text-color_green_6">Contraseña</label>
              {errors.password && touched.password ?
                <div className="text-color_green_7">
                  {errors.password}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="password"
                id='password'
                type="password"
                className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              />
              <label
                htmlFor='email'
                className="absolute text-color_green_7 right-5">
                <IconKey />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='password' className="text-color_green_6">Contraseña</label>
              {errors.password && touched.password ?
                <div className="text-color_green_7">
                  {errors.password}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="password"
                id='password'
                type="password"
                className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              />
              <label
                htmlFor='email'
                className="absolute text-color_green_7 right-5">
                <IconKey />
              </label>
            </div>
          </div>

          <div className="w-72 sm:w-80">
            <ButtonAction
              type="submit"
              text="CONTINUAR"
            />
            <Link to='/auth/login'>
              <p className="text-right text-color_green_6 cursor-pointer mb-3">cancelar</p>
            </Link>
          </div>
          <PuntosNext puntos={rutas} />
        </Form>
      )}
    </Formik>
  );
}

export default DatosPersonales;