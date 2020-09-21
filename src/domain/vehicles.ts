import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    name: true,
    model: true,
    vehicle_class: true,
  },
  defaultSort: 'name',
};