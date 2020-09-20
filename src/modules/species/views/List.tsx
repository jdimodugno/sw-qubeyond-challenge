import React, { FC } from 'react';
import SpeciesClient from '../../../http/clients/Species';
import { ListSchema } from '../../../domain/species';
import ListContainer from '../../../containers/List/ListContainer';

const SpeciesList : FC = () => (
  <ListContainer
    client={new SpeciesClient()}
    collectionName={'species'}
    schema={ListSchema}
    updateCollectionSetterName={'updateSpecies'}
  />
);

export default SpeciesList;