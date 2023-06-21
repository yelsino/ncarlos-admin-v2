
import { IconClean, IconSearch } from 'Components/Icons'
import { SearchProduct } from 'Components/Organismos/SearchProduct'
import { ProductoContext } from 'context/productos/productoContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IProducto } from 'types-yola'

const Productos = () => {
  // const { categorias } = useContext(CategoriaContext)
  const { productos, categorias, dispatchProducto } = useContext(ProductoContext)
  
  const [textsearch, setTextSearch] = useState('')
  const [productosFiltrados, setFiltroProductos] = useState<IProducto[]>([]);

  const filtrarProductos = () => {
    const filteredProducts = productos.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(textsearch.toLowerCase()) ||
        producto.categoria.nombre.toLowerCase().includes(textsearch.toLowerCase()) ||
        producto.tags.some(tag => tag.toLowerCase().includes(textsearch.toLowerCase()))
      );
    });

    const limitedProducts = filteredProducts.length >= 7 
          ? filteredProducts.slice(0, 7) 
          : filteredProducts;

    setFiltroProductos(limitedProducts);
  }

  useEffect(() => {
    if(textsearch){
      filtrarProductos()
    }
  }, [textsearch])

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

      {textsearch  
      ? (
        <div>
          {
            productosFiltrados.length >= 1 
            ? (
              <div>
                {productosFiltrados.map((producto) => (
                  <SearchProduct 
                    key={producto._id} 
                    producto={producto}
                    dispatch={dispatchProducto}
                  />
                  ))}
              </div>
            )
            : (
              <p>Sin resultados</p>
            )
          }
          
        </div>
        
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
