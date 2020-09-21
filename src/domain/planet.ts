import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  id: false,
  name: true,
  population: true,
  terrain: true,
  climate: true,
};