import IFilm from './IFilm';
import IPeople from './IPeople';
import IStarWarsEntity from './IStarWarsEntity';

interface IStarship extends IStarWarsEntity {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: Array<IFilm>;
  pilots: Array<IPeople>;
  url: string;
  created: string;
  edited: string;
}

export default IStarship;