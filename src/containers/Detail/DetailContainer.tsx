import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import IResultPages from '../../interfaces/core/IResultPages';
import IEntity from '../../interfaces/domain/IEntity';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DetailView from '../../views/Detail/DetailView';
import IDetailContainerProps from './IDetailContainerProps';

const DetailContainer : FC<IDetailContainerProps> = ({
  client,
  collectionName,
}) => {
  const ctx = useContext(GlobalContext);
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IStarWarsEntity>();

  const collection = ctx[collectionName];

  useEffect(() => {
    if (id) {
      setLoading(true);
      const page = (collection as IResultPages<IStarWarsEntity>)?.fetchedIds[id] || 0;
      if (page) {
        setEntity((collection as IResultPages<IStarWarsEntity>)?.pages[page].find(entry => entry.id === id));
        setLoading(false);
      }
      else {
        client.readById(id)
          .then((data) => {
            setEntity(data);
            setLoading(false);
          });
      }
    }
  }, [collection, id, setLoading, setEntity, client]);
  
  return loading ? (
    <div>loading</div>
  ) : (
    <DetailView entity={entity} />
  );
}

export default DetailContainer;