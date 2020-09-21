import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import StarshipsClient from '../../../http/clients/Starships';

const StarshipDetail : FC = () => (
  <DetailContainer client={new StarshipsClient()} />
);

export default StarshipDetail;