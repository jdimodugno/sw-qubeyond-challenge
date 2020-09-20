import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import VehiclesClient from '../../../http/clients/Vehicles';

const VehicleDetail : FC = () => (
  <DetailContainer
    client={new VehiclesClient()}
    collectionName={'vehicles'}
  />
);

export default VehicleDetail;