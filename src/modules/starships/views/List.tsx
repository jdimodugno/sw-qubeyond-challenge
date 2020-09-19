import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import StarshipsClient from '../../../http/clients/Starships';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/starship';

const StarshipsList : FC = () => {
  const { starships, updateStarships } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    if (!starships?.fetchedPages.includes(page)) {
      const client = new StarshipsClient();
      client.read(page)
        .then((data) => {
          updateStarships(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [starships, updateStarships, page, setLoading])

  return (
    <ListView
      page={page}
      count={starships?.total}
      schema={ListSchema}
      loading={loading}
      list={starships?.pages[page] || []}
      setPage={setPage}
    />
  );};

export default StarshipsList;