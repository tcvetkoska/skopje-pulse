import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingContainer from "../../../lib/shared/LoadingContainer";
import ErrorContainer from "../../../lib/shared/ErrorContainer";
import RQSensorsListView from "./RQSensorsListView";
import { useGetAllActiveSensors } from "../core/useCases";

function RQSensorsContainer() {
  const { data, error, isError, isLoading } = useGetAllActiveSensors();
  const shouldRenderSensors = !isLoading && !isError && data;
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4">Active Sensors</Typography>
      {isLoading && <LoadingContainer />}
      {isError && <ErrorContainer errorMessage={error} />}
      {shouldRenderSensors && <RQSensorsListView data={data} />}
    </Container>
  );
}

export default RQSensorsContainer;
