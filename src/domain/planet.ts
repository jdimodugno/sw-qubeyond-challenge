import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  id: {
    visible: false,
    type: 'number'
  },
  name: {
    visible: true,
    type: 'number'
  },
  population: {
    visible: true,
    type: 'string'
  },
  terrain: {
    visible: true,
    type: 'number'
  },
  climate: {
    visible: true,
    type: 'number'
  },
};