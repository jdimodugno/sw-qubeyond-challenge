import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    name: true,
    population: true,
    terrain: true,
    climate: true,
  },
  defaultSort: 'name',
};