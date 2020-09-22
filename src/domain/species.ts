import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'name',
    'language',
    'classification',
    'designation',
  ],
  defaultSort: 'name',
};