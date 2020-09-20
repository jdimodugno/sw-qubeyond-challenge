import React, { FC, useCallback, useState } from 'react';
import IResultPages from '../interfaces/core/IResultPages';
import IStarWarsEntity from '../interfaces/domain/IStarWarsEntity';
import { getIdFromUrl } from '../utils/urlHelpers';

interface IContext {
  [x: string]: IResultPages<IStarWarsEntity>|undefined|((data: Array<IStarWarsEntity>, page: number, total: number) => void);
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
  setter: React.Dispatch<React.SetStateAction<IResultPages<T>|undefined>>,
) : void {
  setter((prev: IResultPages<T> | undefined) => {
    const dataWithIds = data.map((entry) => {
      const id = getIdFromUrl((entry as unknown as IStarWarsEntity).url);
      return ({ ...entry, id });
    });
    const fetchedPages = prev ? [...prev.fetchedPages, page] : [page];
    const pages = prev ? [...prev.pages, dataWithIds] : [dataWithIds];
    
    return ({ fetchedPages, fetchedIds: {}, total, pages });
  });
}

const GlobalProvider : FC = ({ children }) => {
  const [films, setFilms] = useState<IResultPages<IStarWarsEntity>|undefined>();
  const [people, setPeople] = useState<IResultPages<IStarWarsEntity>|undefined>();
  const [planets, setPlanets] = useState<IResultPages<IStarWarsEntity>|undefined>();
  const [species, setSpecies] = useState<IResultPages<IStarWarsEntity>|undefined>();
  const [starships, setStarships] = useState<IResultPages<IStarWarsEntity>|undefined>();
  const [vehicles, setVehicles] = useState<IResultPages<IStarWarsEntity>|undefined>();

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