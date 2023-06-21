import { useContext, useEffect, useState } from 'react'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { NotificacionContext } from 'context/notificaciones/notificacionContext'
import { IconNext } from 'Components/Icons'
import { NuevoProducto, OutletProducto } from '../NuevoProducto'
import { Formik, Form } from 'formik'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'
import * as Yup from 'yup'
import ViewProduct from 'Components/Organismos/ViewProduct/ViewProduct'
import RangeSelector from 'Components/utilidades/RangeSelector'
import { uuidv4 } from '@firebase/util'
import ButtonAction from 'Components/utilidades/ButtonAction'
import TagInput from 'Components/utilidades/TagInput'
interface FormValues {
  cantidadPrecios: number
  precioUnidad: number
  pesoSeleccionado: number
  precioSeleccionado: number
  // precioCompra: number
}

interface Precio {
  _id?: string;
  peso: number;
  precio: number;
  cantidad?: number;
  textoPesoA?: string;
  textoPesoB?: string;
}

interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const PrecioProductoMinoreo = () => {
  const navigate = useNavigate()
  const { nuevoProducto, setNuevoProducto, precio, setPrecio } = useOutletContext<OutletProducto>()
  const alert = useContext(NotificacionContext)

  const handleSubmit = (e:FormValues) => {
    if(
      e.cantidadPrecios === 0 ||
      // e.pesoSeleccionado === 0 ||
      // e.precioSeleccionado === 0 ||
      e.precioUnidad === 0 
      
      ){
        return alert.setNotificacion({message:'todos los campos son requeridos', type: 1})
    }

    // _id?: string;
    // nombre: string;
    // imagen: string;
    // descripcion: string;
    // marca: string;
    // tipoVenta: TipoVenta;
    // precioCompra: number;
    // precioVenta: number;
    // unidades: number;
    // sobrante: number;
    // cantidadPorUnidad: number;
    // envoltorio: Envoltorio;
    // estados: EstadosProducto;
    // visibilidad: Boolean;
    // alertaCantidad: number;
    // categoria: ICategoria;
    // tags: Array<string>;
    // precios: Array<Precio>;
    // precioUnidad: number;

    setNuevoProducto((prev)=>({
      ...prev,
      precioUnidad: e.precioUnidad,
      precios: precios,
     

    }))
    
    navigate('/productos/nuevo-producto/stock')
  }

  const [ cantidadPrecios, setCantidadPrecios ] = useState(nuevoProducto.precios.length ?? 3);
  const [ pesoSeleccionado, setPesoSeleccionado ] = useState(0);
  const [posicionActual, setPosicionActual] = useState(0)


useEffect(() => {
  localStorage.setItem("position", JSON.stringify(posicionActual))
}, [posicionActual])


  const validar = Yup.object().shape({
    cantidadPrecios: Yup
      .string()
      .max(1,"solo se permite un digito")
      .required('es requerido'),
    // cantidadPorUnidad: Yup
    //   .number()
    //   .required('es requerido'),
    // pesoSeleccionado: Yup
    //   .number()
    //   .max(1000,"maximo 1000")
    //   .required('es requerido'),
      // precioSeleccionado: Yup
      // .number()
      // .max(1000,"maximo 1000")
      // .required('es requerido'),
    // precioCompra: Yup.string().required('es requerido')
  })

  const [precios, setPrecios] = useState<Precio[]>([
    {
      _id: uuidv4(),
      peso: 0,
      precio: 0,
      cantidad: 0,
      textoPesoA: '',
      textoPesoB: '',
    },
  ]);

  const generarPrecios = (rango:number,producto:NuevoProducto):Promise<Precio[]> => {
    return new Promise((resolve, reject)=> {
      const precios:Precio[] = Array.from({length: cantidadPrecios}, (_, i) => {
        console.log(i);
        
         const nuevoPrecio = {
           _id: uuidv4(),
           peso: 0,
           precio: 0,
           cantidad: 0,
           textoPesoA: '',
           textoPesoB: '',
         }
        
         switch (producto.tipoVenta) {
         case "KILOGRAMOS":
           return {
             ...nuevoPrecio,
             precio: (i+1) !==3 ? (producto.precioUnidad ?? 0) / (i+1) : producto.precioUnidad / 4,
             peso: (i+1) !==3 ? 1000 / (i+1) : 1000 / 4,
           }
        
         default:
           break;
        }
   
       });

       resolve(precios)
    })
   


  }

  const generarTextos = (precios:Precio[]) => {
    const modificarPrecios = precios.map((precio) => {
      switch (nuevoProducto.tipoVenta) {
   
        case "KILOGRAMOS":
            return {
                ...precio,
                textoPesoA: 
                  precio.peso === 250 ? "1/4 kg" 
                  : precio.peso === 500 ? "1/2 kg" 
                  : precio.peso === 1000 ? "1 kg" 
                  : `${precio.peso} gr`,
                textoPesoB:
                  precio.peso === 250 ? "250 gramos"
                  : precio.peso === 500 ? "500 gramos"
                  : precio.peso === 1000 ? "1 kilogramo"
                  : `${precio.peso} gramos`,
            };
       
        default:
            return precio;
      }
    });

    return modificarPrecios;
   
  }
  // :React.ChangeEvent<HTMLInputElement>
  const handleChangePesonalizado = (e:ChangeEvent) => {
    
    setNuevoProducto((prev)=>({
      ...prev, 
      precioUnidad: Number(e.target.value)
    }))
    
  }

  const handleChangeCantidadPrecios = (e:ChangeEvent) => {
    setCantidadPrecios(Number(e.target.value))
  }

  const handleChangePesoCantidad = (e:ChangeEvent, setFormikState) => {
    const { name, value } = e.target;
    // setPesoSeleccionado(Math.round(Number(value) / 50) * 50)
    setFormikState(prev=> ({
      ...prev,
      values: {
        ...prev.values,
        pesoSeleccionado: Number(value)
      }
    }))

    setNuevoProducto((prev)=>{
      // modificar el precio
      const nuevoPrecio = {
        ...precio,
        peso: Number(value),
      }

      // crear nuevo arreglo de precios que mantengue el orden y los valores anteriores
      const nuevoArrayPrecios = prev.precios.map((p)=> {
        if(p._id === precio._id) {
          return nuevoPrecio
        } else {
          return p
        }
      })

      return {
        ...prev,
        precios: nuevoArrayPrecios
      }
      
    })

    setPrecio((prev)=>({
      ...prev,
      peso: Number(value),
    }))
    
  }

  const handleChangePrecioSeleccionado = (e:ChangeEvent, setFormikState) => {
    const { name, value } = e.target;

    setFormikState(prev=> ({
      ...prev,
      values: {
        ...prev.values,
        precioSeleccionado: Number(value)
      }
    }))

    setNuevoProducto((prev)=>{
      // modificar el precio
      const nuevoPrecio = {
        ...precio,
        precio: Number(value),
      }

      // crear nuevo arreglo de precios que mantengue el orden y los valores anteriores
      const nuevoArrayPrecios = prev.precios.map((p)=> {
        if(p._id === precio._id) {
          return nuevoPrecio
        } else {
          return p
        }
      })

      return {
        ...prev,
        precios: nuevoArrayPrecios
      }
      
    })

    setPrecio((prev)=>({
      ...prev,
      precio: Number(value),
    }))
    
  }

  useEffect(()=> {

    generarPrecios(cantidadPrecios,nuevoProducto)
    .then((precios)=>{
      setPrecios(generarTextos(precios))
      setNuevoProducto((prev)=>({
        ...prev,
        precios: precios
      }))
    });


  },[cantidadPrecios,nuevoProducto.precioUnidad])


  return (
    <>
      <Formik<FormValues>
        initialValues={{
          cantidadPrecios: cantidadPrecios ?? 3,
          precioUnidad: nuevoProducto.precioUnidad ?? 0,
          pesoSeleccionado: precio?.peso ?? 0,
          precioSeleccionado: precio?.precio ?? 0,
        }}
        validationSchema={validar}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          isSubmitting,
          handleChange,
          values,
          setFormikState
        }) => (
          <Form
            // onSubmit={(e) => e.preventDefault()}
            className="w-full "
          >
            <pre>
              {JSON.stringify(nuevoProducto, null, 2)}
            </pre>
            <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light">
              Configuración de precios <br /> al minoreo
            </p>

            <div className="flex  flex-col items-center w-full mb-5 mx-auto gap-y-3">
              <RangeSelector
                onChange={handleChangeCantidadPrecios}
                valor={cantidadPrecios}
                min={1}
                max={3}
                titulo={`Cantidad de precios ${cantidadPrecios}`}
              />

              <div className="w-72">
                <InputFormik
                  nombre="precioUnidad"
                  errors={errors}
                  touched={touched}
                  type="number"
                  titulo={`Precio por ${nuevoProducto.tipoVenta}`}
                  value={values.precioUnidad}
                  handleChange={handleChange}
                  handleChangePesonalizado={handleChangePesonalizado}
                />
              </div>

              <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light">
                Vista previa de producto <br /> en tienda
              </p>

              <ViewProduct
                producto={nuevoProducto}
                precios={precios}
                setModal={null}
                setAdding={null}
                setItem={null}
                adding={false}
              />

              {/* <div className="w-72">
                <InputFormik
                  nombre="pesoSeleccionado"
                  errors={errors}
                  touched={touched}
                  type="number"
                  titulo={`Peso en gramos`}
                  handleChange={handleChange}
                  value={values.pesoSeleccionado}
                />
                <RangeSelector
                  onChange={(evento) => {
                    handleChangePesoCantidad(evento, setFormikState)
                  }}
                  valor={values.pesoSeleccionado}
                  min={0}
                  max={1000}
                  step={50}
                />

                <InputFormik
                  nombre="precioSeleccionado"
                  errors={errors}
                  touched={touched}
                  type="number"
                  titulo={`Precio por unidad`}
                  handleChange={handleChange}
                  value={values.precioSeleccionado}
                />
                <RangeSelector
                  onChange={(evento) => {
                    handleChangePrecioSeleccionado(evento, setFormikState)
                  }}
                  valor={values.precioSeleccionado}
                  min={0}
                  max={100}
                  step={1}
                />
              </div> */}

              <div className=" flex items-center justify-center w-80">
                <div>
                <label className="text-color_green_6">Descripción del producto</label>
                <textarea
                  value={nuevoProducto.descripcion}
                  placeholder=""
                  onChange={(e)=>{
                    setNuevoProducto((prev)=>({
                      ...prev,
                      descripcion: e.target.value
                    }))
                  }}
                  className=" text-color_green_7 bg-color_green_3  rounded-md p-4 text-base  outline-none sm:text-lg  appearance-none placeholder:text-green-400 w-full"
                  // className="caret-pink-500 resize-y p-2 w-80 ring-1 ring-slate-900/10 shadow-sm rounded-md dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 h-[114px] focus:outline-none focus:ring-4 focus:ring-orange-600 focus:ring-opacity-75 text-base dark:text-white"

                  
                  rows={3}
                ></textarea>
                </div>
              </div>

              <TagInput setNuevoProducto={setNuevoProducto} tags={nuevoProducto.tags}/>

              <div className="flex justify-center">
                <ButtonAction text="SIGUIENTE" type="submit"  />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PrecioProductoMinoreo
