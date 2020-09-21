import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import SpeciesClient from '../../../http/clients/Species';

const SpeciesDetail : FC = () => (
  <DetailContainer client={new SpeciesClient()} />
);

export default SpeciesDetail;