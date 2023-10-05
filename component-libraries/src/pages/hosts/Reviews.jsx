import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Rating,
  Divider,
  Container,
} from "@mui/material";
import ReviewsGraph from "../../assets/reviews-graph.png";

const paperStyles = {
  padding: "26px",
  color: "#161616",
  margin: '50px 0'
};

const graphStyles = {
  width: "100%",
  maxWidth: "500px",
};

const topTextStyles = {
  display: "flex",
  alignItems: "center",
  margin: '15px 0px',
};

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text:
        "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <Container>
    <Paper elevation={3} sx={paperStyles}>
      <Box sx={topTextStyles}>
        <Typography variant="h2" component="h2">
          Your reviews
        </Typography>
        <Typography color="#4d4d4d" marginLeft='5px'>
          Last <Box component="span" fontWeight="bold" textDecoration="underline">
            30 days
          </Box>
        </Typography>
      </Box>
      <img src={ReviewsGraph} alt="Review graph" style={graphStyles} />
      <Typography variant="h3" component="h3" marginTop='15px'>
        Reviews ({reviewsData.length})
      </Typography>
      {reviewsData.map((review) => (
        <Box key={review.id} mt={2}>
          <Rating value={review.rating} readOnly />
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Typography variant="p" fontWeight={600} fontSize="20px">
              {review.name}
            </Typography>
            <Typography color="#4d4d4d" ml={1}>
              {review.date}
            </Typography>
          </Box>
          <Typography>{review.text}</Typography>
          <Divider mt={2} />
        </Box>
      ))}
    </Paper>
    </Container>
  );
}
