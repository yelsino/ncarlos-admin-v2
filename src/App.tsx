import './App.css'
import { initializeApp } from 'firebase/app'
import { BrowserRouter as Router } from 'react-router-dom'
import Notificaciones from 'Components/utilidades/Notificaciones/Notificaciones'
import { AuthProvider } from 'context/auth/AuthProvider'
import { CategoriaProvider } from 'context/categoria/CategoriaProvider'
import { ChatProvider } from 'context/chat/ChatProvider'
import { ProductoProvider } from 'context/productos/ProductoProvider'
import { SocketProvider } from 'context/socket/SocketProvider'
import RouterApp from 'router/RouterApp'
import { UserProvider } from 'context/user/userProvider'
import { OrderProvider } from 'context/orders/orderProvider'
import { NotificacionProvider } from 'context/notificaciones/notificacionProvider'

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyB_EXIwYUNuWOll1ZVbQ9El0cnNhLryXjk',
    authDomain: 'admin-ncarlos.firebaseapp.com',
    projectId: 'admin-ncarlos',
    storageBucket: 'admin-ncarlos.appspot.com',
    messagingSenderId: '143729635451',
    appId: '1:143729635451:web:869975cdfdead420b8b2de'
  }

  // Initialize Firebase
  initializeApp(firebaseConfig)

  // if(navigator.serviceWorker){
  //   navigator.serviceWorker.register('/sw.js');
  // }

  return (
    <div className=" h-screen">
      <NotificacionProvider>
        <ChatProvider>
          <AuthProvider>
              <UserProvider>
                <CategoriaProvider>
                  <ProductoProvider>
                    <OrderProvider>
                      <SocketProvider>
                        <Router>
                          <RouterApp />
                        </Router>
                      </SocketProvider>
                    </OrderProvider>
                  </ProductoProvider>
                </CategoriaProvider>
              </UserProvider>
              <Notificaciones />
          </AuthProvider>
        </ChatProvider>
      </NotificacionProvider>
    </div>
  )
}

export default App
