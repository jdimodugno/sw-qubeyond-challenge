import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import IListViewSchema from './IListViewSchema';

const StyledTableSection = styled.div`
  > div {
    padding: .5em;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledTable = styled.table`
  padding: 1em 1.5em 2em;
  width: 100%;
  border-collapse: collapse;

  td {
    padding: .5em;
    font-size: .875em;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};;

    &:not(:first-of-type) {
      text-align: center;
      vertical-align: middle;
    }
  }

  tbody > tr > td {
    &:not(.no-results) {
      color: ${({ theme }) => theme.colors.primaryDark};
      background-color: ${({ theme }) => theme.colors.grayLight};
    }
  }

  tfoot > tr {
    text-align: right;

    > td > * {
      &:not(:last-child) {
        margin-right: .75em;
      }
    }
  }
`;

const formatCellData = (type: string, data: string) : string => {
  if (type === 'date') return new Date(data).toLocaleDateString();
  return data;
}

const PAGE_LIMIT = 10;

const ListView : FC<{
  schema: IListViewSchema,
  loading: boolean,
  list: Array<IStarWarsEntity>,
  setPage: (page: number) => void,
  page?: number,
  count?: number
}> = ({
  schema,
  loading,
  list,
  setPage,
  page = 0,
  count = 0
}) => {
  const handleChangePage = useCallback(
    (newOffset: number) => { 
      console.log(newOffset);
      setPage(newOffset);
    }, [setPage]
  );

  const maxPage = Math.floor(count / PAGE_LIMIT);
  const hasNext = page < maxPage;
  const hasPrevious = page > 0;
  const pageLower = (page * PAGE_LIMIT) + 1;
  const pageUpper = (page + 1) * PAGE_LIMIT < count ? (page + 1) * PAGE_LIMIT : count;

  return (
    <StyledTableSection>
      <StyledTable>
        <thead>
          <tr>
            {
              Object
                .entries(schema)
                .filter(([, v]) => v.visible)
                .map(([k]) => (
                  <td key={`header_cell_${k}`}>{k.toUpperCase()}</td>
                ))
            }
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td colSpan={Object.values(schema).filter(({ visible }) => visible).length}>
                  Loading...
                </td>
              </tr>
            ) : (
              list.map((row) => (
                <tr key={`row_id_${row.id}`}>
                  {
                    Object
                      .entries(schema)
                      .filter(([, v]) => v.visible)
                      .map(([k, v]) => (
                        <td key={`body_cell_${k}`}>{formatCellData(v.type, row[k] as string)}</td>
                      ))
                  }
                </tr>
              ))
            )
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={Object.values(schema).filter(({ visible }) => visible).length}>
              <button 
                disabled={!hasPrevious}
                onClick={() => handleChangePage(--page)}
              >
                &laquo;
              </button>
              <span>{pageLower}-{pageUpper} of {count}</span>
              <button
                disabled={!hasNext}
                onClick={() => handleChangePage(++page)}
              >
                &raquo;
              </button>
            </td>
          </tr>
        </tfoot>
      </StyledTable>
    </StyledTableSection>
  )
}

export default ListView;