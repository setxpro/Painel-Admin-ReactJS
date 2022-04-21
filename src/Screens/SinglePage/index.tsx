import React from 'react';
import { Link } from 'react-router-dom';

import * as C from './styles';

const SinglePage: React.FC = () => {
  return (
      <C.Container>
        <C.AreaContent>
        <C.AreaTitle>
          <h1>Crie uma conta para acessar o Painel Admin</h1>
        </C.AreaTitle>
         <C.ContentArea>
            <Link to="/step1">Register</Link>
            <Link to="/login">Get Started</Link>
         </C.ContentArea>
         </C.AreaContent>
      </C.Container>
  );
}

export default SinglePage;