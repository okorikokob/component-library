import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material/";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeroSection = ({ backgroundImage, title, paragraph, buttonProp, containerHeight }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const HeroContainer = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    height: ${containerHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: ${isMobile ? "80px" : "200px"};
  `;

  const StyledText = {
    marginBottom: "30px",
    fontSize: isMobile ? "24px" : "36px",
  };

  const ButtonStyle = {
    width: "100%",
    padding: isMobile ? "15px 0" : "20px 0",
  };

  return (
    <HeroContainer>
      <Box>
        <Typography variant="h1" component="h2" sx={StyledText}>
          {title}
        </Typography>

        <Typography variant="h2" sx={StyledText}>
          {paragraph}
        </Typography>

        {buttonProp && (
          <Link to='/login' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
          <Button variant="contained" color="primary" sx={ButtonStyle}>
            {buttonProp}
          </Button>
          </Link>
        )}
      </Box>
    </HeroContainer>
  );
};

export default HeroSection;
