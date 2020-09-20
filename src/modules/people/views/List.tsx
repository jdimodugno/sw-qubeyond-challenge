import React, { FC }from 'react';
import PeopleClient from '../../../http/clients/People';
import { ListSchema } from '../../../domain/people';
import ListContainer from '../../../containers/List/ListContainer';

const PeopleList : FC = () => (
  <ListContainer
    client={new PeopleClient()}
    collectionName={'people'}
    schema={ListSchema}
    updateCollectionSetterName={'updatePeople'}
  />
);

export default PeopleList;