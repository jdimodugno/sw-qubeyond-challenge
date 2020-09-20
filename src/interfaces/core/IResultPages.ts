import IEntityPageMapping from './IEntityPageMapping';

interface IResultPages<T> {
  total: number;
  fetchedPages: Array<number>;
  fetchedIds: IEntityPageMapping;
  pages: Array<Array<T>>;
}

export default IResultPages;