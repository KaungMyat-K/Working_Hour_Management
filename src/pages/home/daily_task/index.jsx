import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import profile from "../../../assets/user.png";
import immigration from "../../../assets/immigration.png";
import calendar from "../../../assets/calendar.png";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import RegistrationForm from "../../../components/RegistrationForm";

const Home = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        margin: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* first section */}
      <Box
        sx={{
          height: "5vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            color: "rgb(118, 107, 107)",
          }}
        >
          Registration Tasks
        </Typography>
      </Box>
      {/* second section */}
      <Box
        sx={{
          height: "15vh",
          display: "flex",
          gap: 2,
        }}
      >
        {/* user info */}
        <Box
          sx={{
            height: { xs: "15vh", sm: "13vh" },
            width: {
              xs: "90vw",
              sm: "70vw",
              md: "40vw",
              lg: "30vw",
              xl: "20vw",
            },
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 4 },
            padding: { xs: 1, sm: 0 },
          }}
        >
          <img
            src={profile}
            style={{
              width: { xs: "5vh", sm: "7vh" },
              marginLeft: { xs: 5, sm: 10 },
            }}
            alt="Profile"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "rgb(106, 99, 105)",
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              Staff Info
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "rgb(118, 107, 107)",
                  fontSize: { xs: "12px", sm: "13px" },
                  width: "50px",
                }}
              >
                ID
              </Typography>
              <Typography
                sx={{
                  color: "rgb(96, 94, 94)",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: "bold",
                }}
              >
                123123
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "rgb(96, 94, 94)",
                  fontSize: { xs: "12px", sm: "13px" },
                  width: "50px",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: "rgb(118, 107, 107)",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: "bold",
                }}
              >
                John John
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* attendance */}
        <Box
          sx={{
            height: { xs: "10vh", sm: "13vh" },
            width: {
              xs: "90vw",
              sm: "50vw",
              md: "30vw",
              lg: "20vw",
              xl: "15vw",
            },
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 4 },
            padding: { xs: 1, sm: 0 },
          }}
        >
          <img
            src={immigration}
            style={{
              width: { xs: "5vh", sm: "7vh" },
              marginLeft: { xs: 5, sm: 10 },
            }}
            alt="Immigration"
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl
              variant="standard"
              sx={{
                minWidth: { xs: 100, sm: 120 },
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Attendance
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Attendance"
              >
                <MenuItem value={10}>Present</MenuItem>
                <MenuItem value={20}>Full Leave</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        {/* Date */}
        <Box
          sx={{
            height: { xs: "15vh", sm: "13vh" }, // Adjust height for different screen sizes
            width: {
              xs: "90vw",
              sm: "70vw",
              md: "40vw",
              lg: "30vw",
              xl: "20vw",
            }, // Adjust width for different screen sizes
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 4 }, // Adjust gap for different screen sizes
            padding: { xs: 1, sm: 0 }, // Add padding for smaller screens
          }}
        >
          {/* Image */}
          <img
            src={calendar}
            style={{
              width: { xs: "5vh", sm: "7vh" }, // Adjust image size for different screen sizes
              marginLeft: { xs: 5, sm: 10 }, // Adjust margin for different screen sizes
            }}
            alt="Calendar"
          />

          {/* DatePicker */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Report Date"
                  sx={{
                    width: { xs: "100px", sm: "150px", md: "200px" },
                    "& .MuiInputBase-root": {
                      height: "40px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: { xs: "12px", sm: "14px" },
                      color: "rgb(118, 107, 107)",
                      transform: "translate(14px, 10px) scale(1)",
                      "&.Mui-focused, &.MuiInputLabel-shrink": {
                        transform: "translate(14px, -9px) scale(0.75)",
                      },
                    },
                    "& .MuiOutlinedInput-root": {
                      overflow: "hidden",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
      {/* third section */}
      <Box
        sx={{
          height: "73.5vh",
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "rgb(118, 107, 107)",
              }}
            >
              Daily Progress List
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>
              <Button
                sx={{
                  backgroundColor: "rgb(0, 157, 134)",
                  color: "white",
                  borderRadius: "50%",
                  minWidth: "auto",
                  width: "30px",
                  height: "30px",
                  padding: "0",
                  "&:hover": {
                    backgroundColor: "rgb(3, 115, 98)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  +
                </Typography>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(5, 147, 125)",
                  color: "white",
                  borderRadius: "8px",
                  padding: "1px 8px",
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "rgb(3, 115, 98)",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "16px",
                    marginRight: "8px",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            margin: 1,
            display: "flex",
            gap: 1,
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              backgroundColor: "rgb(243, 239, 239)",
              borderRadius: "8px",
              padding: 1,
            }}
          >
            {/* Action */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Action</Typography>
            </Box>

            {/* No */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "50px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>No</Typography>
            </Box>

            {/* Project ID */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Project ID</Typography>
            </Box>

            {/* Project Name */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Project Name</Typography>
            </Box>

            {/* Task ID */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Task ID</Typography>
            </Box>

            {/* Action ID */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Action ID</Typography>
            </Box>

            {/* Category */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Category</Typography>
            </Box>

            {/* Activity */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Activity</Typography>
            </Box>

            {/* Description */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Description</Typography>
            </Box>

            {/* From */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>From</Typography>
            </Box>

            {/* To */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>To</Typography>
            </Box>

            {/* Hours */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "50px", // Consistent width
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Hours</Typography>
            </Box>
          </Box>

          {/* Form */}
          <RegistrationForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
