import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import VehiclesList from './views/List';

const routePrefix = '/vehicles';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Vehicles',
  navLabel: 'Vehicles',
  key: 'vehicles_list',
  path: `${routePrefix}/list`,
  component: VehiclesList,
  layout: MainLayout,
}];

export default routes;
