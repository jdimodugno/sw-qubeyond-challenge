import IReaderClient from "../../interfaces/core/IReaderClient";
import IStarWarsEntity from "../../interfaces/domain/IStarWarsEntity";
import IListViewSchema from "../../views/List/IListViewSchema";

interface IListContainerProps {
  collectionName: string,
  updateCollectionSetterName: string,
  client: IReaderClient<IStarWarsEntity>,
  schema: IListViewSchema,
}

export default IListContainerProps;