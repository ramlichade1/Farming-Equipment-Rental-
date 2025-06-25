import React, { useState } from "react";
import { Box, Button, TextField, Typography, Alert, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/auth";

const Signup = ({ setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { name, password } = data;

    if (validateUser(name, password)) {
      setLoginError("");
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      setLoginError("You have entered the wrong password")
    }
  };

  return (
    <>
     <Box
        sx={{
          position: "fixed",
          top: { xs: "20px", sm: "30px" }, 
          left: { xs: "20px", sm: "60px" }, 
          fontSize: { xs: "24px", sm: "30px" },
          fontWeight: "bold",
          color: "black", 
          zIndex: 9999, 
        }}
      >
        YuvaShetkari
      </Box>
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${require("../assets/riceimg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "20px", sm: 0 },
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Soft dark overlay
        backdropFilter: "blur(5px)", // Blurring the background
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        bgcolor="rgba(255, 255, 255, 0.8)" // Slight opacity for form background
        p={4}
        borderRadius={5}
        boxShadow={10} // More shadow for floating effect
        width={{ xs: "90%", sm: 400 }}
        zIndex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center" color="black">
          Sign In
        </Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: 3,
              },
            },
            mb: 2,
          }}
          InputProps={{
            startAdornment: (
              <span style={{ marginLeft: 10 }}>
                <i className="fas fa-user" />
              </span>
            ),
          }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: 3,
              },
            },
            mb: 2,
          }}
          InputProps={{
            startAdornment: (
              <span style={{ marginLeft: 10 }}>
                <i className="fas fa-lock" />
              </span>
            ),
          }}
        />

        {loginError && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {loginError}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            width: "100%",
            padding: "12px",
            fontWeight: "bold",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#007bff", // Hover effect
              transform: "scale(1.05)", // Slight animation on hover
            },
          }}
        >
          Log In
        </Button>

        <Link
          href="#"
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "center",
            color: "#007bff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot Password?
        </Link>

        <Link
          href="/signup"
          variant="body2"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#007bff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Don’t have an account? Sign up
        </Link>
      </Box>
    </Box>
    </>
  );
};

export default Signup;
