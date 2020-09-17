import React, { FC, useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import FilmsClient from '../../../http/clients/Films';

const FilmsList : FC = () => {
  const { films, updateFilms } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!films?.fetchedPages.includes(page)) {
      const client = new FilmsClient();
      client.read(page)
        .then((data) => {
          updateFilms(data.results, page, data.count);
        });
    }
  }, [films, updateFilms, page])

  return (
    <div>FilmsList</div>
  );
};

export default FilmsList;