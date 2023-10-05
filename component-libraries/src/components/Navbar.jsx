import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const styledNav = {
    padding: "25px",
    borderRadius: 0,
    boxShadow: 0,
  };
  const styledList = { display: "flex", flexDirection: "row" };
  const styledLink = { textDecoration: "none", color: "#4D4D4D" };
  const styledLogo = { flexGrow: 1 };
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("Loggedin") === "true"
  );

  const isMobile = useMediaQuery("(max-width:600px)");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fakeLogOut = () => {
    // Remove the user's login status from localStorage
    localStorage.removeItem("Loggedin");
    setIsLoggedIn(false); // Update the state to reflect the logout
  };

  return (
    <AppBar
      position="static"
      color="lightpink"
      sx={styledNav}
      elevation={isMobile ? 1 : 0}
    >
      <Toolbar>
        <Typography variant="h1" component="div" sx={styledLogo}>
          <NavLink style={styledLink} to="/">
            {" "}
            #VanLife
          </NavLink>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={toggleMenu}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "64px",
                  right: "0",
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <List
                  sx={{ flexDirection: "column", width: "150px" }}
                  onClick={toggleMenu}
                >
                  <ListItemButton>
                    <NavLink
                      to="/host"
                      style={({ isActive }) =>
                        isActive ? activeStyles : styledLink
                      }
                    >
                      HOST
                    </NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyles : styledLink
                      }
                    >
                      ABOUT
                    </NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink
                      to="van"
                      style={({ isActive }) =>
                        isActive ? activeStyles : styledLink
                      }
                    >
                      VANLIFE
                    </NavLink>
                  </ListItemButton>
                </List>
              </div>
            )}
          </>
        ) : (
          <List sx={styledList}>
            <ListItemButton>
              <NavLink
                to="/host"
                style={({ isActive }) =>
                  isActive ? activeStyles : styledLink
                }
              >
                HOST
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? activeStyles : styledLink
                }
              >
                ABOUT
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                to="van"
                style={({ isActive }) =>
                  isActive ? activeStyles : styledLink
                }
              >
                VANLIFE
              </NavLink>
            </ListItemButton>
          </List>
        )}

        {/* Conditionally render Login/Logout button */}
        {isMobile ? (
          <NavLink to="/login" style={styledLink}>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </NavLink>
        ) : isLoggedIn ? (
          <IconButton color="inherit" onClick={fakeLogOut}>
            <AccountCircleIcon />
          </IconButton>
        ) : (
          <NavLink to="/login" style={styledLink}>
            <Button color="inherit">Login</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
