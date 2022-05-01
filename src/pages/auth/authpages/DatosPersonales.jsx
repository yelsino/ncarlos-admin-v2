import { Link, useNavigate } from "react-router-dom";
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../../Components/Icons";
import { v4 as uuidv4 } from 'uuid';
import { Field, Form, Formik } from "formik";
import Titulo from "../../../Components/utilidades/Titulo";
import ButtonAction from "../../../Components/utilidades/ButtonAction";
import PuntosNext from "../../../Components/utilidades/PuntosNext";
import * as Yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' },
]




const DatosPersonales = () => {
  const { users, setUser } = useContext(UserContext);
  const { newWorker } = users
  const navigate = useNavigate();

  console.log(uuidv4());

  const validar = Yup.object().shape({
    apodo: Yup.string()
      .required('es requerido'),
    nombres: Yup.string()
      .required('es requerido'),
    apellidos: Yup.string()
      .required('es requerido'),
  });

  return (
    <Formik
      initialValues={{
        apodo: newWorker.apodo,
        nombres: newWorker.nombres,
        apellidos: newWorker.apellidos
      }}
      validationSchema={validar}
      onSubmit={(values) => {
        setUser((data) => (
          {
            ...data,
            newWorker: {
              ...data.newWorker,
              apodo: values.apodo,
              nombres: values.nombres,
              apellidos: values.apellidos,
            }
          }
        ))
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
              className="flex gap-x-1"><label htmlFor='password' className="text-color_green_6">Apodo</label>
              {errors.apodo && touched.apodo ? <div className="text-color_green_7">{errors.apodo}</div> : null}
            </div>
            <Field
              autoComplete={"off"}
              className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              name="apodo"
              id='apodo'
            />
            <label
              htmlFor='apodo'
              className="absolute right-2 top-7 text-color_green_7  p-3 sm:p-4">
              <IconEmail />
            </label>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='nombres' className="text-color_green_6">Nombres</label>
              {errors.nombres && touched.nombres ?
                <div className="text-color_green_7">
                  {errors.nombres}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="nombres"
                id='nombres'
                type="nombres"
                className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              />
              <label
                htmlFor='nombres'
                className="absolute text-color_green_7 right-5">
                <IconKey />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='apellidos' className="text-color_green_6">Apellidos</label>
              {errors.apellidos && touched.apellidos ?
                <div className="text-color_green_7">
                  {errors.apellidos}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="apellidos"
                id='apellidos'
                type="apellidos"
                className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              />
              <label
                htmlFor='apellidos'
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