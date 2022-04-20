import React, { useState } from 'react';
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
import GoLogin from './Screens/Login/GoLogin';




const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    toggle();
  }

 
  const [showTheme, setShowTheme] = useState(true);
  const toggle = () => setShowTheme(!showTheme);

  const [authenticated, setAuthenticated] = useState(false);
  const toggleAuthenticated = () => setAuthenticated(!authenticated);

  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
    
        {!authenticated ?  <GoLogin/>: //<RouteStep/>
        
       <C.Container> 
        <Sidebar/> 
          <C.ContainerGenerate> 
            <Header toggleTheme={toggleTheme} showTheme={showTheme}/>
            <Main/> 
          </C.ContainerGenerate> 
        </C.Container> 
        }
        </FormProvider>
    </ThemeProvider> 
  );
}

export default App;