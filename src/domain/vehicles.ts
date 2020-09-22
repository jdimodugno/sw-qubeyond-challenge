import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'name',
    'model',
    'vehicle_class',
  ],
  defaultSort: 'name',
};