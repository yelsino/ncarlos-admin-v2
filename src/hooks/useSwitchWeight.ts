import { NuevoProducto, OutletProducto } from 'pages/productos/NuevoProducto';
import {  useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

interface Props {
  producto: NuevoProducto
  // posicionSeleccionada: number
}

export const useSwitchWeight = ({ producto }: Props) => {

  const { setPrecio } = useOutletContext<OutletProducto>()

  // cual de las medidas esta seleccionada?
  const [pesoSeleccionado, seleccionarPeso] = useState('')
  // cual es el precio de la medida seleccionada?
  const [precioSeleccionado, seleccionarPrecio] = useState(0)
  // cuanto de la meda seleccionada hay en lista?
  // const [cantidadEnLista, setCantidadEnLista] = useState(0);
  // cuanto es el total a pagar por este producto?
  const [montoTotalDelProducto, setMontoTotalDelProducto] = useState(0)
  // cuanto tienes en lista de este producto?
  const [cantidadTotalDelProducto, setCantidadTotalDelProducto] = useState(0)


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


  // ¿cual es el precio de la medida seleccionada?
  useEffect(() => {
    if (pesoSeleccionado) {
      const mount = producto.precios.find((precio) => precio._id === pesoSeleccionado)
      if (mount) {
        seleccionarPrecio(mount.precio)
      }
    }
  }, [pesoSeleccionado])


  return {
    pesoSeleccionado,
    seleccionarPeso,
    montoTotalDelProducto,
    cantidadTotalDelProducto,
  } as const
}
