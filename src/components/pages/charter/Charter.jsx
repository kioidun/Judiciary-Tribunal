import React from 'react'
import Header from '../../headertwo/Header'
import news from '../../../imagestwo/service.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import {Paper} from '@mui/material';

import './charter.css'

function Charter() {
  
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData('Facilitation of Tribunal sittings', ['Formal request',<br/>,'Cause list',<br/>,'Appointment Leters',<br/>,'Approved requisition',<br/>,'Goverment Ciculars'], 'Nil', '2 days'),
    createData('Facilitation of swearing in of tribunal members', ['Formal Request',<br/>,'Gazette notice',<br/>,'Appointment Letters'], 'NIL', '7 DAYS'),
    createData('Approval of financial request', ['Formal Request',<br/>,'Approved requisition form',<br/>,'Approved work plan'], 'NIL', '2 DAYS'),
    createData('Approval of procurement of goods, works and services', ['Formal Request',<br/>,'Procurement plan',<br/>,'Approved requisition form',<br/>,'Approved specifications'], 'NIL', '3 DAYS'),
    createData('Processing request of concern from Tribunals to respective directorates', ['Formal Request'], 'NIL', '2 DAYS'),
    createData('coordinating capacity building-training and development of tribunals staff', ['Formal Request',<br/>,'Training plan',<br/>,'Approvals from JTI/HR'], 'NIL', '10 DAYS'),
    createData('Providing technical support to Tribunals', ['Formal Request',<br/>,'Policy documents',<br/>,'Details of specific scope'], 'NIL', '5 DAYS'),
    createData('Preparation of quartely management progress report', ['Formal Request'], 'NIL', '5 DAYS'),
    createData('Provision of Tribunal information to stakeholdersApproval of financial request', ['Formal Request'], 'NIL', '5 DAYS'),
   
  ];
  return (
    <>
    <Header className="img-news" title='Service Charter' image={news} >
 Our Service Charter
    </Header>
<section className='mandate_section'>
  <div className='mandate_section_heading'>
    <h1>The Judiciary</h1>
    <h2>Tribunals Secretariat</h2>
    <h3>Service Delivery Charter</h3>
    <p>The Purpose of this charter is to Outline the service standards expected from the Secretariat. We are Committed to providing quality services that meet our customers needs. We endevour to Serve with integrity, impartiality and Humility</p>
  </div>
<TableContainer >
      <Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>SERVICE</TableCell>
            <TableCell align="right">REQUIREMNETS</TableCell>
            <TableCell align="right">COST</TableCell>
            <TableCell align="right">SERVICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
    </>
  )
}

export default Charter