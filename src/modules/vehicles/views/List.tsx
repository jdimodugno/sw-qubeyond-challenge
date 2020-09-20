import React, { FC } from 'react';
import VehiclesClient from '../../../http/clients/Vehicles';
import { ListSchema } from '../../../domain/vehicles';
import ListContainer from '../../../containers/List/ListContainer';

const VehiclesList : FC = () => (
  <ListContainer
    client={new VehiclesClient()}
    collectionName={'vehicles'}
    schema={ListSchema}
    updateCollectionSetterName={'updateVehicles'}
  />
);

export default VehiclesList;