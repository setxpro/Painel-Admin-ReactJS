import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AlterAuthenticatedProvider } from './Context/Auth/AlterAuthenticatedContext';
import { AuthProvider } from './Context/Auth/AuthProvider';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AlterAuthenticatedProvider>
    <AuthProvider>
        <BrowserRouter>
          <GlobalStyles/>
          <App />
        </BrowserRouter>
      </AuthProvider>
      </AlterAuthenticatedProvider>
  </React.StrictMode>
);
