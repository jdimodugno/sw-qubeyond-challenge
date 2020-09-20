import { FC } from 'react';
import IBaseRoute from './IBaseRoute';

interface IRoute extends IBaseRoute {
  layout: FC;
  title?: string;
  navLabel?: string;
}

export default IRoute;