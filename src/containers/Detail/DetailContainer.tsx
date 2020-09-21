import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import IEntity from '../../interfaces/domain/IEntity';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DetailView from '../../views/Detail/DetailView';
import IDetailContainerProps from './IDetailContainerProps';

const DetailContainer : FC<IDetailContainerProps> = ({
  client,
}) => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IStarWarsEntity>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      client.readById(id)
        .then((data) => {
          setEntity(data);
          setLoading(false);
        });
    }
  }, [id, setLoading, setEntity, client]);
  
  return loading ? (
    <Loading />
  ) : (
    <DetailView entity={entity} />
  );
}

export default DetailContainer;