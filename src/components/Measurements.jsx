import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { format } from 'date-fns';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});
var x = 0;

export const Measurements = ({ measurements }) => {
  const classes = useStyles();
  const buildTimeHeader = () => {
    if (measurements.length) {
      return <h2> {format(measurements[0].timestamp, 'PPpp')}</h2>;
    }
  };
  return (
    <div>
      {buildTimeHeader()}
      {!measurements.length && <CircularProgress />}
      {measurements.length && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Temp. skur</TableCell>
                <TableCell align="left">Fugt skur</TableCell>
                <TableCell align="left">Temp. ude</TableCell>
                <TableCell align="left">Fugt ude</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>           
                <TableRow >
                  if (x) 
                  { 
                  <TableCell align="left">
                    {measurements[0].lysthusTemp}&#8451;
                  </TableCell>
                  <TableCell align="left">
                    {measurements[0].lysthusFugt}%
                  </TableCell>
                  <TableCell align="left">
                    {measurements[0].udeTemp}&#8451;
                  </TableCell>
                  <TableCell align="left">
                    {measurements[0].udeFugt}%</TableCell>
                    }
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};