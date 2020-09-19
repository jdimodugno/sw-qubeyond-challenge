import React, { FC } from 'react';
import DetailBlock from '../../components/DetailBlock';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';

const DetailView : FC<{
  entity?: IStarWarsEntity
}> = ({
  entity
}) => (
  <div>
    {
      entity ? (
        Object
          .entries(entity)
          .map(([description, value]) => (
            <DetailBlock
              fieldDescription={description}
              fieldValue={value}
            />
          ))
      ) : (
        <div>Not Found</div>
      )
    }
  </div>
);

export default DetailView;