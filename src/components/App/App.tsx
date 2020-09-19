import React, { FC } from 'react';
import Default from '../../theme/defaultTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes';
import GlobalProvider from '../../context/GlobalContext';
import { ThemeProvider } from 'styled-components';

const App : FC = () => (
  <ThemeProvider theme={Default}>
    <GlobalProvider>
      <Router>
        <AppRoutes />
      </Router>
    </GlobalProvider>
  </ThemeProvider>
);

export default App;
