import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.gray};
  border-top: 16px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading : FC = () => (
  <StyledLoading>
    <Spinner />
  </StyledLoading>
)

export default Loading;