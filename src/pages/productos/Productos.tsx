
import { IconClean, IconSearch } from 'Components/Icons'
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
    <div className="mx-auto max-w-sm overflow-y-auto pt-10 md:max-w-md">
      <p className="text-color_green_7 font-poppins text-center text-lg">
        Productos
      </p>

      <div className="relative flex items-center  ">
        <input
          autoComplete={'off'}
          name="password"
          id="text"
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
          className="text-color_green_7 bg-color_green_3 my-7 w-full rounded-md p-4  pl-11 text-base outline-none placeholder:text-green-400 sm:text-lg"
        />
        <label htmlFor="email" className="absolute left-3 text-green-400">
          <IconSearch />
        </label>
        {textsearch.length > 0 && (
          <button
            onClick={() => setTextSearch('')}
            className="absolute right-3 text-green-400"
          >
            <IconClean />
          </button>
        )}
      </div>

      {textsearch.length >= 1 ? (
        <div>buscando productos</div>
      ) : (
        <div className="flex flex-col gap-y-10  ">
          {categorias.map((v,index) => (
            <Link
              key={v._id}
              to={`/productos/${v.nombre}`}
              className="flex items-center gap-x-5"
            >
              <div className="bg-color_green_3 text-color_green_7 flex h-16 w-16 items-center justify-center rounded-lg">
                <img alt="img productos" src={iconCategory[index]} className="w-8 h-8" />
               {}
              </div>
              <div className="flex flex-col">
                <span className="text-color_green_7 text-lg">{v.nombre}</span>
                <span className="text-color_green_5">
                  Total 12 vegetales en tienda
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Productos

const iconCategory = [
  "https://img.icons8.com/fluency/24/undefined/broccoli.png",
 "https://img.icons8.com/fluency/24/undefined/mango.png",
  "https://img.icons8.com/fluency/24/undefined/grocery-bag.png"
]
