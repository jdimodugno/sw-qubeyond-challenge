interface IEntityData<T> {
  total: number;
  fetchedPages: Array<number>;
  fetchedIds: Array<number>;
  results: Array<T>;
}

export default IEntityData;