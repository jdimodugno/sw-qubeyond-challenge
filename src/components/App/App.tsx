import React, { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import Default from '../../theme/defaultTheme';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes';
import GlobalProvider from '../../context/GlobalContext';

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
