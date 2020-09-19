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
  language: {
    visible: true,
    type: 'string'
  },
  classification: {
    visible: true,
    type: 'string'
  },
  designation: {
    visible: true,
    type: 'string'
  },
};