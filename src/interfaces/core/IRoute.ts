import { FC } from 'react';
import IListContainerProps from '../../containers/List/IListContainerProps';
import IBaseRoute from './IBaseRoute';

interface IRoute extends IBaseRoute {
  layout: FC;
  title?: string;
  navLabel?: string;
  props?: IListContainerProps
}

export default IRoute;