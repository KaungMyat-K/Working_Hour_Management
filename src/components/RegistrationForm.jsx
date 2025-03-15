import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";

export default function RegistrationForm() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        padding: 2,
      }}
    >
      {/* Copy Button */}
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

      {/* Delete Button */}
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

      {/* Number Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px", // Consistent width
          height: "32px",
          backgroundColor: "grey",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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

      {/* Project ID Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Project ID" fullWidth />
      </Box>

      {/* Project Name Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Project Name" fullWidth />
      </Box>

      {/* Task ID Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Task ID" fullWidth />
      </Box>

      {/* Action ID Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Action ID" fullWidth />
      </Box>

      {/* Category Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Category" fullWidth />
      </Box>

      {/* Activity Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Activity" fullWidth />
      </Box>

      {/* Description Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="Description" fullWidth />
      </Box>

      {/* From Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="From" fullWidth />
      </Box>

      {/* To Input */}
      <Box sx={{ width: "115px" }}>
        <Input placeholder="To" fullWidth />
      </Box>

      {/* Hours Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px", // Consistent width
          height: "32px",
          backgroundColor: "rgb(8, 183, 69)",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
  );
}
