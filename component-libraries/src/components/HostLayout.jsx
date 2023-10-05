import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  ListItemText,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";

const HostLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const appBarStyle = {
    backgroundColor: theme.palette.lightpink.main,
    boxShadow: "none", // Remove the box shadow
  };

  const listItemStyle = {
    textDecoration: "none",
    color: "#4D4D4D",
  };

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <AppBar position="static" sx={appBarStyle}>
        <Box
          display="flex"
          justifyContent={isMobile ? "space-between" : "space-between"}
          width={isMobile ? "100%" : "35%"}
          margin={isMobile ? "10px" : "30px"}
        >
          <NavLink
            end
            to="."
            style={({ isActive }) =>
              isActive ? activeStyles : listItemStyle
            }
          >
            <ListItemText primary="Dashboard" />
          </NavLink>

          <NavLink
            to="/host/income"
            style={({ isActive }) =>
              isActive ? activeStyles : listItemStyle
            }
          >
            <ListItemText primary="Income" />
          </NavLink>
          <NavLink
            to="/host/vans"
            style={({ isActive }) =>
              isActive ? activeStyles : listItemStyle
            }
          >
            <ListItemText primary="Vans" />
          </NavLink>

          <NavLink
            to="/host/reviews"
            style={({ isActive }) =>
              isActive ? activeStyles : listItemStyle
            }
          >
            <ListItemText primary="Reviews" />
          </NavLink>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};

export default HostLayout;
