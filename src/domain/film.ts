import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  id: {
    visible: false,
    type: 'boolean'
  },
  title: {
    visible: true,
    type: 'string'
  },
  release_date: {
    visible: true,
    type: 'date'
  },
  episode_id: {
    visible: true,
    type: 'number'
  },
};