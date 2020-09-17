import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import ISpecies from '../../interfaces/domain/ISpecies';
import { ApiClient } from '../ApiClient';

class SpeciesClient implements IReaderClient<ISpecies> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'species';
    this.apiClient = ApiClient.getInstance();
    
    this.read = this.read.bind(this);
  }

  read(page: number) : Promise<IApiResult<ISpecies>> {
    return this.apiClient.get(`${this.resource}/?page=${page}`);
  }
}

export default SpeciesClient;