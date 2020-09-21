import IReaderClient from '../../interfaces/core/IReaderClient';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';

interface IDetailContainerProps {
  client: IReaderClient<IStarWarsEntity>,
}

export default IDetailContainerProps;