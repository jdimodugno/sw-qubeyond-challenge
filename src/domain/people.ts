import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'name',
    'gender',
  ],
  defaultSort: 'name',
};