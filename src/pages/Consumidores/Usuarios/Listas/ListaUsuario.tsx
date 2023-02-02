import ListaProductos from './ListaProductos'

const ListaUsuario = () => {
  return (
    <div className="usuario_lista w-full overflow-y-auto">
      <p className="text-color_green_7 font-poppins mb-7 text-center text-lg font-medium tracking-tighter">
        Arroz con pollo a la huachana
      </p>
      <ListaProductos />
    </div>
  )
}

export default ListaUsuario
