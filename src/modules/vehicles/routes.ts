import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import VehicleDetail from './views/Detail';
import VehiclesList from './views/List';

const routePrefix = '/vehicles';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Vehicles',
  navLabel: 'Vehicles',
  key: 'vehicles_list',
  path: routePrefix,
  component: VehiclesList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'Vehicles',
  key: 'vehicle_detail',
  path: `${routePrefix}/:id`,
  component: VehicleDetail,
  layout: MainLayout,
}];

export default routes;
