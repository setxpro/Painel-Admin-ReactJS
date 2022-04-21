import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const AlterAuthenticatedContext = createContext({
    authenticated: false,
    isAuthenticated: () => {},
    isNotAuthenticated: () => {},
   
})

export const AlterAuthenticatedProvider = ({children}:{children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    const [authenticated, setAuthenticated] = useState(false);
    const isAuthenticated = () => setAuthenticated(true);
    const isNotAuthenticated = () => setAuthenticated(false);

    return (
        <AlterAuthenticatedContext.Provider value={{ authenticated, isAuthenticated, isNotAuthenticated}}>
            {children}
        </AlterAuthenticatedContext.Provider>
    );
}