import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import bgImage from "../../assets/bg.mp4";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };
  return (
    <>
      <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <video autoPlay loop muted className="video-background" src={bgImage}>
          Your browser does not support the video tag.
        </video>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            width: { xs: "90%", sm: "50%", md: "30%" },
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 2,
            borderRadius: "60px 0 0 60px",
            padding: { xs: "1rem", sm: "2rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h5" color="white" align="center" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "4px",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFormHelperText-root": {
                  color: "white",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "4px",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFormHelperText-root": {
                  color: "white",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
