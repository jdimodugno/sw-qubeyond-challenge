import React, { FC } from 'react';
import PlanetsClient from '../../../http/clients/Planets';
import { ListSchema } from '../../../domain/planet';
import ListContainer from '../../../containers/List/ListContainer';

const PlanetsList : FC = () => (
  <ListContainer
    client={new PlanetsClient()}
    collectionName={'planets'}
    schema={ListSchema}
    updateCollectionSetterName={'updatePlanets'}
  />
);

export default PlanetsList;