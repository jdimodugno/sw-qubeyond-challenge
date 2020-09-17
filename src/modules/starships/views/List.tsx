import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import StarshipsClient from '../../../http/clients/Starships';

const StarshipsList : FC = () => {
  const { starships, updateStarships } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!starships?.fetchedPages.includes(page)) {
      const client = new StarshipsClient();
      client.read(page)
        .then((data) => {
          updateStarships(data.results, page, data.count);
        });
    }
  }, [starships, updateStarships, page])

  return (
    <div>StarshipsList</div>
  );
};

export default StarshipsList;