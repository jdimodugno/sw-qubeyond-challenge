import React, { FC, useCallback, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import useStyles from './styles';
import IStarWarsEntity from '../../interfaces/domain/IStarWarsEntity';

const ListView : FC<{
  loading: boolean,
  list: Array<IStarWarsEntity>
}> = ({
  loading
}) => {
  const classes = useStyles();
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  
  const handleChangePage = useCallback(
    (event: unknown, newOffset: number) => { 
      setOffset(newOffset * limit);
    }, [setOffset, limit],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLimit(parseInt(event.target.value, 10));
      setOffset(0);
    }, [setLimit, setOffset]
  );

  return (
    <Paper className={classes.paper}>
      {
        loading ? (
          <div>loading…</div>
        ) : (
          <>
            <TableContainer>
              <Table
                className={classes.table}
                size={'small'}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>123</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>456</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={0}
              rowsPerPage={20}
              page={0}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        )
      }
    </Paper>
  )
}

export default ListView;