import React from 'react';
import { Grid, Typography, Button, Slider, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Landingimg from '../assets/images/LPI.png';
import about from '../assets/images/about.png';
import download from '../assets/images/download.png';
import download2 from '../assets/images/download.jpg';
import Lankahospitals from '../assets/images/Lanka-Hospitals.png';
import NinewellsLogo from '../assets/images/NinewellsLogo.jpg';
import hemas from '../assets/images/hema.png';
import siddha from '../assets/images/sidda2.jpeg';






const Home = () => {


  return (
    <div>
      {/* Section 1 */}
      <section style={{ backgroundColor: '#e3f0ff' }}>
        <Grid container p={1}>
          <Grid item lg={7} xl={7} p={4}>
            <Typography variant='h1' fontWeight={600} color={'#185FA0'} fontFamily={`poppins`}>
              Consult Top Pharmacists Online
            </Typography>
            <Typography variant='h6' sx={{ mt: 3 }} fontWeight={300} color={'#185FA0'} fontFamily={`poppins`}>

              "Discover a modern pharmacy experience online, where convenience meets care. Browse a wide range of pharmaceutical products, order prescriptions, and receive expert advice, all from the comfort of your home. Stay healthy, effortlessly."

            </Typography>

          </Grid>
          <Grid item lg={5} xl={5} display={'flex'} justifyContent={'center'} p={2}>
            <img src={Landingimg} width={'70%'} alt='' />
          </Grid>
        </Grid>

        {/* Logo container */}
        <Grid container bgcolor={'white'} height={'05vh'}>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={download} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={download2} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={Lankahospitals} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={NinewellsLogo} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={hemas} width={'40%'} alt='' />

          </Grid>
          <Grid item lg={2} display={'flex'} justifyContent={'center'}>
            <img src={siddha} width={'50%'} alt='' />

          </Grid>

        </Grid>

      </section>

      {/* Section 2 */}
      {/*  */}

    </div>
  );
};

export default Home;
