import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import aboutImage from "../assets/about-image.png";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection backgroundImage={aboutImage} containerHeight="100vh" />
      <Box sx={boxContainer}>
        <Typography variant="h1" component="h3" sx={boxContent}>
          Don’t squeeze in a sedan when you could relax in a van.
        </Typography>
        <Typography variant="h3" sx={boxContent}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </Typography>
        <Typography variant="h3">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </Typography>
      </Box>

      <Box padding="100px" margin="100px" bgcolor="#FFCC8D" borderRadius="15px">
        <Typography variant="h1">
          Your destination is waiting. Your van is ready.
        </Typography>
        <Button sx={styledButton} variant="contained" color="secondary">
       <Link style={linkStyle} to='/'>   Explore Our Van</Link>
        </Button>
      </Box>

      <Footer />
    </>
  );
};

export default About;

const boxContainer = { padding: "100px 100px 0 100px" };

const boxContent = { marginBottom: "20px" };

const styledButton = {
  padding: "20px",
  margin: "30px 0",
  fontSize: "20px",
  borderRadius: "15px",
};

const linkStyle = {color: 'white', textDecoration: 'none'}