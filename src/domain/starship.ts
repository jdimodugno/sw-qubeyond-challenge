import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'name',
    'model',
    'starship_class',
  ],
  defaultSort: 'name',
};