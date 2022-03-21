import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

function NoMatch({ height = "100vh" }) {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <Typography>No Match the route.</Typography>
    </Container>
  );
}

export default NoMatch;
