import React, { FC } from 'react';
import { Box, Container } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import useStyles from './styles';

const MainLayout : FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Container className={classes.container}>
        <Box>
          { children }
        </Box>
      </Container>
    </Box>
  );
}

export default MainLayout;