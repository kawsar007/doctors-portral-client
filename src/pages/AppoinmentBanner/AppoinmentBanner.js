import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../images/appointmentBg.png';
import doctor from '../../images/doctor.png';

const appoinmentBanner = {
    background: `url(${bg})`,
    backgroundColor: '#41485C',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const gridStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
}

function AppoinmentBanner() {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="img"
                    />
                </Grid>
                <Grid item xs={12} md={6} style={gridStyle}>
                    <Box>
                        <Typography variant="h6" sx={{mb : 5}} style={{ color: '#63B8BB' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" sx={{my : 5}} style={{ color: '#FFFFFF' }}>
                            Make an appoinment Today.
                        </Typography>
                        <Typography variant="h6" sx={{my : 5}} style={{ color: '#F1F2F3', fontSize: '16px', fontWeight: '300' }}>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </Typography><br />
                        <Button sx={{mb : 5}} variant="contained">Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default AppoinmentBanner;
