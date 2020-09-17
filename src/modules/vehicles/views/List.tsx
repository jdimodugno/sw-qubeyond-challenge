import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import VehiclesClient from '../../../http/clients/Vehicles';

const VehiclesList : FC = () => {
  const { vehicles, updateVehicles } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!vehicles?.fetchedPages.includes(page)) {
      const client = new VehiclesClient();
      client.read(page)
        .then((data) => {
          updateVehicles(data.results, page, data.count);
        });

    }
  }, [vehicles, updateVehicles, page])

  return (
    <div>VehiclesList</div>
  );
};

export default VehiclesList;