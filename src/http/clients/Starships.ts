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
    this.readById = this.readById.bind(this);
  }

  read(page: number) : Promise<IApiResult<IStarship>> {
    return this.apiClient.get(`${this.resource}/?page=${++page}`);
  }

  readById(id: string) : Promise<IStarship> {
    return this.apiClient.get(`${this.resource}/${id}`);
  }
}

export default StarshipsClient;