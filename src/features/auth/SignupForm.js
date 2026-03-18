import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import { useForm } from "react-hook-form";

const SignupForm = ({ onBackToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      bgcolor="rgba(255, 255, 255, 0.8)"
      p={4}
      borderRadius={5}
      boxShadow={10}
      width={{ xs: "90%", sm: 400 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Sign Up
      </Typography>

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", { required: "Password is required" })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          width: "100%",
          borderRadius: 3
        }}
      >
        Sign Up
      </Button>

      <Button
        onClick={onBackToLogin}
        sx={{ mt: 2 }}
      >
        Back to Login
      </Button>
    </Box>
  );
};

export default SignupForm;