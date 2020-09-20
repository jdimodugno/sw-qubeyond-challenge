import React, { FC } from 'react';
import StarshipsClient from '../../../http/clients/Starships';
import { ListSchema } from '../../../domain/starship';
import ListContainer from '../../../containers/List/ListContainer';

const StarshipsList : FC = () => (
  <ListContainer
    client={new StarshipsClient()}
    collectionName={'starships'}
    schema={ListSchema}
    updateCollectionSetterName={'updateStarships'}
  />
);

export default StarshipsList;