import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { GlobalContext } from '../../context/GlobalContext';
import IEntityData from '../../interfaces/core/IEntityPageData';
import IEntity from '../../interfaces/domain/IEntity';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DataHelper from '../../services/dataHelper';
import DetailView from '../../views/Detail/DetailView';
import IDetailContainerProps from './IDetailContainerProps';

const DetailContainer : FC<IDetailContainerProps> = ({
  client,
  collectionName
}) => {
  const ctx = useContext(GlobalContext);
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IStarWarsEntity>();

  const collection = ctx[collectionName];

  useEffect(() => {
    if (id) {
      setLoading(true);
      if ((collection as IEntityData<IStarWarsEntity>)?.fetchedIds.includes(id)) {
        setEntity(DataHelper.BinarySearch((collection as IEntityData<IStarWarsEntity>).results, parseInt(id)));
        setLoading(false);
      } else {
        client.readById(id)
          .then((data) => {
            setEntity(data);
            setLoading(false);
          });
      }
    }
  }, [id, setLoading, setEntity, client]);
  
  return loading ? (
    <Loading />
  ) : (
    <DetailView entity={entity} />
  );
}

export default DetailContainer;