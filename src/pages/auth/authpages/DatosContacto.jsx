import { Link, useNavigate } from "react-router-dom";
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../../Components/Icons";
import { Field, Form, Formik } from "formik";
import Titulo from "../../../Components/utilidades/Titulo";
import ButtonAction from "../../../Components/utilidades/ButtonAction";
import PuntosNext from "../../../Components/utilidades/PuntosNext";
import * as Yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import NotificacionContext from "../../../context/Notificaciones/notificacionContext";
import { v4 as uuidv4 } from 'uuid';

const rutas = [
  { id: uuidv4(), link: '/auth/registro/datos-basicos' },
  { id: uuidv4(), link: '/auth/registro/datos-personales' },
  { id: uuidv4(), link: '/auth/registro/datos-contacto' },
]

const DatosContacto = () => {
  const { users, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const notificacionContex = useContext(NotificacionContext);
  const { setNotificacion } = notificacionContex;
  const { newWorker } = users;

  const validar = Yup.object().shape({
    celular: Yup.string().required('es requerido'),
    correo: Yup.string().required('es requerido'),
    direccion: Yup.string().required('es requerido'),
  });

  return (
    <Formik
      initialValues={{
        celular: newWorker.celular,
        correo: newWorker.correo,
        direccion: newWorker.direccion
      }}
      validationSchema={validar}
      onSubmit={(values) => {
        setUser((data) => (
          {
            ...data,
            newWorker: {
              ...data.newWorker,
              celular: values.celular,
              correo: values.correo,
              direccion: values.direccion,
            }
          }
        ));
        if (
          !users.newWorker.email ||
          !users.newWorker.password ||
          !users.newWorker.apodo ||
          !users.newWorker.nombres ||
          !users.newWorker.apellidos
        ) {
          return setNotificacion({ type: 1, message: 'todos los datos son requeridos' })
        }
        navigate('/auth/registro/finalizado')
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
          <div className=" w-24 md:w-32 sm:w-32  select-none md:hidden object-contain">
            <img src={LOGO} alt="logo de negocios carlos" />
          </div>
          <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
            <span><IconCar /></span>
            <h1 >Administrador</h1>
          </div>
          <Titulo texto="DATOS DE CONTACTO" />

          <div className=" w-72 sm:w-80 relative">
            <div
              className="flex gap-x-1"><label htmlFor='celular' className="text-color_green_6">N° celular</label>
              {errors.celular && touched.celular ? <div className="text-color_green_7">{errors.celular}</div> : null}
            </div>
            <Field
              autoComplete={"off"}
              className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              name="celular"
              id='celular'
            />
            <label
              htmlFor='celular'
              className="absolute right-2 top-7 text-color_green_7  p-3 sm:p-4">
              <IconEmail />
            </label>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='correo' className="text-color_green_6">Correo</label>
              {errors.correo && touched.correo ?
                <div className="text-color_green_7">
                  {errors.correo}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="correo"
                id='correo'
                type="correo"
                className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
              />
              <label
                htmlFor='correo'
                className="absolute text-color_green_7 right-5">
                <IconKey />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="w-72 sm:w-80 relative">
            <div className="flex gap-x-1"><label
              htmlFor='direccion' className="text-color_green_6">Dirección</label>
              {errors.direccion && touched.direccion ?
                <div className="text-color_green_7">
                  {errors.direccion}
                </div> : null}
            </div>
            <div className="relative flex items-center">
              <Field
                autoComplete={"off"}
                name="direccion"
                id='direccion'
                type="direccion"
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
              text="REGISTRAR"
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

export default DatosContacto;