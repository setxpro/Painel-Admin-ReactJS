import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles/AppStyles';

import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

import usePersistedState from './utils/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/Themes/light';
import dark from './styles/Themes/dark';
import { RouteStep } from './Routes';
import { FormProvider } from './Context/FormContext';
import { AlterAuthenticatedContext } from './Context/Auth/AlterAuthenticatedContext';
import { ToastContainer, toast } from 'react-toastify';



const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    toggle();
  }

  const { authenticated } = useContext(AlterAuthenticatedContext);

  const [showTheme, setShowTheme] = useState(true);
  const toggle = () => setShowTheme(!showTheme);

 
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <FormProvider>
      {authenticated ? 
       <C.Container> 
        <Sidebar/> 
          <C.ContainerGenerate> 
            <Header toggleTheme={toggleTheme} showTheme={showTheme}/>
            <Main/> 
          </C.ContainerGenerate> 
        </C.Container> 
        :
        <RouteStep />  }
      </FormProvider>
    </ThemeProvider> 
  );
}

export default App;