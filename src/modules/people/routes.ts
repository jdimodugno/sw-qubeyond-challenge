import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import PeopleDetail from './views/Detail';
import PeopleList from './views/List';

const routePrefix = '/people';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'People',
  navLabel: 'People',
  key: 'people_list',
  path: routePrefix,
  component: PeopleList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'People',
  key: 'people_detail',
  path: `${routePrefix}/:id`,
  component: PeopleDetail,
  layout: MainLayout,
}];

export default routes;
