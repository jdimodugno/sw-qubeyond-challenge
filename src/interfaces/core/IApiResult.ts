interface IApiResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export default IApiResult;