import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import PlanetsClient from '../../../http/clients/Planets';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/planet';

const PlanetsList : FC = () => {
  const { planets, updatePlanets } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    if (!planets?.fetchedPages.includes(page)) {
      const client = new PlanetsClient();
      client.read(page)
        .then((data) => {
          updatePlanets(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [planets, updatePlanets, page, setLoading])

  return (
    <ListView
      page={page}
      count={planets?.total}
      schema={ListSchema}
      loading={loading}
      list={planets?.pages[page] || []}
      setPage={setPage}
    />
  );
};

export default PlanetsList;