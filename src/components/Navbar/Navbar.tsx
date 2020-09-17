import React, { FC } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

const Navbar : FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static" color="secondary">
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Star Wars Challenge
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;