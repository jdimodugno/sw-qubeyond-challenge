import IStarWarsEntity from './IStarWarsEntity';

interface IVehicle extends IStarWarsEntity {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: Array<string>;
  pilots: Array<string>;
  url: string;
  created: string;
  edited: string;
}

export default IVehicle;