import { CircularProgress, Container } from "@mui/material";

function LoadingContainer({ height = "90vh" }) {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <CircularProgress size="4em" />
    </Container>
  );
}

export default LoadingContainer;
