import React from "react";
import HeroSection from "../components/HeroSection";
import aboutImage from "../assets/about-image.png";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const boxContent = {
    marginBottom: isMobile ? "10px" : "20px",
  };

  const styledButton = {
    padding: isMobile ? "10px" : "20px",
    margin: isMobile ? "20px 0" : "30px 0",
    fontSize: isMobile ? "16px" : "20px",
    borderRadius: "15px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <HeroSection backgroundImage={aboutImage} containerHeight="100vh" />
      <Container>
        <Typography
          marginTop={isMobile ? "50px" : "100px"}
          variant={isMobile ? "h2" : "h1"}
          component="h3"
          sx={boxContent}
        >
          Don’t squeeze in a sedan when you could relax in a van.
        </Typography>
        <Typography variant={isMobile ? "h4" : "h3"} sx={boxContent}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </Typography>
        <Typography variant={isMobile ? "h4" : "h3"} marginBottom={isMobile ? "50px" : "100px"}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </Typography>

        <Box
          sx={{
            padding: isMobile ? "30px" : "100px",
            marginBottom: "100px",
            backgroundColor: "#ffcc8d",
            borderRadius: "15px",
          }}
        >
          <Typography variant={isMobile ? "h2" : "h1"}>
            Your destination is waiting. Your van is ready.
          </Typography>
          <Button sx={styledButton} variant="contained" color="secondary">
            <Link style={linkStyle} to="/host">
              Explore Our Van
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default About;
