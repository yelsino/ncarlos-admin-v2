// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconClean, IconSearch } from "../../Components/Icons";

import IconBrocoli from '../../assets/img/icons/brocoli.png';
import { useContext } from "react/cjs/react.development";
import { CategoriaContext } from "../../context/categoria/CategoriaContext";

const Productos = () => {

  const [textsearch, setTextSearch] = useState('');
  const { categorias, obtenerCategorias } = useContext(CategoriaContext);

  useEffect(() => {
    obtenerCategorias();
  }, []);



  return (
    <div className="max-w-xl w-11/12 mx-auto pt-10 ">
      <p className="text-center text-color_green_7 font-poppins text-lg">Productos</p>

      <div className="relative flex items-center  ">
        <input
          autoComplete={"off"}
          name="password"
          id='text'
          onChange={(e) => {
            setTextSearch(e.target.value)
          }}
          value={textsearch}
          type="text"
          placeholder="Buscar productos"
          className='rounded-md p-4 outline-none my-7 text-base sm:text-lg  placeholder-green-400 text-color_green_7 w-full bg-color_green_3 pl-11'
        />
        <label
          htmlFor='email'
          className="absolute text-green-400 left-3">
          <IconSearch />
        </label>
        {
          textsearch.length > 0 &&
          <button
            onClick={() => setTextSearch('')}
            className="absolute text-green-400 right-3">
            <IconClean />
          </button>
        }

      </div>

      {
        textsearch.length >= 1
          ? <div>buscando productos</div>
          : <div className="flex flex-col gap-y-10  ">
            {
              categorias.map(v => (
                <Link to={`/productos/${v.name.toLowerCase()}`} className="flex items-center gap-x-5">
                  <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
                    <img alt="img productos" src={IconBrocoli} className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">

                    <span className="text-lg text-color_green_7">{v.name}</span>
                    <span className="text-color_green_5">Total 12 vegetales en tienda</span>
                  </div>
                </Link>
              ))
            }
          </div>





      }


    </div>
  );
}

export default Productos;



{/* <div className="flex flex-col gap-y-10  "> */ }


{/* <Link to='/productos/frutas' className="flex items-center gap-x-5">
              <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
                <img alt="img productos" src={IconLeche} className="w-8 h-8" />
              </div>
              <div className="flex flex-col">

                <span className="text-lg text-color_green_7">Frutas</span>
                <span className="text-color_green_5">Total 7 frutas en tienda</span>
              </div>
            </Link> */}

{/* <Link to='/productos/abarrotes' className="flex items-center gap-x-5">
              <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
                <img alt="img producto" src={IconManzana} className="w-8 h-8" />
              </div>
              <div className="flex flex-col">

                <span className="text-lg text-color_green_7">Abarrotes</span>
                <span className="text-color_green_5">Total 7 abarrotes en tienda</span>
              </div>
            </Link> */}
{/* </div> */ }