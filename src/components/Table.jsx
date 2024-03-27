import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';
import dummydata from './dummydata'

const tags = ['Technology', 'Fashion', 'Food', 'Travel'];

function DataTable() {
  const [selectedTags, setSelectedTags] = useState({});

  const handleTagSelect = (event, index) => {
    const { value } = event.target;
    setSelectedTags({ ...selectedTags, [index]: value });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Si No</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Prefix</TableCell>
            <TableCell>Add tag</TableCell>
            <TableCell>Selected tag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummydata.map((row, index) => ( 
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.links}</TableCell>
              <TableCell>{row.prefix}</TableCell> 
              <TableCell>
                <Select
                  multiple
                  value={selectedTags[index] || []}
                  onChange={(event) => handleTagSelect(event, index)}
                  renderValue={(selected) => selected.join(', ')}

                >

                  {tags.map((tag) => (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                    
                  ))}
                </Select>
              </TableCell>
              <TableCell>{row.selectedTags}</TableCell> 

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
