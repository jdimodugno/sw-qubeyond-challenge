import IPeople from './IPeople';
import ISpecies from './ISpecies';
import IStarship from './IStarship';
import IStarWarsEntity from './IStarWarsEntity';
import IVehicle from './IVehicle';

interface IFilm extends IStarWarsEntity {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: Array<ISpecies>;
  starships: Array<IStarship>;
  vehicles: Array<IVehicle>;
  characters: Array<IPeople>;
  planets: Array<IPeople>;
  url: string;
  created: string;
  edited: string;
}

export default IFilm;