import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import IPeople from '../../interfaces/domain/IPeople';
import { ApiClient } from '../ApiClient';

class PeopleClient implements IReaderClient<IPeople> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'people';
    this.apiClient = ApiClient.getInstance();
    
    this.read = this.read.bind(this);
    this.readById = this.readById.bind(this);
  }

  read(page: number) : Promise<IApiResult<IPeople>> {
    return this.apiClient.get(`${this.resource}/?page=${++page}`);
  }

  readById(id: string) : Promise<IPeople> {
    return this.apiClient.get(`${this.resource}/${id}`);
  }
}

export default PeopleClient;