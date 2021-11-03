import Grid from '@mui/material/Grid';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../../Shared/Calendar/Calendar';

const AppoinmentHeader = ({date, setDate}) => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <Calendar date={date} setDate={setDate}/>
        </Grid>
        <Grid item style={{width: '100%'}} xs={12} md={4}>
            <img src={chair} alt=""/>
        </Grid>
      </Grid>
    )
}

export default AppoinmentHeader;
