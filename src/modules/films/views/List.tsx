import React, { FC, useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import FilmsClient from '../../../http/clients/Films';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/film';

const FilmsList : FC = () => {
  const { films, updateFilms } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    if (!films?.fetchedPages.includes(page)) {
      const client = new FilmsClient();
      client.read(page)
        .then((data) => {
          updateFilms(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [films, updateFilms, page, setLoading])

  return (
    <ListView
      page={page}
      count={films?.total}
      schema={ListSchema}
      loading={loading}
      list={films?.pages[page] || []}
      setPage={setPage}
    />
  );
};

export default FilmsList;