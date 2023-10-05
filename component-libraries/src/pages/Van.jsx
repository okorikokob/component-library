import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Container,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const Van = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [vans, setVans] = useState([]);
  const [typeFilter, setTypeFilter] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Get the type filter from the search params and set it in state
    const newTypeFilter = searchParams.get("type");
    setTypeFilter(newTypeFilter);
  }, [searchParams]);

  const typeToBackgroundColor = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };

  // Function to clear the type filter
  const clearTypeFilter = () => {
    setSearchParams({});
    setTypeFilter(null);
  };
  


  return (
    <Box bgcolor="#FFF7ED">
      <Container maxWidth="lg" sx={{ paddingTop: "80px" }}>
        <Typography variant="h1" component="h1" align="center" marginBottom="30px">
          Explore our van options
        </Typography>
       
        {/* Row of link buttons */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="20px"
          flexWrap="wrap"
        >
          {Object.keys(typeToBackgroundColor).map((type) => (
            <Link
              key={type}
              to={`/van?type=${type}`} // Include the type parameter in the URL
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  backgroundColor: typeToBackgroundColor[type],
                  color: "white",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              
              >
                {type}
              </Button>
            </Link>
          ))}
          {typeFilter && (
            <Button
              variant="outlined"
              color="primary"
              onClick={clearTypeFilter}
              sx={{
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              Clear
            </Button>
          )}
        </Box>

        <Grid container spacing={isSmallScreen ? 2 : 3}>
          {vans
            .filter((van) => !typeFilter || van.type === typeFilter) // Filter based on typeFilter
            .map((van) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={van.id}>
                <Link to={`/van/${van.id}`}>
                  <Card  sx={{ backgroundColor: "#FFF7ED", boxShadow: 0 }}>
                    <img
                      src={van.imageUrl}
                      alt={van.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "15px",
                      }}
                    />
                    {/* Display van information */}
                    <CardContent>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        marginBottom="20px"
                      >
                        <Typography variant="h5" component="div">
                          {van.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Price: ${van.price}/day
                        </Typography>
                      </Box>
                      <Button
                        sx={{
                          backgroundColor: typeToBackgroundColor[van.type],
                          color: "white",
                          padding: "10px 15px",
                          fontWeight: "bold",
                        }}
                      >
                        {van.type}
                      </Button>
                    </CardContent>
                    
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Van;
