import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import background from "../../assets/bg1.png";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-end" },
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pr: { xs: "1rem", md: "10rem" },
        pl: { xs: "1rem", md: "0" },
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: { xs: "1rem", md: "2rem" },
          width: "90vw",
          maxWidth: "400px",
          minWidth: "280px",
          textAlign: "center",
          borderRadius: "1rem",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "2.5rem", height: "2.5rem", marginRight: "0.5rem" }}
          />
        </Stack>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <TextField
            label="Employee ID"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("employeeId", {
              required: "Employee ID is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Enter a valid employee ID",
              },
            })}
            error={!!errors.employeeId}
            helperText={errors.employeeId ? errors.employeeId.message : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.75rem",
                backgroundColor: "transparent",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#007bff",
                },
              },
              "& input": {
                backgroundColor: "transparent !important",
                WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
                "&:-webkit-autofill": {
                  WebkitTextFillColor: "white !important",
                  transition: "background-color 5000s ease-in-out 0s",
                },
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
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.75rem",
                backgroundColor: "transparent",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#007bff",
                },
              },
              "& input": {
                backgroundColor: "transparent !important",
                WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
                "&:-webkit-autofill": {
                  WebkitTextFillColor: "white !important",
                  transition: "background-color 5000s ease-in-out 0s",
                },
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
              borderRadius: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
