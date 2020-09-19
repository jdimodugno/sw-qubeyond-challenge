import IListViewSchema from "../views/List/IListViewSchema";

export const ListSchema : IListViewSchema = {
  id: {
    visible: false,
    type: 'number'
  },
  name: {
    visible: true,
    type: 'string'
  },
  gender: {
    visible: true,
    type: 'string'
  },
};