import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: {
    id: false,
    title: true,
    release_date: true,
    episode_id: true,
  },
  defaultSort: 'title',
};