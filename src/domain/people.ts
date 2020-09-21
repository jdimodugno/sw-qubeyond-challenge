import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    name: true,
    gender: true,
  },
  defaultSort: 'name',
};