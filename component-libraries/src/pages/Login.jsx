import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
  Grid,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/host";

  const [loginFormData, setLoginFormData] = useState({
    email: "b@b.com", // Default email
    password: "p123", // Default password
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    // You can use useEffect to clear the error message when the component mounts
    setError(null);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Container sx={{ marginTop: "100px" }} component="main" maxWidth="md">
      <CssBaseline />
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockOutlinedIcon
          style={{
            marginBottom: "15px",
          }}
        />
        {location.state?.message && (
          <Typography variant="h3" color="red">
            {location.state.message}
          </Typography>
        )}
        <Typography component="h1" variant="h5" marginBottom="15px">
          Sign in to your account
        </Typography>
        {error?.message && (
          <Typography variant="h3" color="red" className="login-error">
            {error.message}
          </Typography>
        )}
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={loginFormData.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={loginFormData.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ padding: "15px", marginTop: "10px" }}
          >
            {status === "submitting" ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </div>
    </Container>
  );
}
