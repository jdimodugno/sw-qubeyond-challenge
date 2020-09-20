import IReaderClient from '../../interfaces/core/IReaderClient';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';

interface IDetailContainerProps {
  collectionName: string,
  client: IReaderClient<IStarWarsEntity>,
}

export default IDetailContainerProps;