import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: "light",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        //
        root: {
          textTransform: "uppercase",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#FF8C38",
            color: "white",
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#161616",
            color: "white",
          },
        },
        {
            props: { variant: "contained", color: "rugged" },
            style: {
              backgroundColor: "#115E59",
              color: "white",
            },
          },
          {
            props: { variant: "contained", color: "simple" },
            style: {
              backgroundColor: "#FFEAD0",
              color: "white",
            },
          },
      ],
    },
  },
  palette: {
    primary: {
      main: "#FF8C38",
    },
    secondary: {
      main: "#161616",
    },
    success: {
      main: "#fff",
    },
    greyish:{
        main: "#4D4D4D"
    },
    lightpink:{
        main: '#FFF7ED'
    }
  },
});

export default theme;
