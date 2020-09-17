import { ElementType } from 'react';

interface IBaseRoute {
  exact: boolean;
  key?: string;
  path: string;
  component: ElementType;
}

export default IBaseRoute;