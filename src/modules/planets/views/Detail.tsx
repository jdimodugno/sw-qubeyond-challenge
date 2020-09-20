import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import PlanetsClient from '../../../http/clients/Planets';

const PlanetDetail : FC = () => (
  <DetailContainer
    client={new PlanetsClient()}
    collectionName={'planets'}
  />
);


export default PlanetDetail;