import { createContext, useState } from "react";
// Creamos el contexto
export const AuthContext = createContext();
// Creamos el proveedor del contexto
export const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState(null);
    const [ token, setToken] = useState( localStorage.getItem('token') );

    const login = ( userData, userToken ) =>{
        setUser(userData);
        setToken( userToken);
        localStorage.setItem('token', userToken);
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={ {user, token, login, logout } } >
            { children }
        </AuthContext.Provider>
    )

}
