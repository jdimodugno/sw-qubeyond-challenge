import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PeopleClient from '../../../http/clients/People';
import IEntity from '../../../interfaces/domain/IEntity';
import IPeople from '../../../interfaces/domain/IPeople';
import DetailView from '../../../views/Detail/DetailView';

const PeopleDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IPeople>();

  useEffect(() => {
    if (id) {
      const client = new PeopleClient();
      client.readById(id)
        .then((data) => {
          setEntity(data);
          setLoading(false);
        });
    }
  }, [id]);

  return loading ? (
    <div>123</div>
  ) : (
    <DetailView
      entity={entity}
    />
  );
}

export default PeopleDetail;