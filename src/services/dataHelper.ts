import IEntityPageMapping from '../interfaces/core/IEntityPageMapping';
import IResultPages from '../interfaces/core/IResultPages';
import IStarWarsEntity from '../interfaces/domain/IStarWarsEntity';
import { chunk } from '../utils/arrayHelpers';

export default class DataHelper { 
  public static readonly PAGE_LIMIT : number = 10;

  public static ComputeSorting<T extends IStarWarsEntity>(
    data: IResultPages<T>,
    orderField: string,
    orderByFieldAsc: boolean,
  ): IResultPages<T> {
    const { fetchedPages, total } = data;
    const fetchedIds : IEntityPageMapping = {};
    const sortedPaginatedResults = chunk([
      ...data.pages.flatMap(page => [...page])
    ].sort((a, b) => {
      if (!orderField) return 1;
      const left = orderByFieldAsc ? 1 : -1;
      const right = -1 * left;
      return a[orderField] > b[orderField] ? left : right;
    }), this.PAGE_LIMIT);
    
    sortedPaginatedResults.forEach((page, idx) => {
      page.forEach((entry: IStarWarsEntity) => { fetchedIds[entry.id] = idx });
    })
    
    return ({ fetchedPages, fetchedIds, total, pages: sortedPaginatedResults });
  }
}