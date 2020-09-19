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
  model: {
    visible: true,
    type: 'string'
  },
  vehicle_class: {
    visible: true,
    type: 'string'
  },
};