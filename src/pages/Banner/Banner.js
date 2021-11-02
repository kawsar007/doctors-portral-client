import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../images/bg.png';
import chair from '../../images/chair.png';

const bannerBg = {
    background: `url(${bg})`,
    height: '450px'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

function Banner() {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
            <Box>
            <Typography variant="h3">
                Your New Smile<br/>
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my: 4, fontSize: '14px', fontWeight: '300', color: 'gray'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
            </Typography>
            <Button variant="contained">Get Appoinment</Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{height: '350px'}} src={chair} alt=""/>
        </Grid>
      </Grid>
    </Container>
    )
}

export default Banner;
