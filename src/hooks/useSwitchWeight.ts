import { AuthContext } from 'context/auth/AuthContext';
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext';
import { SocketContext } from 'context/Socket/SocketContext';
import { NuevoProducto, OutletProducto } from 'pages/productos/NuevoProducto';
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
// import { useOutletContext } from 'react-router-dom';
import { Cantidad, IProducto, ItemLista } from 'types-yola'

interface Props {
  producto: NuevoProducto
  // posicionSeleccionada: number
}

interface DataEventList {
  listaId: string;
  productoId: string;
  cantidad: Cantidad;
}

export const useSwitchWeight = ({ producto }: Props) => {

  const { nuevoProducto, setNuevoProducto,setPrecio } = useOutletContext<OutletProducto>()

  const { uid } = useContext(AuthContext)
  const { socket } = useContext(SocketContext)
  // const { list: listaSeleccionada } = useContext(ListContext)
  const { setNotificacion } = useContext(NotificacionContext)

  // cual de los productos seleccionado hay en lista?
  const [itemLista, setItemLista] = useState<ItemLista>()
  // cual de las medidas esta seleccionada?
  const [pesoSeleccionado, seleccionarPeso] = useState('')
  // cual es el precio de la medida seleccionada?
  const [precioSeleccionado, seleccionarPrecio] = useState(0)
  // cuanto de la meda seleccionada hay en lista?
  const [cantidadEnLista, setCantidadEnLista] = useState(0);
  // cuanto es el total a pagar por este producto?            
  const [montoTotalDelProducto, setMontoTotalDelProducto] = useState(0)
  // cuanto tienes en lista de este producto?
  const [cantidadTotalDelProducto, setCantidadTotalDelProducto] = useState(0)

  // const addProductToList = () => {
  //   setAdding(true)
  //   socket?.emit('UPDATE_USER_LIST', {
  //     evento: 'ADD_PRODUCT_TO_LIST',
  //     data: {
  //       // listaId: listaSeleccionada._id,
  //       productoId: producto._id,
  //       cantidad: producto.precios.find((precio) => precio._id === pesoSeleccionado),
  //     }
  //   })
  // }

  // const removeProductOfList = () => {
  //   socket?.emit('UPDATE_USER_LIST', {
  //     evento: 'REMOVE_PRODUCT_OF_LIST',
  //     data: {
  //       listaId: listaSeleccionada._id,
  //       productoId: producto._id,
  //       cantidad: null,
  //     }
  //   })
  //   setNotificacion({ message: `Quitó ${producto.nombre} de lista`, type: 1 })
  // }

  // item de lista seleccionado
  useEffect(() => {
    if(pesoSeleccionado){
      const precio = producto.precios.find((precio) => precio._id === pesoSeleccionado);
      if(!precio) return 
      setPrecio(precio)

    }
  }, [pesoSeleccionado])

  // ¿cual de las medidas esta seleccionada?
  useEffect(() => {
    const position = JSON.parse(localStorage.getItem("position")) ? Number(JSON.parse(localStorage.getItem("position"))) : 0
    // setPosicionSeleccionada(position)
    const precioId = producto?.precios[position]?._id
    seleccionarPeso(precioId ? precioId : producto?.precios[0]?._id)
    // setPrecio(producto?.precios[position])
  }, [producto])

  // useEffect(() => {
  //   console.log(posicionSeleccionada);
    
  //   console.log(producto?.precios[posicionSeleccionada ?? 0]);
    
  //   setPrecio(producto?.precios[posicionSeleccionada ?? 0])
  // }, [posicionSeleccionada])

  // ¿cual es el precio de la medida seleccionada?
  useEffect(() => {
    if (pesoSeleccionado) {
      const mount = producto.precios.find((precio) => precio._id === pesoSeleccionado)
      if (mount) {
        seleccionarPrecio(mount.precio)
      }
    }
  }, [pesoSeleccionado])


  // ¿de la medida seleccionada cuanto en total hay en lista?
  // useEffect(() => {
  //     if(pesoSeleccionado){
  //       const itemLista = listaSeleccionada.itemsLista.find((item) => item.producto._id === producto._id);
        
  //       if(!itemLista) return setCantidadEnLista(0)

  //       const cantidadSeleccionada = itemLista.cantidades.find((cantidad) => cantidad._id === pesoSeleccionado)
        
  //       setCantidadEnLista(cantidadSeleccionada ? cantidadSeleccionada.cantidad : 0)
  //     }
  // }, [pesoSeleccionado, listaSeleccionada])

  // ¿Cual es el total a pagar por este producto?
  // useEffect(()=> {
  //   if(pesoSeleccionado){
  //     const itemLista = listaSeleccionada.itemsLista.find((item) => item.producto._id === producto._id);
      
  //     if(!itemLista) {
  //       setMontoTotalDelProducto(0);
  //       setCantidadTotalDelProducto(0);
  //       return 
  //     }

  //     setMontoTotalDelProducto(itemLista.montoTotal)
  //     setCantidadTotalDelProducto(itemLista.cantidadTotal)
  //   }
      
  // }, [ pesoSeleccionado,listaSeleccionada])

  return {
    pesoSeleccionado,
    seleccionarPeso,
    precioSeleccionado,
    cantidadEnLista,
    montoTotalDelProducto,
    cantidadTotalDelProducto,
    // removeProductOfList,
    // addProductToList,
    itemLista
  } as const
}
