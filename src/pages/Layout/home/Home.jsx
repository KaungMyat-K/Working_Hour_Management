import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          margin: 0,
          padding: 0,
          paddingTop: 3,
        }}
      >
        <Box
          sx={{
            height: "20vh",
          }}
        >
          filter
        </Box>
        <Box
          sx={{
            height: "65vh",
          }}
        >
          Table
        </Box>
      </Container>
    </>
  );
}
