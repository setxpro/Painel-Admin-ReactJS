import React, { useContext } from 'react';
import GoLogin from '../../Screens/Login/GoLogin';
import { AuthContext } from './AuthContext';

const RequireAuth = ({ children }: { children: JSX.Element }) => {

    // inpedindo o acesso 
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <GoLogin/>;
    }

  return children;
}

export default RequireAuth;