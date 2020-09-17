import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import SpeciesList from './views/List';

const routePrefix = '/species';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Species',
  navLabel: 'Species',
  key: 'species_list',
  path: `${routePrefix}/list`,
  component: SpeciesList,
  layout: MainLayout,
}];

export default routes;
