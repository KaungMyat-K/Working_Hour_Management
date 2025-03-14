import {
  Box,
  Button,
  FormControl,
  Input,
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
            height: "13vh",
            width: "20vw",
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <img src={profile} style={{ width: "7vh", marginLeft: 10 }}></img>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "rgb(106, 99, 105)", fontSize: "14px" }}>
              Staff Info
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "rgb(118, 107, 107)",
                  fontSize: "13px",
                  width: "50px",
                }}
              >
                ID
              </Typography>
              <Typography
                sx={{
                  color: "rgb(96, 94, 94)",
                  fontSize: "15px",
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
                  fontSize: "13px",
                  width: "50px",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: "rgb(118, 107, 107)",
                  fontSize: "15px",
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
            height: "13vh",
            width: "15vw",
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <img src={immigration} style={{ width: "7vh", marginLeft: 10 }}></img>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
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
            height: "13vh",
            width: "20vw",
            backgroundColor: "white",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <img src={calendar} style={{ width: "7vh", marginLeft: 10 }}></img>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Report Date"
                  sx={{
                    // width: "300px",
                    "& .MuiInputBase-root": {
                      height: "40px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "14px",
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
          <Box
            sx={{
              display: "flex",
              gap: 1,
              backgroundColor: "rgb(243, 239, 239)",
              borderRadius: "8px",
              padding: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "114px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Action</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>No</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Project ID</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Project Name</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Task ID</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Action ID</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Category</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Activity</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Description</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>From</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "115px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>To</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Hours</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              boxShadow: 3,
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Button
              sx={{
                backgroundColor: "rgb(5, 147, 125)",
                color: "white",
                borderRadius: "8px",
                padding: "0px 8px",
                textTransform: "none",
                fontSize: "13px",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "rgb(3, 115, 98)",
                },
              }}
            >
              Copy
            </Button>
            <Button
              sx={{
                backgroundColor: "rgb(212, 13, 13)",
                color: "white",
                borderRadius: "8px",
                padding: "0px 8px",
                textTransform: "none",
                fontSize: "13px",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "rgb(183, 14, 14)",
                },
              }}
            >
              Delete
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "32px",
                backgroundColor: "grey",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, )",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",

                  textAlign: "center",
                }}
              >
                1
              </Typography>
            </Box>
            <Input placeholder="Project ID" />
            <Input placeholder="Project Name" />
            <Input placeholder="Task ID" />
            <Input placeholder="Action ID" />
            <Input placeholder="Category" />
            <Input placeholder="Activity" />
            <Input placeholder="Description" />
            <Input placeholder="From" />
            <Input placeholder="To" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "35px",
                height: "32px",
                backgroundColor: "rgb(8, 183, 69)",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0,)",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                10.0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
