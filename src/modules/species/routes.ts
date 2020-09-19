import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import SpeciesDetail from './views/Detail';
import SpeciesList from './views/List';

const routePrefix = '/species';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Species',
  navLabel: 'Species',
  key: 'species_list',
  path: routePrefix,
  component: SpeciesList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'Species',
  key: 'species_detail',
  path: `${routePrefix}/:id`,
  component: SpeciesDetail,
  layout: MainLayout,
}];

export default routes;
