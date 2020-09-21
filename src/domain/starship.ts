import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    name: true,
    model: true,
    starship_class: true,
  },
  defaultSort: 'name',
};