import React, { FC } from 'react';
import styled from 'styled-components';
import DetailBlock from '../../components/DetailBlock';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';

const StyledDetailView = styled.div`
  padding: 1em;
  margin: 0 1em 1em;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 3px 3px 15px -1px ${({ theme }) => theme.colors.primaryDark};
`;

const DetailView : FC<{
  entity?: IStarWarsEntity
}> = ({
  entity
}) => (
  <StyledDetailView>
    {
      entity ? (
        Object
          .entries(entity)
          .map(([description, value]) => (
            <DetailBlock
              key={`detail_${description}`}
              fieldDescription={description}
              fieldValue={value}
            />
          ))
      ) : (
        <div>Not Found</div>
      )
    }
  </StyledDetailView>
);

export default DetailView;