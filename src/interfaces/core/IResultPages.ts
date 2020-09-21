interface IResultPages<T> {
  total: number;
  fetchedPages: Array<number>;
  pages: Array<Array<T>>;
}

export default IResultPages;