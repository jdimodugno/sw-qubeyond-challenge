import IApiResult from "./IApiResult";

interface IReaderClient<T> {
  read: (page: number) => Promise<IApiResult<T>>
}

export default IReaderClient;