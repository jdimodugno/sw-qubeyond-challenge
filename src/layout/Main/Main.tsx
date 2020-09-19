import React, { FC } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const StyledLayout = styled.div`

`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  > div {
    margin-top: 1em;
  }
`;

const MainLayout : FC = ({ children }) => {


  return (
    <StyledLayout>
      <Navbar />
      <Container>
        { children }
      </Container>
    </StyledLayout>
  );
}

export default MainLayout;