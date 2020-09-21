import IListViewItemSchema from "./IListViewItemSchema";

interface IListViewSchema {
  fields: IListViewItemSchema;
  defaultSort: string;
}

export default IListViewSchema;