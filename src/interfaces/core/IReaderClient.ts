import IApiResult from "./IApiResult";

interface IReaderClient<T> {
  read: (page: number) => Promise<IApiResult<T>>
  readById: (id: string) => Promise<T>;
}

export default IReaderClient;