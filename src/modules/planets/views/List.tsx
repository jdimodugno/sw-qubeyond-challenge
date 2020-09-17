import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import PlanetsClient from '../../../http/clients/Planets';

const PlanetsList : FC = () => {
  const { planets, updatePlanets } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!planets?.fetchedPages.includes(page)) {
      const client = new PlanetsClient();
      client.read(page)
        .then((data) => {
          updatePlanets(data.results, page, data.count);
        });

    }
  }, [planets, updatePlanets, page])

  return (
    <div>PlanetsList</div>
  );
};

export default PlanetsList;