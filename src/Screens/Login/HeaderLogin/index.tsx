import React from 'react';

import * as C from './styles';

const HeaderLogin: React.FC = () => {
    return(
        <C.Container>
            <h1>Cadastro de Desenvolvedores</h1>
            <p>Cadastre-se para Acessar o Painel Administrativo</p>
        </C.Container>
    );
}

export default HeaderLogin;