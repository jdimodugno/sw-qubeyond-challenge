import React, { FC } from 'react';
import styled from 'styled-components';
import { moduleRoutes } from '../../routes';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 8px 8px ${({ theme }) => theme.colors.gray};
  padding: .75em;

  > nav {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};

    > div {
      margin-left: 1em;

      > a:not(:last-of-type) {
        margin-right: .5em;
      }
    }
  }
`;

const Navbar : FC = () => (
  <StyledHeader>
    <nav>
      <div>Star Wars Challenge</div>
      <div>
        {
          moduleRoutes
            .filter(({ navLabel }) => !!navLabel)
            .map(({ key, path, navLabel }) => (
              <Link key={key} to={path}>{navLabel}</Link>
            ))
        }
      </div>
    </nav>
  </StyledHeader>
);

export default Navbar;