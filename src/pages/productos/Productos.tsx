// @ts-nocheck

import { IconClean } from 'Components/Icons'
import { CategoriaContext } from 'context/categoria/CategoriaContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Productos = () => {
  const [textsearch, setTextSearch] = useState('')
  const { categorias, obtenerCategorias } = useContext(CategoriaContext)

  useEffect(() => {
    obtenerCategorias()
  }, [])

  return (
    <div className="pt-10 md:max-w-md max-w-sm mx-auto overflow-y-auto">
      <p className="text-center text-color_green_7 font-poppins text-lg">Productos</p>

      <div className="relative flex items-center  ">
        <input
          autoComplete={'off'}
          name="password"
          id='text'
          onChange={(e) => {
            setTextSearch(e.target.value)
          }}
          onKeyUp={(e) => {
            if (e.key === 'Escape') {
              setTextSearch('')
            }
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
                <Link key={v._id} to={`/productos/${v.nombre}`} className="flex items-center gap-x-5">
                  <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
                    <img alt="img productos" src={IconBrocoli} className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">

                    <span className="text-lg text-color_green_7">{v.nombre}</span>
                    <span className="text-color_green_5">Total 12 vegetales en tienda</span>
                  </div>
                </Link>
              ))
            }
          </div>
      }
    </div>
  )
}

export default Productos
