import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/whitening.png';
// import fluoride from '../../../images/fluoride.png';
// import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: whitening
  }
]


const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: '500',  m: 2 , color: 'success.main' }} variant="h6" component="div">
          OUR SERVICES
      </Typography>
      <Typography sx={{ fontWeight: 'bold',  mb: 4 }} variant="h4" component="div">
          Services We Provide
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map(service => (
          <Service key={service.name} service={service} />
        ))}
      </Grid>
      </Container>
    </Box>
  )
}

export default Services;
