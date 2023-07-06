import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx ={{ mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p='20px'>
        <Typography color = "#FF2625">
            Workout Warrior App
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb = "23px" mt = "30px">
            Workouts Made Simple
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Exercises you need at your fingertips...
        </Typography>
        <Button variant = "contained" color="info" href="#exercises" sx= {{backgroundColor: "#FF2625", padding: "10px"}}>
            Explore Exercises
        </Button>
        <Typography fontWeight={600} color= '#FF2625' sx= {{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px">
        Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className= "hero-banner-img" />
    </Box>
  )
}

export default HeroBanner