import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarshipsClient from '../../../http/clients/Starships';
import IEntity from '../../../interfaces/domain/IEntity';
import IStarship from '../../../interfaces/domain/IStarship';
import DetailView from '../../../views/Detail/DetailView';

const StarshipDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IStarship>();

  useEffect(() => {
    if (id) {
      const client = new StarshipsClient();
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


export default StarshipDetail;