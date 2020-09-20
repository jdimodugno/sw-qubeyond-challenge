import IApiResult from '../../interfaces/core/IApiResult';
import IReaderClient from '../../interfaces/core/IReaderClient';
import IFilm from '../../interfaces/domain/IFilm';
import { ApiClient } from '../ApiClient';

class FilmsClient implements IReaderClient<IFilm> {
  apiClient: ApiClient;
  resource: string;
  
  constructor() {
    this.resource = 'films';
    this.apiClient = ApiClient.getInstance();

    this.read = this.read.bind(this);
    this.readById = this.readById.bind(this);
  }

  read(page: number) : Promise<IApiResult<IFilm>> {
    return this.apiClient.get(`${this.resource}/?page=${++page}`);
  }

  readById(id: string) : Promise<IFilm> {
    return this.apiClient.get(`${this.resource}/${id}`);
  }
}

export default FilmsClient;