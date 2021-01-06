import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    width: '80%',
  },
});

const companies = [
    {
        id: 1,
        name: 'Lightricks',
        industry: 'Tech',
        city: 'Jerusalem',
    },
    {
        id: 2,
        name: 'Mobileye',
        industry: 'Tech',
        city: 'Jerusalem',
    },
];

function createData(name, city, industry) {
    return {name, city, industry};
}


const rows = companies.map(company => (createData(company.name, company.city, company.industry)));

function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">City&nbsp;</TableCell>
                <TableCell align="left">Industry&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="left">{row.industry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

const CompanyTable = () => (
    BasicTable()
);

export default CompanyTable;