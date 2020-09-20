import React, { FC, useEffect, useState, useCallback, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import IResultPages from '../../interfaces/core/IResultPages';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DataHelper from '../../services/dataHelper';
import ListView from '../../views/List/ListView';
import IListContainerProps from './IListContainerProps';

const ListContainer : FC<IListContainerProps> = ({
  client,
  collectionName,
  updateCollectionSetterName,
  schema,
}) => {
  const ctx = useContext(GlobalContext);
  const [page, setPage] = useState<number>(0);
  const [results, setResults] = useState<IResultPages<IStarWarsEntity>>();
  const [loading, setLoading] = useState<boolean>(true)
  const [sortingField, setSortingField] = useState<string>('name');
  const [sortByFieldAsc, setSortByFieldAsc] = useState<boolean>(true);

  const toggleOrder = useCallback(
    () => { setSortByFieldAsc(!sortByFieldAsc) }, [setSortByFieldAsc, sortByFieldAsc],
  );

  const collection = ctx[collectionName];
  const updateCollection = ctx[updateCollectionSetterName];

  useEffect(() => {
    if (!(collection as IResultPages<IStarWarsEntity>)?.fetchedPages.includes(page)) {
      client.read(page)
        .then((data) => {
          (updateCollection as (data: Array<IStarWarsEntity>, page: number, total: number) => void)(data.results, page, data.count);
        });
    }
  }, [collection, updateCollection, page, client]);

  useEffect(() => {
    if (collection) {
      setLoading(false);
      setResults(DataHelper.ComputeSorting<IStarWarsEntity>(
        collection as IResultPages<IStarWarsEntity>,
        sortingField,
        sortByFieldAsc
      ));
    }
  }, [setLoading, collection, sortingField, sortByFieldAsc])

  
  return (
    <ListView
      page={page}
      list={results?.pages[page] || []}
      toggleOrder={toggleOrder}
      setSortingField={setSortingField}
      loading={loading}
      setPage={setPage}
      count={(collection as IResultPages<IStarWarsEntity>)?.total || 0}
      schema={schema}
    />
  );
}

export default ListContainer;