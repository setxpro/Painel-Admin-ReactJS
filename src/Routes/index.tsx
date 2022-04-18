import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analitcs from '../Screens/Analitcs';
import ComercioEletro from '../Screens/ComercioEletro';

// import { Container } from './styles';

const Rout: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Analitcs/>}/>
          <Route path="/comercio-eletronico" element={<ComercioEletro/>}/>
      </Routes>
  );
}

export default Rout;