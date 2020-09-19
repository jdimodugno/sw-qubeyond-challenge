import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlanetsClient from '../../../http/clients/Planets';
import IEntity from '../../../interfaces/domain/IEntity';
import IPlanet from '../../../interfaces/domain/IPlanet';
import DetailView from '../../../views/Detail/DetailView';

const PlanetDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IPlanet>();

  useEffect(() => {
    if (id) {
      const client = new PlanetsClient();
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


export default PlanetDetail;