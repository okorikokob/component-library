import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styledNav = { padding: "25px", borderRadius: 0, boxShadow: 0 };
  const styeldList = { display: "flex", flexDirection: "row" };
  const styledLink = { textDecoration: "none", color: "#4D4D4D" };
  const styledLogo = { flexGrow: 1 };
  const styledLogiLink = { textDecoration: "none", color: "black" };
  return (
    <AppBar position="static" color="lightpink" sx={styledNav}>
      <Toolbar>
        <Typography variant="h1" component="div" sx={styledLogo}>
          <Link style={styledLogiLink} to="/">
            {" "}
            #VanLife
          </Link>
        </Typography>

        <List sx={styeldList}>
          <ListItemButton>
            <Link to="/" style={styledLink}>
              <ListItemText color="primary" primary="Home" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="/about" style={styledLink}>
              <ListItemText primary="About" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="/vanlife" style={styledLink}>
              <ListItemText primary="Vanlife" />
            </Link>
          </ListItemButton>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
