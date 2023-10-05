import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  Button,
  Paper,
  Box,
  Container,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { getHostVans } from "../../api";

const earningsPaper = {
  backgroundColor: "#ffead0",
  padding: "37px 26px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "50px",
};

const hostVanSingle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  marginBottom: "15px",
  padding: "18px 24px",
};

const hostVanImage = {
  height: "70px",
  borderRadius: "5px",
  marginRight: "17px",
};

const hostVanInfo = {
  marginRight: "auto",
};

const hostVanTitle = {
  fontSize: "20px",
  fontWeight: 600,
  marginBlock: "10px",
};

const hostVanPrice = {
  marginBlock: "10px",
};

const earningsInfo = {
  flex: 1,
};

const earningsHeading = {
  fontSize: "36px",
  color: "#161616",
  marginBottom: '10px',
};

const earningsText = {
  color: "#4d4d4d",
};

const earningsSpan = {
  textDecoration: "underline",
  fontWeight: "bold",
};

const earningsAmount = {
  margin: 0,
  fontSize: "38px",
  color: "#161616",
  fontWeight: 900,
};

const reviewsPaper = {
  backgroundColor: "#ffddb2",
  padding: "25px 26px",
  display: "flex",
  alignItems: "center",
};

const reviewsHeading = {
  margin: 0,
};

const starIcon = {
  color: "#ff8c38",
  marginLeft: "15px",
  fontSize: "25px",
};

const reviewsText = {
  marginLeft: "5px",
  fontSize: "20px",
  color: "#4d4d4d",
  marginRight: "auto",
};

const reviewsSpan = {
  fontWeight: "bold",
  color: "#161616",
};

const vansPaper = {
  padding: "38px 26px",
};

const vansTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
};

const hostVansList = {
  paddingInline: "26px",
};

const Dashboard = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <Paper elevation={3} style={hostVanSingle} key={van.id}>
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          style={hostVanImage}
        />
        <Box style={hostVanInfo}>
          <Typography variant="h6" style={hostVanTitle}>
            {van.name}
          </Typography>
          <Typography style={hostVanPrice}>${van.price}/day</Typography>
        </Box>
        <Link to={`vans/${van.id}`}>
          <Button variant="contained" color="primary">
            View
          </Button>
        </Link>
      </Paper>
    ));

    return (
      <Box sx={hostVansList}>
        <section>{hostVansEls}</section>
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h1">Error: {error.message}</Typography>;
  }

  return (
    <Container>
      <Paper style={earningsPaper}>
        <Box style={earningsInfo}>
          <Typography variant="h4" style={earningsHeading}>
            Welcome!
          </Typography>
          <Typography style={earningsText}>
            Income last <span style={earningsSpan}>30 days</span>
          </Typography>
          <Typography variant="h6" style={earningsAmount}>
            $2,260
          </Typography>
        </Box>
        <Link to="income">
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </Link>
      </Paper>
      <Paper style={reviewsPaper}>
        <Typography variant="h4" style={reviewsHeading}>
          Review score
        </Typography>

        <StarIcon style={starIcon} />

        <Typography style={reviewsText}>
          <span style={reviewsSpan}>5.0</span>/5
        </Typography>
        <Link to="reviews">
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </Link>
      </Paper>
      <Paper style={vansPaper}>
        <Box style={vansTop}>
          <Typography variant="h4">Your listed vans</Typography>
          <Link to="vans">
            <Button variant="outlined" color="primary">
              View all
            </Button>
          </Link>
        </Box>
        {loading && !vans ? (
          <CircularProgress />
        ) : (
          <>{renderVanElements(vans)}</>
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard;
