import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import PlanetsList from './views/List';

const routePrefix = '/planets';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Planets',
  navLabel: 'Planets',
  key: 'planets_list',
  path: `${routePrefix}/list`,
  component: PlanetsList,
  layout: MainLayout,
}];

export default routes;
