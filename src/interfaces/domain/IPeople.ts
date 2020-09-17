import IFilm from './IFilm';
import ISpecies from './ISpecies';
import IStarship from './IStarship';
import IStarWarsEntity from './IStarWarsEntity';
import IVehicle from './IVehicle';

interface IPeople extends IStarWarsEntity {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<IFilm>;
  species: Array<ISpecies>;
  starships: Array<IStarship>;
  vehicles: Array<IVehicle>;
  url: string;
  created: string;
  edited: string;
} 

export default IPeople;