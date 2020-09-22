import IEntityPageData from '../interfaces/core/IEntityPageData';
import IResultPages from '../interfaces/core/IResultPages';
import IStarWarsEntity from '../interfaces/domain/IStarWarsEntity';
import { chunk } from '../utils/arrayHelpers';

export default class DataHelper { 
  public static readonly PAGE_LIMIT : number = 10;

  public static ComputeSorting<T extends IStarWarsEntity>(
    data: IEntityPageData<T>,
    orderField: string,
    orderByFieldAsc: boolean,
  ): IResultPages<T> {
    const { fetchedPages, total } = data;
    const sortedPaginatedResults = chunk(
      data.results.sort((a, b) => {
        if (!orderField) return 1;
        const left = orderByFieldAsc ? 1 : -1;
        const right = -1 * left;
        return a[orderField] > b[orderField] ? left : right;
      }), this.PAGE_LIMIT
    );
      
    return ({ fetchedPages, total, pages: sortedPaginatedResults });
  }

  public static BinarySearch<T extends IStarWarsEntity>(
    data: Array<T>,
    id: number,
  ): T {
    const mid = Math.floor(data.length / 2);
    if (parseInt(data[mid].id) === id || data.length === 1) return data[mid];
    else if (parseInt(data[mid].id) > id) return DataHelper.BinarySearch(data.slice(0, mid), id);
    else return DataHelper.BinarySearch(data.slice(mid, data.length), id);
  }
}