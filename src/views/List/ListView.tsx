import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';
import DataHelper from '../../services/dataHelper';
import { formatData } from '../../utils/formatterHelper';
import IListViewSchema from './IListViewSchema';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';

const StyledListView = styled.div`
  padding: 1em;
  margin: 0 1em 1em;
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

  tbody > tr {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.grayLight};

    &:hover {
      color: ${({ theme }) => theme.colors.grayLight};
      background-color: ${({ theme }) => theme.colors.gray};
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

const StyledHeaderCell = styled.td`
  cursor: pointer;
`;

const PAGE_LIMIT = DataHelper.PAGE_LIMIT;

const ListView : FC<{
  schema: IListViewSchema,
  loading: boolean,
  list: Array<IStarWarsEntity>,
  setPage: (page: number) => void,
  page?: number,
  count?: number,
  toggleOrder?: () => void,
  setSortingField?: (field: string) => void,
  handleItemNavigation?: (url: string) => void,
}> = ({
  schema,
  loading,
  list,
  setPage,
  page = 0,
  count = 0,
  toggleOrder = () => {},
  setSortingField = () => {},
  handleItemNavigation = () => {},
}) => {
  const { t } = useTranslation();

  const handleSort = useCallback(
    (sortingKey: string) => {
      setSortingField(sortingKey);
      toggleOrder();
      setPage(0);
    }, [toggleOrder, setSortingField, setPage]
  );

  const handleChangePage = useCallback( (newOffset: number) => { setPage(newOffset); }, [setPage]);
  
  const maxPage = Math.floor(count / PAGE_LIMIT);
  const hasNext = page < maxPage;
  const hasPrevious = page > 0;
  const pageLower = (page * PAGE_LIMIT) + 1;
  const pageUpper = (page + 1) * PAGE_LIMIT < count ? (page + 1) * PAGE_LIMIT : count;

  return (
    <StyledListView>
      <StyledTable>
        <thead>
          <tr>
            {
              Object
                .entries(schema)
                .filter(([, v]) => !!v)
                .map(([k]) => (
                  <StyledHeaderCell
                    key={`header_cell_${k}`}
                    onClick={() => handleSort(k)}
                  >
                    {t(k)}
                  </StyledHeaderCell>
                ))
            }
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td colSpan={Object.values(schema).filter((v) => !!v).length}>
                  <Loading />
                </td>
              </tr>
            ) : (
              list.map((row) => (
                <tr
                  key={`row_id_${row.id}`}
                  onClick={() => handleItemNavigation(row.url)}
                >
                  {
                    Object
                      .entries(schema)
                      .filter(([, v]) => !!v)
                      .map(([k,]) => (
                        <td key={`body_cell_${k}`}>{formatData(k, row[k] as string)}</td>
                      ))
                  }
                </tr>
              ))
            )
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={Object.values(schema).filter((v) => !!v).length}>
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
    </StyledListView>
  )
}

export default ListView;