import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Paper,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HostVanDetails = () => {
  const listItemStyle = {
    textDecoration: "none",
    color: "#4D4D4D",
    fontSize: '20px',
    
  
    
   
 
  };
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    fontSize: '20px',
  };

  const theme = useTheme();
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVan(data.vans);
      })
      .catch((error) => {
        console.error("Error fetching van data:", error);
      });
  }, [params.id]);

  if (van === null) {
    return <p>Loading...</p>;
  }

  const typeToBackgroundColor = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };

  return (
    <Box bgcolor={theme.palette.lightpink.main}>
      <Container maxWidth="lg">
        <Link
          to=".."
          relative="path"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <CardActions
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <IconButton size="large">
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.greyish,
              }}
            >
              Back to All Page
            </Typography>
          </CardActions>
        </Link>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Card sx={{ padding: "50px", marginTop: "20px" }}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} md={6}>
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h1" component="h1" marginBottom="20px">
                    {van.name}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: typeToBackgroundColor[van.type],
                      color: "white",
                      padding: "10px 15px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    {van.type}
                  </Button>
                  <Typography variant="h2">Price: ${van.price}/day</Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Box display='flex' justifyContent='space-between' width='50%' margin='30px 0' >
              <NavLink
              end
              to='.'
                style={({ isActive }) =>
                  isActive ? activeStyles : listItemStyle
                }
              >
                Details
              </NavLink>
          
              <NavLink
              to='pricing'
                style={({ isActive }) =>
                  isActive ? activeStyles : listItemStyle
                }
              >
                Pricing
              </NavLink>
          
              <NavLink
              to='photo'
                style={({ isActive }) =>
                  isActive ? activeStyles : listItemStyle
                }
              >
                Photo
              </NavLink>
          
            </Box>

            <Outlet context={{van}} />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default HostVanDetails;
