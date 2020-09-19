import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import FilmsList from './views/List';
import FilmsDetail from './views/Detail';

const routePrefix = '/films';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Films',
  navLabel: 'Films',
  key: 'film_list',
  path: routePrefix,
  component: FilmsList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'Films',
  key: 'film_detail',
  path: `${routePrefix}/:id`,
  component: FilmsDetail,
  layout: MainLayout,
}];

export default routes;
