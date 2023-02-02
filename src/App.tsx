import './App.css'
import { initializeApp } from 'firebase/app'
import { BrowserRouter as Router } from 'react-router-dom'
import Notificaciones from 'Components/utilidades/Notificaciones/Notificaciones'
import { AuthProvider } from 'context/auth/AuthProvider'
import { CategoriaProvider } from 'context/categoria/CategoriaProvider'
import { ChatProvider } from 'context/chat/ChatProvider'
import { ProductoProvider } from 'context/productos/ProductoProvider'
import { SocketProvider } from 'context/Socket/SocketProvider'
import RouterApp from 'router/RouterApp'
import { NotificacionProvider } from 'context/Notificaciones/NotificacionProvider'
import { UserProvider } from 'context/user/userProvider'
import { OrderProvider } from 'context/orders/orderProvider'

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
            <SocketProvider>
              <UserProvider>
                <CategoriaProvider>
                  <ProductoProvider>
                    <OrderProvider>
                      <Router>
                        <RouterApp />
                      </Router>
                    </OrderProvider>
                  </ProductoProvider>
                </CategoriaProvider>
              </UserProvider>
              <Notificaciones />
            </SocketProvider>
          </AuthProvider>
        </ChatProvider>
      </NotificacionProvider>
    </div>
  )
}

export default App
