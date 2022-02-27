import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const UserContext = createContext(null);

const initialState = {
  caceros: [],
  usuarios: [],
  trabajadores: [],
  newWorker: {
    email: '',
    password: '',
    apodo: '',
    nombres: '',
    apellidos: '',
    celular: '',
    correo: '',
    direccion: '',
  }
}

export const UserProvider = ({ children }) => {

  const [users, setUser] = useState(initialState);


  const obtenerCaseros = async () => {
    const resp = await fetchConToken('usuarios/caseros');
    console.log(resp);
    if (resp.ok) {
      setUser({ ...users, caceros: resp.usuarios });
    }


  }

  const obtenerUsuarios = async () => {
    const resp = await fetchConToken('usuarios');
    if (resp.ok) {
      setUser({ ...users, usuarios: resp.usuarios });
    }
  }





  return (
    <UserContext.Provider value={{
      users,
      setUser,
      obtenerCaseros,
      obtenerUsuarios
    }}>
      {children}
    </UserContext.Provider>
  )

}