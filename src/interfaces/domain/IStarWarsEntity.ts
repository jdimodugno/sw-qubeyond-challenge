import IEntity from './IEntity';

interface IStarWarsEntity extends IEntity {
  [x: string]: string | number | Array<string>;
  url: string;
}

export default IStarWarsEntity;