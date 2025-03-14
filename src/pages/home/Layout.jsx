import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        gap: 2,
        backgroundColor: "rgb(242, 242, 242)",
      }}
    >
      <Box
        sx={{
          flex: "1",
          maxWidth: "10vw",
        }}
      >
        <SideBar />
      </Box>
      <Box
        sx={{
          flex: "9",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
