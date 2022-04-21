import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AlterAuthenticatedContext } from '../../../Context/Auth/AlterAuthenticatedContext';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import { FormContext } from '../../../Context/FormContext';



import * as C from './styles';

const GoLogin: React.FC = () => {

    const { isAuthenticated } = useContext(AlterAuthenticatedContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const authName = useContext(FormContext);

    const notify = () => toast(`Welcame ${authName?.state.name}`);
    const error = () => toast('Não foi possível logar neste momento, porfavor tente novamente mais tarde!')

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                isAuthenticated();
                navigate('/analitcs');  
            }
            return notify();
        }
        return error();
       
    }


  return (
      <C.Container>
          <ToastContainer />
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
                    <C.Button type='submit' onClick={handleLogin}>Acessar Painel</C.Button>
                </C.Form>
            </C.AreaForm>
            <Link to="/step1"><button>Cadastre-se para utilizar a plataforma.</button></Link>
      </C.Container>
  );
}

export default GoLogin;