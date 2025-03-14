import { Box } from "@mui/material";
import { route } from "../route/route";
import { ListAlt, TaskOutlined } from "@mui/icons-material";

const navBarList = [
  {
    name: "register daily tasks",
    router: route.dailyTask,
    icon: "",
  },
  {
    name: "task list",
    router: route.taskLists,
    icon: "",
  },
  {
    name: "logout",
    router: "",
    icon: "",
  },
];

export default function SideBar() {
  return (
    <Box
      sx={{
        margin: 1,
        borderRadius: 2,
        height: "calc(100vh - 16px)",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: 1,
          padding: 0.5,
          borderRadius: 2,
        }}
      >
        {/* First Box */}
        <Box
          sx={{
            width: "100%",
            height: "30px",
            backgroundColor: "white",
            borderRadius: 1,
            marginTop: 1,
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgb(227, 227, 227)",
            },
            "&:active": {
              backgroundColor: "rgb(224, 224, 224)",
              color: "rgb(0, 157, 134)",
            },
          }}
        >
          <TaskOutlined
            sx={{ fontSize: "20px", paddingRight: "5px", paddingLeft: "5px" }}
          />
          Register Tasks
        </Box>

        {/* Second Box */}
        <Box
          sx={{
            width: "100%",
            height: "30px",
            backgroundColor: "white",
            borderRadius: 1,
            marginTop: 1,
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgb(227, 227, 227)",
            },
            "&:active": {
              backgroundColor: "rgb(224, 224, 224)",
              color: "rgb(0, 157, 134)",
            },
          }}
        >
          <ListAlt
            sx={{ fontSize: "20px", paddingRight: "5px", paddingLeft: "5px" }}
          />
          Tasks List
        </Box>
      </Box>
    </Box>
  );
}
