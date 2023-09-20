import React from "react";
import { Box, Typography, Button } from "@mui/material/";

import styled from "styled-components";

const HeroSection = ({backgroundImage, title, paragraph, buttonProp, containerHeight}) => {

  
const HeroContainer = styled.div`
background-image: 
  url(${backgroundImage});
background-size: cover;

height: ${containerHeight}
); // Adjust the height as needed (minus the Navbar height)
`;

const BoxContent = styled.div`
align-content: center;
text-align: center;
padding: 200px;
`;

const StyledText = {
color: "white",
marginBottom: "30px",
};
const ButtonStyle = {
width: "100%",
padding: "20px 0",
};

  


  return (
    <HeroContainer>
      <Box>
        <BoxContent>
          <Box>
            <Typography variant="h1" component="h2" sx={StyledText}>
             {title}
            </Typography>

            <Typography variant="h2" sx={StyledText}>
              {paragraph}
            </Typography>

            {buttonProp && (<Button variant="contained" color="primary" sx={ButtonStyle}>
             {buttonProp}
            </Button>)}
          </Box>
        </BoxContent>
      </Box>
    </HeroContainer>
  );
};

export default HeroSection;

