import React, { FC } from 'react';
import DetailContainer from '../../../containers/Detail/DetailContainer';
import PeopleClient from '../../../http/clients/People';

const PeopleDetail : FC = () => (
  <DetailContainer client={new PeopleClient()} />
);

export default PeopleDetail;