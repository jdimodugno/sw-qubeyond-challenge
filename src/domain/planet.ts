import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'id',
    'name',
    'population',
    'terrain',
    'climate',
  ],
  defaultSort: 'name',
};