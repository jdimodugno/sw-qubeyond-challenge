import React, { FC, Suspense } from 'react';
import Default from '../../theme/defaultTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes';
import GlobalProvider from '../../context/GlobalContext';
import { ThemeProvider } from 'styled-components';

const App : FC = () => (
  <Suspense fallback="loading">
    <ThemeProvider theme={Default}>
      <GlobalProvider>
        <Router>
          <AppRoutes />
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  </Suspense>
);

export default App;
