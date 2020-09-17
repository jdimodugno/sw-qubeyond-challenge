import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import SpeciesClient from '../../../http/clients/Species';

const SpeciesList : FC = () => {
  const { species, updateSpecies } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);
  
  useEffect(() => {
    if (!species?.fetchedPages.includes(page)) {
      const client = new SpeciesClient();
      client.read(page)
        .then((data) => {
          updateSpecies(data.results, page, data.count);
        });

    }
  }, [species, updateSpecies, page])

  return (
    <div>PlanetsList</div>
  );
};

export default SpeciesList;