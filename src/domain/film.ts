import IListViewSchema from '../views/List/IListViewSchema';

export const ListSchema : IListViewSchema = {
  fields: [
    'title',
    'release_date',
    'episode_id',
  ],
  defaultSort: 'title',
};