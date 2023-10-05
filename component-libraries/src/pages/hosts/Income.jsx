import React from "react";
import { Typography, Box, Paper, Grid, Avatar, Container } from "@mui/material";
import IncomeGraph from '../../assets/income-graph.png';

const paperStyles = {
  padding: "26px",
  color: "#161616",
  margin: '50px'
};

const amountStyles = {
  fontSize: "38px",
  fontWeight: 900,
  color: "#161616",
};

const graphStyles = {
  width: "100%",
  maxWidth: "500px",
};

const infoHeaderStyles = {
  display: "flex",
  alignItems: "center",
  margin: '50px 0'
  
};

const transactionsStyles = {
  backgroundColor: "white",
  marginBottom: "31px",
  borderRadius: "6px",
  padding: "35px 29px",
};

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <Container>
    <Paper elevation={3} sx={paperStyles}>
      <Typography variant="h3">Income</Typography>
      <Typography color="#4d4d4d">
        Last <Box component="span" fontWeight="bold" textDecoration="underline">
          30 days
        </Box>
      </Typography>
      <Typography variant="h2" sx={amountStyles}>
        $2,260
      </Typography>
      <img src={IncomeGraph} alt="Income graph" style={graphStyles} />
      <Box sx={infoHeaderStyles}>
        <Typography variant="h3" fontWeight={700} fontSize="24px" marginRight='5px'>
          Your transactions ({transactionsData.length})
        </Typography>
        <Typography color="#4d4d4d">
          Last <Box component="span" fontWeight="bold" textDecoration="underline">
            30 days
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {transactionsData.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Paper elevation={3} sx={transactionsStyles}>
              <Typography variant="h3" fontSize="36px" fontWeight={600} margin="0">
                ${item.amount}
              </Typography>
              <Typography variant="p" fontWeight={500} fontSize="20px" color="#4d4d4d">
                {item.date}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
    </Container>
  );
}
