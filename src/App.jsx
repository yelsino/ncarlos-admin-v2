import "./App.css";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router } from "react-router-dom";
import { SocketProvider } from "./context/Socket/SocketContext";
import NotificacionState from "./context/Notificaciones/notificacionState";
import { ChatProvider } from "./context/chat/ChatContext";
import { AuthProvider } from "./context/auth/AuthContext";
// import Notificaciones from "./components/utilidades/Notificaciones/Notificaciones";
import RouterApp from "./router/RouterApp";
import { UserProvider } from "./context/user/UserContext";
import { CateriaProvider } from "./context/categoria/CategoriaContext";
import { ProductoProvider } from "./context/productos/ProductoContex";
import { OrderProvider } from "./context/orders/OrderContext";
import Notificaciones from "./Components/utilidades/Notificaciones/Notificaciones";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB_EXIwYUNuWOll1ZVbQ9El0cnNhLryXjk",
    authDomain: "admin-ncarlos.firebaseapp.com",
    projectId: "admin-ncarlos",
    storageBucket: "admin-ncarlos.appspot.com",
    messagingSenderId: "143729635451",
    appId: "1:143729635451:web:869975cdfdead420b8b2de",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  // if(navigator.serviceWorker){
  //   navigator.serviceWorker.register('/sw.js');
  // }

  return (
    <div className=" h-screen">
      <NotificacionState>
        <ChatProvider>
          <AuthProvider>
            <SocketProvider>
              <UserProvider>
                <CateriaProvider>
                  <ProductoProvider>
                    <OrderProvider>
                      <Router>
                        <RouterApp />
                      </Router>
                    </OrderProvider>
                  </ProductoProvider>
                </CateriaProvider>
              </UserProvider>
              <Notificaciones />
            </SocketProvider>
          </AuthProvider>
        </ChatProvider>
      </NotificacionState>
    </div>
  );
}

export default App;
