import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpeciesClient from '../../../http/clients/Species';
import IEntity from '../../../interfaces/domain/IEntity';
import ISpecies from '../../../interfaces/domain/ISpecies';
import DetailView from '../../../views/Detail/DetailView';

const SpeciesDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<ISpecies>();

  useEffect(() => {
    if (id) {
      const client = new SpeciesClient();
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


export default SpeciesDetail;