import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import SpeciesClient from '../../../http/clients/Species';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/species';

const SpeciesList : FC = () => {
  const { species, updateSpecies } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  
  useEffect(() => {
    setLoading(true);
    if (!species?.fetchedPages.includes(page)) {
      const client = new SpeciesClient();
      client.read(page)
        .then((data) => {
          updateSpecies(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [species, updateSpecies, page, setLoading])

  return (
    <ListView
      page={page}
      count={species?.total}
      schema={ListSchema}
      loading={loading}
      list={species?.pages[page] || []}
      setPage={setPage}
    />
  );
};

export default SpeciesList;