import React, { FC, useCallback, useState } from 'react';
import IResultPages from '../interfaces/core/IResultPages';
import IFilm from '../interfaces/domain/IFilm';
import IPeople from '../interfaces/domain/IPeople';
import IPlanet from '../interfaces/domain/IPlanet';
import ISpecies from '../interfaces/domain/ISpecies';
import IStarship from '../interfaces/domain/IStarship';
import IVehicle from '../interfaces/domain/IVehicle';

interface IContext {
  films: IResultPages<IFilm>|undefined;
  updateFilms: (data: Array<IFilm>, page: number, total: number) => void;
  people: IResultPages<IPeople>|undefined;
  updatePeople: (data: Array<IPeople>, page: number, total: number) => void;
  planets: IResultPages<IPlanet>|undefined;
  updatePlanets: (data: Array<IPlanet>, page: number, total: number) => void;
  species: IResultPages<ISpecies>|undefined;
  updateSpecies: (data: Array<ISpecies>, page: number, total: number) => void;
  starships: IResultPages<IStarship>|undefined;
  updateStarships: (data: Array<IStarship>, page: number, total: number) => void;
  vehicles: IResultPages<IVehicle>|undefined;
  updateVehicles: (data: Array<IVehicle>, page: number, total: number) => void;
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

function updateSet<T>(
  data: Array<T>,
  page: number,
  total: number,
  setter: React.Dispatch<React.SetStateAction<IResultPages<T>|undefined>>
) : void {
  setter((prev: IResultPages<T> | undefined) => {
    const fetchedPages = prev ? [...prev.fetchedPages, page] : [page];
    const pages = prev ? [...prev.pages, data] : [data];
    return ({ fetchedPages, total, pages });
  });
}

const GlobalProvider : FC = ({ children }) => {
  const [films, setFilms] = useState<IResultPages<IFilm>|undefined>();
  const [people, setPeople] = useState<IResultPages<IPeople>|undefined>();
  const [planets, setPlanets] = useState<IResultPages<IPlanet>|undefined>();
  const [species, setSpecies] = useState<IResultPages<ISpecies>|undefined>();
  const [starships, setStarships] = useState<IResultPages<IStarship>|undefined>();
  const [vehicles, setVehicles] = useState<IResultPages<IVehicle>|undefined>();

  const updateFilms = useCallback(
    (data: Array<IFilm>, page: number, total: number) => {
      updateSet<IFilm>(data, page, total, setFilms);
    }, [setFilms],
  );

  const updatePeople = useCallback(
    (data: Array<IPeople>, page: number, total: number) => {
      updateSet<IPeople>(data, page, total, setPeople);
    }, [setPeople],
  );

  const updatePlanets = useCallback(
    (data: Array<IPlanet>, page: number, total: number) => {
      updateSet<IPlanet>(data, page, total, setPlanets);
    }, [setPlanets],
  );

  const updateSpecies = useCallback(
    (data: Array<ISpecies>, page: number, total: number) => {
      updateSet<ISpecies>(data, page, total, setSpecies);
    }, [setSpecies],
  );

  const updateStarships = useCallback(
    (data: Array<IStarship>, page: number, total: number) => {
      updateSet<IStarship>(data, page, total, setStarships);
    }, [setStarships],
  );

  const updateVehicles = useCallback(
    (data: Array<IVehicle>, page: number, total: number) => {
      updateSet<IVehicle>(data, page, total, setVehicles);
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