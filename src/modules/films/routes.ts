import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import FilmsList from './views/List';

const routePrefix = '/films';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Films',
  navLabel: 'Films',
  key: 'film_list',
  path: `${routePrefix}/list`,
  component: FilmsList,
  layout: MainLayout,
}];

export default routes;
