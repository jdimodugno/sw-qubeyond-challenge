import React, { FC, useEffect, useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import IEntityData from '../../interfaces/core/IEntityPageData';
import IResultPages from '../../interfaces/core/IResultPages';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DataHelper from '../../services/dataHelper';
import { mapEndpointFromUrl } from '../../utils/urlHelpers';
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
  const [sortingField, setSortingField] = useState<string>(schema.defaultSort);
  const [sortByFieldAsc, setSortByFieldAsc] = useState<boolean>(true);
  const history = useHistory();
  
  const toggleOrder = useCallback(
    () => { setSortByFieldAsc(!sortByFieldAsc) }, [setSortByFieldAsc, sortByFieldAsc],
  );

  const handleItemNavigation = useCallback(
    (url: string) => { 
      history.push(mapEndpointFromUrl(url));
    }, [history]
  );

  // get the entity collection through a dynamic key
  const collection = ctx[collectionName];
  // get the entity collection setter through a dynamic key
  const updateCollection = ctx[updateCollectionSetterName];

  useEffect(() => {
    if (!(collection as IEntityData<IStarWarsEntity>)?.fetchedPages.includes(page)) {
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
        collection as IEntityData<IStarWarsEntity>,
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
      count={(collection as IEntityData<IStarWarsEntity>)?.total || 0}
      schema={schema.fields}
      handleItemNavigation={handleItemNavigation}
    />
  );
}

export default ListContainer;