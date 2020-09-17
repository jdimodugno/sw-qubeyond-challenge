import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import PeopleList from './views/List';

const routePrefix = '/people';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'People',
  navLabel: 'People',
  key: 'people_list',
  path: `${routePrefix}/list`,
  component: PeopleList,
  layout: MainLayout,
}];

export default routes;
