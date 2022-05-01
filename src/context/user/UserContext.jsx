import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const UserContext = createContext(null);

const initialState = {
  caceros: [],
  casero: {},
  getdata: false,
  usuarios: [],
  user_selected: {},
  claims: [],
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
    const resp = await fetchConToken('users/caseros');
    console.log(resp);
    if (resp.ok) {
      setUser({ ...users, caceros: resp.usuarios });
    }


  }

  const obtenerUsuarios = async () => {
    const resp = await fetchConToken('users');
    if (resp.ok) {
      setUser({ ...users, usuarios: resp.usuarios });
    }
  }

  const getDetailUser = async (id) => {
    try {
      const resp = await fetchConToken(`users/detail/${id}`);
      console.log(resp);
      if (resp.ok) {
        setUser({ ...users, user_selected: resp.data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getDetailCasero = async (id) => {
    try {
      const resp = await fetchConToken(`users/detail-casero/${id}`);
      console.log(resp);
      if (resp.ok) {
        setUser({ ...users, casero: resp.data, getdata: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getClaimsAll = async () => {
    try {
      const resp = await fetchConToken('claims');
      if (resp.ok) {
        setUser({ ...users, claims: resp.claims });
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <UserContext.Provider value={{
      users,
      setUser,
      obtenerCaseros,
      obtenerUsuarios,
      getDetailUser,
      getClaimsAll,
      getDetailCasero
    }}>
      {children}
    </UserContext.Provider>
  )

}