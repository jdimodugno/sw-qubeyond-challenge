import React, { FC } from 'react';
import { mapEndpointFromUrl } from '../../utils/urlHelpers';
import { Link } from 'react-router-dom';
import { formatData } from '../../utils/formatterHelper';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledDetailBlock = styled.div`
  margin-bottom:.5em;

  > ul {
    list-style-type: none;
    padding: 0;
    margin: .5em 0 0 0;
  }

  > span {
    margin-bottom: .5em;
  }

  > ul > li {
    padding-left: .5em;
  }

`;

interface IDetailBlock {
  fieldDescription: string;
  fieldValue: number | string | Array<string>;
}

const DetailBlock : FC<IDetailBlock> = ({
  fieldDescription,
  fieldValue,
}) => {
  const { t } = useTranslation();
  
  const renderField = (
    fieldDescription: string,
    fieldValue: string | number | Array<string>
  ) : JSX.Element => {
    if (fieldValue instanceof Array) return (
      <>
        <span>{t(fieldDescription)}:&nbsp;</span>
        <ul>
          { 
            fieldValue.map((v) => (
              <li key={v}>
                <Link to={`${mapEndpointFromUrl(v)}`}>{v}</Link>
              </li>
            )
          ) }
        </ul>
      </>
    )
    return (
      <>
        <span>{t(fieldDescription)}:&nbsp;</span>
        <span>{formatData(fieldDescription, fieldValue as string)}</span>
      </>
    );
  }

  return (
    <StyledDetailBlock>
      { renderField(fieldDescription, fieldValue) }
    </StyledDetailBlock>
  );
}

export default DetailBlock;