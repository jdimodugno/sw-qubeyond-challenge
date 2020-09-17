import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import PeopleClient from '../../../http/clients/People';

const PeopleList : FC = () => {
  const { people, updatePeople } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!people?.fetchedPages.includes(page)) {
      const client = new PeopleClient();
      client.read(page)
        .then((data) => {
          updatePeople(data.results, page, data.count);
        });

    }
  }, [people, updatePeople, page])
  
  return (<div>PeopleList</div>);
}

export default PeopleList;