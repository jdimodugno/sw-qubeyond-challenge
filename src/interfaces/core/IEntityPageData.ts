interface IEntityData<T> {
  total: number;
  fetchedPages: Array<number>;
  fetchedIds: Array<string>;
  results: Array<T>;
}

export default IEntityData;