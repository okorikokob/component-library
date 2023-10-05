import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  useTheme,
  Box
} from "@mui/material";

const HostVans = () => {
  const theme = useTheme()
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Grid item key={van.id} xs={12} sm={6}>
      <Link
        to={`/host/vans/${van.id}`}
        style={{textDecoration: 'none'}}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            marginBottom: "15px",
            padding: "18px",
          }}
        >
          <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              alt={`Photo of ${van.name}`}
              width="200px" // Set the width to maintain a square aspect ratio
              height="200px" // Set the height to maintain a square aspect ratio
              image={van.imageUrl}
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Typography variant="h5" component="div">
                {van.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ${van.price}/day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  ));

  return (
    <Box bgcolor={theme.palette.lightpink.main} >
    <Container sx={{
     
      marginBottom: "30px", // Add space to the bottom
    }} >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          paddingInline: "26px",
          marginBottom: '20px'
        }}
      >
        Your listed vans
      </Typography>
      <Grid container spacing={2} className="host-vans-list">
        {vans.length > 0 ? (
          hostVansEls
        ) : (
          <Typography
            variant="h5"
            sx={{
              paddingInline: "26px",
            }}
          >
            Loading...
          </Typography>
        )}
      </Grid>
    </Container>
    </Box>
  );
};

export default HostVans;
