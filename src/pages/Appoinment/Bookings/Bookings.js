import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Bookings = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py : 5, boxShadow: 0}}>
                    <Typography sx={{ color: 'info.main', fontWeight: 400 }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {time}
                    </Typography>
                    <Typography gutterBottom variant="caption" display="block" >
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button variant="contained">BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
        </>
    )
}

export default Bookings;
