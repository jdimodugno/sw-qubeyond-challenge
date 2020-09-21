import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    name: true,
    language: true,
    classification: true,
    designation: true,
  },
  defaultSort: 'name',
};