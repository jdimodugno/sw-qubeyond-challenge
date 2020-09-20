import React, { FC } from 'react';
import FilmsClient from '../../../http/clients/Films';
import { ListSchema } from '../../../domain/film';
import ListContainer from '../../../containers/List/ListContainer';

const FilmsList : FC = () => (
  <ListContainer
    client={new FilmsClient()}
    collectionName={'films'}
    schema={ListSchema}
    updateCollectionSetterName={'updateFilms'}
  />
);

export default FilmsList;