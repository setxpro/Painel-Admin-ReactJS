import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../Context/Auth/RequireAuth';
import Analitcs from '../Screens/Analitcs';
import ComercioEletro from '../Screens/ComercioEletro';
import GoLogin from '../Screens/Login/GoLogin';
import Step1 from '../Screens/Login/Step1';
import Step2 from '../Screens/Login/step2';
import Step3 from '../Screens/Login/step3';
import SinglePage from '../Screens/SinglePage';


const Rout: React.FC = () => {
  return (
      <Routes>
       
          <Route path="/analitcs" element={<Analitcs/>}/>
          <Route path="/comercio-eletronico" element={<ComercioEletro/>}/>
      
      </Routes>
  );
}


export const RouteStep: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<SinglePage/>}/>
        <Route path="/login" element={<GoLogin />}/>
        <Route path="/step1" element={<Step1/>}/>
        <Route path="/step2" element={<Step2/>}/>
        <Route path="/step3" element={<Step3/>}/>
    </Routes>
  )
}

export default Rout;