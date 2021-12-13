import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
    _id: '',
    username: '',
    accessToken: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialState);

    const login = (data) => {
        setUser(data);
    };

    const logout = () => {
        setUser(initialState);
    }


    return(
        <AuthContext.Provider value={{user, login, logout, isAuth: user.username}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}