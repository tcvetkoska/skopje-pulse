import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

function NoDataContainer({ height = "90vh" }) {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <Typography>No data.</Typography>
    </Container>
  );
}

export default NoDataContainer;
