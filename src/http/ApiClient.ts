import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClient {
  axiosInstance: any;
  static instance: ApiClient;
  
  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.axiosInstance.interceptors.response.use(this.success, this.error);

    this.get = this.get.bind(this);
  }

  static getInstance() : ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.get(url, config);
  }

  protected success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  protected error(error: AxiosError<Error>) {
    throw error;
  }
}