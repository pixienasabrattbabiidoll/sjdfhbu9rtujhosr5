import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const ArchitectItemsTable = (props) => {

  const { items } = props;

  return (
    <TableContainer component={Paper}>
      <Table style={{ width: 1000, margin: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(function (i) {
            return <TableRow key={i.id}>
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.rating}</TableCell>
            </TableRow>;
          })}
        </TableBody>
      </Table>
    </TableContainer>)
}
export default ArchitectItemsTable;
