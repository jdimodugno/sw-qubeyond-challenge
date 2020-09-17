import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import IStarship from '../../interfaces/domain/IStarship';
import { ApiClient } from '../ApiClient';

class StarshipsClient implements IReaderClient<IStarship> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'starships';
    this.apiClient = ApiClient.getInstance();
    
    this.read = this.read.bind(this);
  }

  read(page: number) : Promise<IApiResult<IStarship>> {
    return this.apiClient.get(`${this.resource}/?page=${page}`);
  }
}

export default StarshipsClient;