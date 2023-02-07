import { useContext, useEffect, useState } from 'react'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import { IconNext } from 'Components/Icons'
import { NuevoProducto, OutletProducto } from '../NuevoProducto'
import { Formik, Form } from 'formik'
import { InputFormik } from 'Components/utilidades/Inputs/InputFormik'
import * as Yup from 'yup'
import ViewProduct from 'Components/Organismos/ViewProduct/ViewProduct'
import RangeSelector from 'Components/utilidades/RangeSelector'
import { uuidv4 } from '@firebase/util'
import ButtonAction from 'Components/utilidades/ButtonAction'
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

const PrecioProductoMinoreo = () => {
  const navigate = useNavigate()
  const { nuevoProducto, setNuevoProducto } = useOutletContext<OutletProducto>()
  const alert = useContext(NotificacionContext)

  const handleSubmit = () => {
  
    navigate('/productos/nuevo-producto/stock')
  }

  const [ cantidadPrecios, setCantidadPrecios ] = useState(3);
  const [ cantidadPeso, setCantidadPeso ] = useState(0);
  // const [ precioSeleccionado, setPrecioSeleccionado ] = useState<Precio>(null);
  const [posicionActual, setPosicionActual] = useState(0)

 // ¿cual de las medidas esta seleccionada?
//  useEffect(() => {
//   const position = JSON.parse(localStorage.getItem("position")) ? Number(JSON.parse(localStorage.getItem("position"))) : 0

//   setPrecioSeleccionado(nuevoProducto?.precios[position])
// }, [producto])

useEffect(() => {
  localStorage.setItem("position", JSON.stringify(posicionActual))
}, [posicionActual])


  const validar = Yup.object().shape({
    cantidadPrecios: Yup
      .string()
      .max(1,"solo se permite un digito")
      .required('es requerido'),
    cantidadPorUnidad: Yup
      .number()
      .required('es requerido'),
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
             precio: (i+1) !==3 ? producto.precioUnidad/ (i+1) : producto.precioUnidad / 4,
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
  const handleChangePesonalizado = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    setNuevoProducto((prev)=>({
      ...prev, 
      precioUnidad: Number(e.target.value)
    }))
    
  }

  const handleChangeCantidadPrecios = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCantidadPrecios(Number(e.target.value))
  }

  const handleChangePesoCantidad = (e:React.ChangeEvent<HTMLInputElement>, setFormikState) => {
    const { name, value } = e.target;
    setCantidadPeso(Math.round(Number(value) / 50) * 50)
    // handleChange(Math.round(Number(value) / 50) * 50)
    setFormikState(prev=> ({
      ...prev,
      values: {
        ...prev.values,
        pesoSeleccionado: Math.round(Number(value) / 50) * 50
      }
    }))
    // setNuevoProducto((prev)=>({
    //   ...prev, 
    //   [name]: Number(value)
    // }))
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
          cantidadPrecios: 3,
          precioUnidad: nuevoProducto.precioUnidad ?? 0,
          pesoSeleccionado: cantidadPeso,
          precioSeleccionado: 0
          // precioCompra: nuevoProducto.precioCompra
        }}
        validationSchema={validar}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, handleChange, values,setFormikState }) => (
          <Form>
            <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light">
              Configuración de precios <br /> al minoreo
            </p>

            <div className="flex  flex-col items-center w-72 mb-5 mx-auto gap-y-3">
              <RangeSelector
                onChange={handleChangeCantidadPrecios}
                valor={cantidadPrecios}
                min={1}
                max={3}
                titulo="Cantidad de precios"
              />

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
                onChange={(evento)=>{
                  handleChangePesoCantidad(evento, setFormikState)
                }}
                valor={cantidadPeso}
                min={0}
                max={1000}
                multiple={5}
                titulo={`Cantidad en gramos`}
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

              <div className="flex justify-center">
                <ButtonAction text="SIGUIENTE" type="submit" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PrecioProductoMinoreo
