import ListaProductos from "./ListaProductos";

const ListaUsuario = () => {
  return (
    <div className="w-full usuario_lista overflow-y-auto">
      <p className="text-color_green_7 text-lg font-poppins font-medium text-center tracking-tighter mb-7">Arroz con pollo a la huachana</p>
      <ListaProductos />

    </div>
  );
}

export default ListaUsuario;