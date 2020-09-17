import IFilm from './IFilm';
import IPeople from './IPeople';
import IStarWarsEntity from './IStarWarsEntity';

interface ISpecies extends IStarWarsEntity {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: Array<IPeople>;
  films: Array<IFilm>;
  url: string;
  created: string;
  edited: string;
} 

export default ISpecies;