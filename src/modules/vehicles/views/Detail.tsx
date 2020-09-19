import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VehiclesClient from '../../../http/clients/Vehicles';
import IEntity from '../../../interfaces/domain/IEntity';
import IVehicle from '../../../interfaces/domain/IVehicle';
import DetailView from '../../../views/Detail/DetailView';

const VehicleDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IVehicle>();

  useEffect(() => {
    if (id) {
      const client = new VehiclesClient();
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
};

export default VehicleDetail;