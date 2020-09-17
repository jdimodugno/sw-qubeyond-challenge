import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import StarshipsList from './views/List';

const routePrefix = '/starships';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Starships',
  navLabel: 'Starships',
  key: 'starships_list',
  path: `${routePrefix}/list`,
  component: StarshipsList,
  layout: MainLayout,
}];

export default routes;
