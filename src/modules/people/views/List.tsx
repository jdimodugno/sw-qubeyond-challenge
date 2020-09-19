import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import PeopleClient from '../../../http/clients/People';
import ListView from '../../../views/List/ListView';
import { ListSchema } from '../../../domain/people';

const PeopleList : FC = () => {
  const { people, updatePeople } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    if (!people?.fetchedPages.includes(page)) {
      const client = new PeopleClient();
      client.read(page)
        .then((data) => {
          updatePeople(data.results, page, data.count);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [people, updatePeople, page, setLoading])
  
  return (
    <ListView
      page={page}
      count={people?.total}
      schema={ListSchema}
      loading={loading}
      list={people?.pages[page] || []}
      setPage={setPage}
    />
  );}

export default PeopleList;