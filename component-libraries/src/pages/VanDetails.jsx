import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Paper,
  useTheme,
  IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const VanDetails = () => {
  const theme = useTheme()
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

      <Card  variant="outlined" sx={{ borderRadius: "15px", margin: '50px 0' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={van.imageUrl}
              alt={van.name}
              style={{ width: "100%", height: "auto", borderRadius: "15px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent >
              <Typography variant="h1" component="h1" marginTop='50px'>
                {van.name}
              </Typography>
              <Button
                sx={{
                  backgroundColor: typeToBackgroundColor[van.type],
                  color: "white",
                  padding: "10px 15px",
                  fontWeight: "bold",
                 borderRadius: '10px',
                  margin: "15px 0 ",
                }}
              >
                {van.type}
              </Button>
              <Typography variant="h2" marginBottom='15px'>Price: ${van.price}/day</Typography>
              <Typography variant="h6">{van.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                
                fullWidth
                sx={{ borderRadius: "10px", marginTop: "10px", padding: '10px', fontWeight: "bold", fontSize:'20px' }}
              >
                Rent this van
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default VanDetails;
