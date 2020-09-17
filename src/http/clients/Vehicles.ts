import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import IVehicle from '../../interfaces/domain/IVehicle';
import { ApiClient } from '../ApiClient';

class VehiclesClient implements IReaderClient<IVehicle> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'vehicles';
    this.apiClient = ApiClient.getInstance();
    
    this.read = this.read.bind(this);
  }

  read(page: number) : Promise<IApiResult<IVehicle>> {
    return this.apiClient.get(`${this.resource}/?page=${page}`);
  }
}

export default VehiclesClient;