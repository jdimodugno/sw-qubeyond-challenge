import IStarWarsEntity from './IStarWarsEntity';

interface IFilm extends IStarWarsEntity {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  characters: Array<string>;
  planets: Array<string>;
  url: string;
  created: string;
  edited: string;
}

export default IFilm;