import IMGDEVELOPER from "../../assets/img/developer.svg";
import LOGO from '../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../Components/Icons";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import Titulo from "../../Components/utilidades/Titulo";
import ButtonAction from "../../Components/utilidades/ButtonAction";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const validar = Yup.object().shape({
    email: Yup.string()
      .email('formato invalido')
      .required('es requerido'),
    password: Yup.string().required('es requerido'),
  });

  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center">

      <div className="max-w-5xl  flex justify-center items-center ">
        <Formik
          initialValues={{
            email: 'yelsin@gmail.com',
            password: '123456',
          }}
          validationSchema={validar}
          onSubmit={async (values) => {

            await login(values.email, values.password)
            navigate('/')
            // if (!resp.ok) {
            //   setNotificacion({ type: 1, message: resp.msg });
            // } else {
            //   navigate('/')
            // }
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
              <div className=" w-24 sm:w-40  select-none md:hidden object-contain">
                <img src={LOGO} alt="logo de negocios carlos" />
              </div>
              <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
                <span><IconCar /></span>
                <h1 >Administrador</h1>
              </div>
              <Titulo texto="INICIAR SESIÓN" />
              <div className=" w-72 sm:w-80 relative">
                <div
                  className="flex gap-x-1"><label htmlFor='password' className="text-color_green_6">Email</label>
                  {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
                </div>
                <Field
                  autoComplete={"off"}
                  className=' rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
                  name="email"
                  id='email'
                />
                <label
                  htmlFor='email'
                  className="absolute right-2 top-7 text-color_green_7 p-3 sm:p-4">
                  <IconEmail />
                </label>
              </div>
              <div className="w-72 sm:w-80 relative">
                <div className="flex gap-x-1"><label
                  htmlFor='password' className="text-color_green_6">Contraseña</label>
                  {errors.password && touched.password ?
                    <div className="text-red-500">
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

                <Link to="/auth/restore" className="text-center text-color_green_4 cursor-pointer">
                  <p className="text-center text-color_green_6 cursor-pointer mb-3">Olvidé mis credenciales</p>
                </Link>
                <Link to="/auth/registro" className="text-center text-color_green_4 cursor-pointer"><p>Registrarme</p></Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className="hidden md:w-1/2 md:flex p-10">
          <div className="w-10/12">
            <img src={IMGDEVELOPER} alt='img de administrador' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;