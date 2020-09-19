import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import IPlanet from '../../interfaces/domain/IPlanet';
import { ApiClient } from '../ApiClient';

class PlanetsClient implements IReaderClient<IPlanet> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'planets';
    this.apiClient = ApiClient.getInstance();
    
    this.read = this.read.bind(this);
    this.readById = this.readById.bind(this);
  }

  read(page: number) : Promise<IApiResult<IPlanet>> {
    return this.apiClient.get(`${this.resource}/?page=${++page}`);
  }

  readById(id: string) : Promise<IPlanet> {
    return this.apiClient.get(`${this.resource}/${id}`);
  }
}

export default PlanetsClient;