import React from 'react';
import { Link } from 'react-router-dom';

import * as C from './styles';

const HeaderLogin: React.FC = () => {
    return(
        <C.Container>
            <C.AreaHeader>
                <h1>Cadastro de Desenvolvedores</h1>
                <p>Cadastre-se para Acessar o Painel Administrativo</p>
            </C.AreaHeader>
            <C.AreaButton>
                <Link to="/">Go Back</Link>
            </C.AreaButton>
        </C.Container>
    );
}

export default HeaderLogin;