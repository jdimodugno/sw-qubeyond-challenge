import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import PlanetDetail from './views/Detail';
import PlanetsList from './views/List';

const routePrefix = '/planets';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Planets',
  navLabel: 'Planets',
  key: 'planets_list',
  path: routePrefix,
  component: PlanetsList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'Planets',
  key: 'planet_detail',
  path: `${routePrefix}/:id`,
  component: PlanetDetail,
  layout: MainLayout,
}];

export default routes;
