import React, { FC, useCallback, useState } from 'react';
import IEntityPageData from '../interfaces/core/IEntityPageData';
import IStarWarsEntity from '../interfaces/domain/IStarWarsEntity';
import { getIdFromUrl } from '../utils/urlHelpers';

interface IContext {
  [x: string]: IEntityPageData<IStarWarsEntity>|undefined|((data: Array<IStarWarsEntity>, page: number, total: number) => void);
}

export const GlobalContext = React.createContext<IContext>({
  films: undefined,
  updateFilms: () => {},
  people: undefined,
  updatePeople: () => {},
  planets: undefined,
  updatePlanets: () => {},
  species: undefined,
  updateSpecies: () => {},
  starships: undefined,
  updateStarships: () => {},
  vehicles: undefined,
  updateVehicles: () => {},
});

function updateSet<T extends IStarWarsEntity>(
  data: Array<T>,
  page: number,
  total: number,
  setter: React.Dispatch<React.SetStateAction<IEntityPageData<T>|undefined>>,
) : void {
  setter((prev: IEntityPageData<T> | undefined) => {
    const dataWithIds = data.map((entry) => {
      const id = getIdFromUrl(entry.url);
      return ({ ...entry, id });
    });
    const ids = dataWithIds.map(entry => entry.id);
    const fetchedPages = prev ? [...prev.fetchedPages, page] : [page];
    const fetchedIds = prev ? [...prev.fetchedIds, ...ids] : [...ids];
    
    const results = prev ? [...prev.results, ...dataWithIds] : [...dataWithIds];
    
    // sort in order to favor binary search 
    results.sort((a, b) => a.id > b.id ? 1 : -1);
    return ({ fetchedPages, fetchedIds, total, results });
  });
}

const GlobalProvider : FC = ({ children }) => {
  const [films, setFilms] = useState<IEntityPageData<IStarWarsEntity>|undefined>();
  const [people, setPeople] = useState<IEntityPageData<IStarWarsEntity>|undefined>();
  const [planets, setPlanets] = useState<IEntityPageData<IStarWarsEntity>|undefined>();
  const [species, setSpecies] = useState<IEntityPageData<IStarWarsEntity>|undefined>();
  const [starships, setStarships] = useState<IEntityPageData<IStarWarsEntity>|undefined>();
  const [vehicles, setVehicles] = useState<IEntityPageData<IStarWarsEntity>|undefined>();

  const updateFilms = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setFilms);
    }, [setFilms],
  );

  const updatePeople = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setPeople);
    }, [setPeople],
  );

  const updatePlanets = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setPlanets);
    }, [setPlanets],
  );

  const updateSpecies = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setSpecies);
    }, [setSpecies],
  );

  const updateStarships = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setStarships);
    }, [setStarships],
  );

  const updateVehicles = useCallback(
    (data: Array<IStarWarsEntity>, page: number, total: number) => {
      updateSet<IStarWarsEntity>(data, page, total, setVehicles);
    }, [setVehicles],
  );
  
  return (
    <GlobalContext.Provider
      value={{
        films,
        updateFilms,
        people,
        updatePeople,
        planets,
        updatePlanets,
        species,
        updateSpecies,
        starships,
        updateStarships,
        vehicles,
        updateVehicles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;