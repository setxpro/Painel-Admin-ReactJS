import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';

const GoLogin: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

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
                    <C.Button>Acessar Painel</C.Button>
                </C.Form>
            </C.AreaForm>
      </C.Container>
  );
}

export default GoLogin;