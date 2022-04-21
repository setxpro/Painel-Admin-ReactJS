import { useEffect, useState } from "react"
import { useApi } from "../../Hooks/useApi";
import { User } from '../../types';
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children:JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async() => {
        const storageData = localStorage.getItem('authtoken');
            if (storageData) {
                const data = await api.validateToken(storageData);

                if (data.user) {
                    setUser(data.user);
                }
            }
    }

    const signin = async(email: string, password: string) => {
        const data = await api.signin(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token); // slvando o TOKEN
            return true;
        }
        return false;
    }   

    const logout = async() => {
        setUser(null);
        setToken('');
        await api.logout();
    }

    // salvando no lovalStorage
    const setToken = (token: string) => {
        localStorage.setItem('authtoken', token);
    }


    return (
        <AuthContext.Provider value={{ user, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}