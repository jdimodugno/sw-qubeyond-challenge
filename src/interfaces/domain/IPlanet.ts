import IStarWarsEntity from './IStarWarsEntity';

interface IPlanet extends IStarWarsEntity {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<string>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;
} 

export default IPlanet;