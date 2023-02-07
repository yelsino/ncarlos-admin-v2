import { AuthContext } from 'context/auth/AuthContext'
import Admin from 'pages/Admin'
import DatosBasicos from 'pages/auth/authpages/DatosBasicos'
import DatosContacto from 'pages/auth/authpages/DatosContacto'
import DatosPersonales from 'pages/auth/authpages/DatosPersonales'
import MensajeRestore from 'pages/auth/authpages/MensajeRestore'
import MensajeRegistro from 'pages/auth/authpages/MesajeRegistro'
import RestoreInit from 'pages/auth/authpages/RestoreInit'
import Login from 'pages/auth/Login'
import Registro from 'pages/auth/Registro'
import Restore from 'pages/auth/Restore'
import ComprasAdmin from 'pages/Compras/ComprasAdmin'
import PedidoActivo from 'pages/Compras/Pedidos/PedidoActivo'
import PedidoDetalle from 'pages/Compras/Pedidos/PedidoDetalle'
import PedidoProductos from 'pages/Compras/Pedidos/PedidoProductos'
import PedidoTracking from 'pages/Compras/Pedidos/PedidoTracking'
import PedidosActivos from 'pages/Compras/PedidosActivos'
import ReclamosActivos from 'pages/Compras/ReclamosActivos'
import Config from 'pages/Config/Config'
import Casero from 'pages/Consumidores/Caseros/Casero'
import ClienteCompras from 'pages/Consumidores/Caseros/CaseroCompras'
import ClienteCreditos from 'pages/Consumidores/Caseros/CaseroCreditos'
import CaseroInfo from 'pages/Consumidores/Caseros/CaseroInfo'
import Clientes from 'pages/Consumidores/Caseros/Caseros'
import ClienteSearch from 'pages/Consumidores/Caseros/CaseroSearch'
import Compra from 'pages/Consumidores/Caseros/compras/Compra'
import DatosCompra from 'pages/Consumidores/Caseros/compras/DatosCompra'
import Fotos from 'pages/Consumidores/Caseros/compras/Fotos'
import HistorialAbonos from 'pages/Consumidores/Caseros/compras/HistorialAbonos'
import Credito from 'pages/Consumidores/Caseros/creditos/Credito'
import DatosCredito from 'pages/Consumidores/Caseros/creditos/DatosCredito'
import NuevoAbono from 'pages/Consumidores/Caseros/creditos/NuevoAbono'
import NuevoCredito from 'pages/Consumidores/Caseros/NuevoCredito'
import Comprador from 'pages/Consumidores/Comprador'
import CompraUsuario from 'pages/Consumidores/Usuarios/Compras/Compra'
import CompraDetalle from 'pages/Consumidores/Usuarios/Compras/CompraDetalle'
import CompraProductos from 'pages/Consumidores/Usuarios/Compras/CompraProductos'
import CompraReclamos from 'pages/Consumidores/Usuarios/Compras/CompraReclamos'
import DireccionUsuario from 'pages/Consumidores/Usuarios/Direcciones/DireccionUsuario'
import ListaUsuario from 'pages/Consumidores/Usuarios/Listas/ListaUsuario'
import ReclamoUsuario from 'pages/Consumidores/Usuarios/Reclamos/ReclamoUsuario'
import UsuarioDirecciones from 'pages/Consumidores/Usuarios/UserDirecciones'
import Usuario from 'pages/Consumidores/Usuarios/Usuario'
import UsuarioComponents from 'pages/Consumidores/Usuarios/UsuarioComponents'
import UsuarioCompras from 'pages/Consumidores/Usuarios/UsuarioCompras'
import UsuarioInfo from 'pages/Consumidores/Usuarios/UsuarioInfo'
import UsuarioListas from 'pages/Consumidores/Usuarios/UsuarioListas'
import UsuarioReclamos from 'pages/Consumidores/Usuarios/UsuarioReclamos'
import Usuarios from 'pages/Consumidores/Usuarios/Usuarios'
import DetalleProducto from 'pages/productos/DetalleProducto/DetalleProducto'
import DatosBasicosProducto from 'pages/productos/NuevoProducto/DatosBasicosProducto'
import NombreProducto from 'pages/productos/NuevoProducto/NombreProducto'
import PrecioProducto from 'pages/productos/NuevoProducto/PrecioProducto'
import PrecioProductoMinoreo from 'pages/productos/NuevoProducto/PrecioProductoMinoreo'
import ResumenProducto from 'pages/productos/NuevoProducto/ResumenProducto'
import StockProducto from 'pages/productos/NuevoProducto/StockProducto'
import ProductoCategoria from 'pages/productos/ProductoCategoria'
import Productos from 'pages/productos/Productos'
import ReportePrecios from 'pages/Reportes/ReportePrecios'
import Reportes from 'pages/Reportes/Reportes'
import ReporteVentas from 'pages/Reportes/ReporteVentas'
import ReporteProductos from 'pages/Reportes/RerpoteProductos'
import Chat from 'pages/Trabajadores/Chat/Chat'
import Trabajador from 'pages/Trabajadores/Trabajador'
import TrabajadorCall from 'pages/Trabajadores/TrabajadorCall'
import Trabajadores from 'pages/Trabajadores/Trabajadores'
import TrabajadorInfo from 'pages/Trabajadores/TrabajadorInfo'
import React, { useContext, useEffect } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import PublicRoute from './PublicRoute'

const RouterApp = () => {
  const rregistro = '/auth/registro/'
  const rrestore = '/auth/restore/'
  const rcliente = '/comprador/clientes/'
  const rusuario = '/comprador/usuarios/'

  const { logged, verificarToken, checking } = useContext(AuthContext)

  const routes = [
    {
      path: '/auth',
      element: <PublicRoute isAutenticated={logged} />,
      children: [
        { path: '/auth/login', element: <Login /> },
        {
          path: '/auth/registro',
          element: <Navigate to={`${rregistro}datos-basicos`} />
        },
        {
          path: '/auth/registro',
          element: <Registro />,
          children: [
            { path: `${rregistro}datos-basicos`, element: <DatosBasicos /> },
            {
              path: `${rregistro}datos-personales`,
              element: <DatosPersonales />
            },
            { path: `${rregistro}datos-contacto`, element: <DatosContacto /> },
            { path: `${rregistro}finalizado`, element: <MensajeRegistro /> }
          ]
        },
        {
          path: '/auth/restore',
          element: <Navigate to={`${rrestore}credenciales`} />
        },
        {
          path: '/auth/restore',
          element: <Restore />,
          children: [
            { path: `${rrestore}credenciales`, element: <RestoreInit /> },
            { path: `${rrestore}finalizado`, element: <MensajeRestore /> }
          ]
        }
      ]
    },

    { path: '/', element: <Navigate to="/ventas/pedidos" /> },

    {
      path: '/',
      element: <Admin isAutenticated={logged} />,
      children: [
        {
          path: '/comprador/search/:search',
          element: <ClienteSearch />
        },
        {
          path: '/configuracion',
          element: <Config />
        },
        {
          path: '/reportes',
          element: <Reportes />,
          children: [
            { path: '/reportes/ventas', element: <ReporteVentas /> },
            { path: '/reportes/productos', element: <ReporteProductos /> },
            { path: '/reportes/precios', element: <ReportePrecios /> }
          ]
        },
        {
          path: '/trabajadores',
          element: <Trabajadores />
        },
        {
          path: '/trabajadores/:trabajadorID',
          element: <Trabajador />,
          children: [
            { path: '/trabajadores/:trabajadorID/chat', element: <Chat /> },
            {
              path: '/trabajadores/:trabajadorID/info',
              element: <TrabajadorInfo />
            },
            {
              path: '/trabajadores/:trabajadorID/call',
              element: <TrabajadorCall />
            }
          ]
        },
        {
          path: '/productos',
          element: <Productos />
        },
        {
          path: '/productos/:categoria',
          element: <ProductoCategoria />,
          children: [
            {
              path: '/productos/:categoria/nombre',
              element: <NombreProducto />
            },
            {
              path: '/productos/:categoria/datos-basicos',
              element: <DatosBasicosProducto />
            },
            {
              path: '/productos/:categoria/precios',
              element: <PrecioProducto />
            },
            {
              path: '/productos/:categoria/precios-minoreo',
              element: <PrecioProductoMinoreo />
            },
            {
              path: '/productos/:categoria/stock',
              element: <StockProducto />
            },
            {
              path: '/productos/:categoria/resumen',
              element: <ResumenProducto />
            }
          ]
        },
        {
          path: '/productos/:categoria/:productoID',
          element: <DetalleProducto />
        },

        {
          path: '/ventas',
          element: <ComprasAdmin />,
          children: [
            { path: '/ventas/pedidos', element: <PedidosActivos /> },
            {
              path: '/ventas/pedidos/:pedidoactivoID',
              element: <PedidoActivo />,
              children: [
                {
                  path: '/ventas/pedidos/:pedidoactivoID/detalles',
                  element: <PedidoDetalle />
                },
                {
                  path: '/ventas/pedidos/:pedidoactivoID/productos',
                  element: <PedidoProductos />
                },
                {
                  path: '/ventas/pedidos/:pedidoactivoID/tracking',
                  element: <PedidoTracking />
                }
              ]
            },
            { path: '/ventas/reclamos', element: <ReclamosActivos /> }
          ]
        },

        {
          path: '/comprador',
          element: <Comprador />,
          children: [
            {
              path: '/comprador/clientes',
              element: <Clientes />
            },

            {
              path: '/comprador/clientes/:clienteID',
              element: <Casero />,
              children: [
                { path: `${rcliente}:clienteID/*`, element: <p>404</p> },
                { path: `${rcliente}:clienteID/info`, element: <CaseroInfo /> },
                {
                  path: `${rcliente}:clienteID/compras`,
                  element: <ClienteCompras />,
                  children: [
                    {
                      path: `${rcliente}:clienteID/compras/:compraID`,
                      element: <Compra />,
                      children: [
                        {
                          path: `${rcliente}:clienteID/compras/:compraID/abonos`,
                          element: <HistorialAbonos />
                        },
                        {
                          path: `${rcliente}:clienteID/compras/:compraID/fotos`,
                          element: <Fotos />
                        },
                        {
                          path: `${rcliente}:clienteID/compras/:compraID/detalles`,
                          element: <DatosCompra />
                        }
                      ]
                    }
                  ]
                },
                {
                  path: `${rcliente}:clienteID/creditos`,
                  element: <ClienteCreditos />,
                  children: [
                    {
                      path: `${rcliente}:clienteID/creditos/:creditoID`,
                      element: <Credito />,
                      children: [
                        {
                          path: `${rcliente}:clienteID/creditos/:creditoID/abonos`,
                          element: <HistorialAbonos />
                        },
                        {
                          path: `${rcliente}:clienteID/creditos/:creditoID/fotos`,
                          element: <Fotos />
                        },
                        {
                          path: `${rcliente}:clienteID/creditos/:creditoID/detalles`,
                          element: <DatosCredito />
                        },
                        {
                          path: `${rcliente}:clienteID/creditos/:creditoID/nuevo-abono`,
                          element: <NuevoAbono />
                        }
                      ]
                    }
                  ]
                },
                {
                  path: `${rcliente}:clienteID/nuevo-credito`,
                  element: <NuevoCredito />
                }
              ]
            },

            {
              path: '/comprador/usuarios',
              element: <Usuarios />
            },
            {
              path: '/comprador/usuarios/:userID',
              element: <Usuario />,
              children: [
                {
                  path: `${rusuario}:userID/elementos`,
                  element: <UsuarioComponents />
                },
                { path: `${rusuario}:userID/datos`, element: <UsuarioInfo /> },
                {
                  path: `${rusuario}:userID/compras`,
                  element: <UsuarioCompras />
                },
                {
                  path: `${rusuario}:userID/compras/:compraID`,
                  element: <CompraUsuario />,
                  children: [
                    {
                      path: `${rusuario}:userID/compras/:compraID/detalle`,
                      element: <CompraDetalle />
                    },
                    {
                      path: `${rusuario}:userID/compras/:compraID/productos`,
                      element: <CompraProductos />
                    },
                    {
                      path: `${rusuario}:userID/compras/:compraID/reclamos`,
                      element: <CompraReclamos />
                    }
                  ]
                },

                {
                  path: `${rusuario}:userID/listas`,
                  element: <UsuarioListas />
                },
                {
                  path: `${rusuario}:userID/listas/:listaID`,
                  element: <ListaUsuario />
                },
                {
                  path: `${rusuario}:userID/direcciones`,
                  element: <UsuarioDirecciones />
                },
                {
                  path: `${rusuario}:userID/direcciones/:direccionID`,
                  element: <DireccionUsuario />
                },
                {
                  path: `${rusuario}:userID/reclamos`,
                  element: <UsuarioReclamos />
                },
                {
                  path: `${rusuario}:userID/reclamos/:reclamoID`,
                  element: <ReclamoUsuario />
                }
              ]
            }
          ]
        }
      ]
    },

    {
      path: '*',
      element: <div>404</div>
    }
  ]

  const element = useRoutes(routes)

  useEffect(() => {
    verificarToken()
  }, [verificarToken])

  if (checking) {
    return <h1>cargando ....</h1>
  }

  // aca hay error

  return <>{element}</>
}

export default RouterApp
