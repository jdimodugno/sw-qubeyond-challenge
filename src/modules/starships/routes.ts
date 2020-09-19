import IRoute from '../../interfaces/core/IRoute';
import MainLayout from '../../layout/Main/Main';
import StarshipDetail from './views/Detail';
import StarshipsList from './views/List';

const routePrefix = '/starships';

const routes : Array<IRoute> = [{
  exact: true,
  title: 'Starships',
  navLabel: 'Starships',
  key: 'starships_list',
  path: routePrefix,
  component: StarshipsList,
  layout: MainLayout,
}, {
  exact: true,
  title: 'Starships',
  key: 'starship_detail',
  path: `${routePrefix}/:id`,
  component: StarshipDetail,
  layout: MainLayout,
}];

export default routes;
