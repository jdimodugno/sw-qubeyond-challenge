import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import FilmsClient from '../../../http/clients/Films';

const FilmDetail : FC = () => (
  <DetailContainer
    client={new FilmsClient()}
    collectionName={'films'}
  />
);

export default FilmDetail;