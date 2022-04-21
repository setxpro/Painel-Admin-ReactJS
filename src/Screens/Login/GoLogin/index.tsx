import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AlterAuthenticatedContext } from '../../../Context/Auth/AlterAuthenticatedContext';
import { AuthContext } from '../../../Context/Auth/AuthContext';

import * as C from './styles';

const GoLogin: React.FC = () => {

    const { isAuthenticated } = useContext(AlterAuthenticatedContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLogin = async() => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                isAuthenticated();
                navigate('/analitcs');
            }
            else {
                alert('Não foi possível fazer Login...')
            }
        }

       
    }


  return (
      <C.Container>
            <C.AreaForm>
                <C.Form>
                    <C.InputGroup>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label>Email</label>
                    </C.InputGroup>
                    <C.InputGroup>
                        <input type="password" name="password" value={password}  onChange={e => setPassword(e.target.value)}/>
                        <label>Senha</label>
                    </C.InputGroup>
                    <C.Button onClick={handleLogin}>Acessar Painel</C.Button>
                </C.Form>
            </C.AreaForm>
            <Link to="/step1"><button>Cadastre-se para utilizar a plataforma.</button></Link>
      </C.Container>
  );
}

export default GoLogin;