import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import VehiclesClient from '../../../http/clients/Vehicles';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/vehicles';

const VehiclesList : FC = () => {
  const { vehicles, updateVehicles } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    if (!vehicles?.fetchedPages.includes(page)) {
      const client = new VehiclesClient();
      client.read(page)
        .then((data) => {
          updateVehicles(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [vehicles, updateVehicles, page, setLoading])

  return (
    <ListView
      page={page}
      count={vehicles?.total}
      schema={ListSchema}
      loading={loading}
      list={vehicles?.pages[page] || []}
      setPage={setPage}
    />
  );
};

export default VehiclesList;