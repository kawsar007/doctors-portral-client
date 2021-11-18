import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appoinments = ({date}) => {
  console.log(date, "DaTe");
    const { user, token } = useAuth();
    console.log(user.email, "USER");
    const [appoinments, setAppoinments] = useState([]);
    console.log(appoinments, "My Appoinments");

    // useEffect(() => {
    //    const url = `http://localhost:5000/appoinments?email=${user.email}&&date=${date.toLocaleDateString()}`
    //    fetch(url, {
    //      headers: {
    //        'authorization': `Bearer ${token}`
    //      }
    //    })
    //       .then(res => res.json())
    //       .then(data => setAppoinments(data));
    // }, [date, user.email, token]);
    useEffect(() =>{
       const url = `http://localhost:5000/appoinments?email=${user.email}&&date=${date.toLocaleDateString()}`
       fetch(url, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
       .then(res => res.json())
       .then(data => setAppoinments(data));
    }, [date, user.email, token]);
    
    return (
        <div>
            <h2>Appoinments {appoinments?.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.patientName}
              </TableCell>
              <TableCell align="right">{row?.time}</TableCell>
              <TableCell align="right">{row?.serviceName}</TableCell>
              <TableCell align="right">Yes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Appoinments;
