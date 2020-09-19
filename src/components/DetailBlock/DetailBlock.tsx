import React, { FC } from 'react';
import { mapEndpointFromUrl } from '../../utils/urlHelpers';
import { Link } from 'react-router-dom';

interface IDetailBlock {
  fieldDescription: string;
  fieldValue: number | string | Array<string>;
}

const DetailBlock : FC<IDetailBlock> = ({
  fieldDescription,
  fieldValue,
}) => {

  const renderField = (
    fieldDescription: string,
    fieldValue: number | string | Array<string>
  ) : JSX.Element => {
    if (fieldValue instanceof Array) return (
      <ul>
        <span>{fieldDescription}:&nbsp;</span>
        { 
          fieldValue.map((v) => (
            <li>
              <Link to={`${mapEndpointFromUrl(v)}`}>
                {v}
              </Link>
            </li>
          )
        ) }
      </ul>
    )
    return (
      <div>
        <span>{fieldDescription}:&nbsp;</span>
        <span>{fieldValue}</span>
      </div>
    );
  }

  return renderField(fieldDescription, fieldValue);
}

export default DetailBlock;