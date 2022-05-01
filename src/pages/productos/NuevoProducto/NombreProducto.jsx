import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect,useContext } from 'react'
import IMG from '../../../assets/img/iconito.png'
import { IconNext } from '../../../Components/Icons';
import ButtonNext from '../../../Components/utilidades/ButtonNext';
import NotificacionContext from '../../../context/Notificaciones/notificacionContext';

const NombreProducto = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  // context
  const [product,setProduct]= useOutletContext();
  const alert = useContext(NotificacionContext);

  const handleSubmit = () => {
    if(!product.name || !product.img){
      alert.setNotificacion({
        type: 1,
        message: 'Todos los campos son requeridos'
      });
      return;
    }
    navigate(`/productos/nuevo-producto/datos-basicos`);
  }

  useEffect(()=>{
    // setProduct({...product,category: location.state?.from});
    localStorage.setItem('LSproduct',JSON.stringify({
      ...product,
      category: location.state?.from
    }));
  },[]);

  const encodeImageFileAsURL = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      setProduct({
        ...product,
        img:file,
        img_local: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Nuevo producto</p>
      <div className='flex flex-col items-center w-full '>
        <div className='mt-10 '>
          <label 
          className='rounded-full border-color_green_7 p-2 border px-6 py-4 leading-6 text-color_green_7 cursor-pointer hover:bg-color_green_3 ease-in duration-300'
          htmlFor='archivo_producto'>Seleccionar Archivo</label>
          <input
            id='archivo_producto'
            onChange={encodeImageFileAsURL}
            type='file'
            className='hidden'
          />
        </div>
        
        <div className='my-10 w-64'>
        <img src={product.img ? product.img_local : IMG} />
          {/* <img src="BASE64"/> */}
          {/* <img src={IMG} /> */}
        </div>
        <p className='text-color_green_6 text-lg mb-5'>Nombre de producto</p>
        <input
          value={product.name}
          onKeyUp={(e)=>{
            if(e.key === 'Enter' && product.name){
              navigate('/productos/nuevo-producto/datos-basicos')
            }
          }}
          onChange={(e)=>{
            setProduct({...product,name:e.target.value});
          }}
          className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-11/12 bg-color_green_3 mb-10'
        />
      </div>

      <div className='flex justify-center'>
        <ButtonNext 
        onClick={handleSubmit}
        text={<IconNext />
        }/>
      </div>
    </>
  );
}

export default NombreProducto;
