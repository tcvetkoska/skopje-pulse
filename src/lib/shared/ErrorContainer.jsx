import {
  Container as MuiContainer,
  styled,
  Typography as MuiTypography,
} from "@mui/material";

const Container = styled(MuiContainer)(() => ({
  textAlign: "center",
  color: "red",
  position: "relative",
}));
const Typography = styled(MuiTypography)(() => ({
  fontSize: "2em",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
function ErrorContainer({ height = "90vh", errorMessage = null }) {
  return (
    <Container sx={{ height: height }}>
      <Typography>{errorMessage ?? "Error happened"}</Typography>
    </Container>
  );
}

export default ErrorContainer;
