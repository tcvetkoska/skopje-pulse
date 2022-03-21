import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import LoadingContainer from "../../../lib/shared/LoadingContainer";
import ErrorContainer from "../../../lib/shared/ErrorContainer";
import SensorsListView from "./SensorsListView";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { getAllActiveSensors } from "../core/api";

function SensorsContainer() {
  const [response, setResponse] = useState(getResponseState);
  const { data, error, isError, isLoading } = response;

  useEffect(() => {
    async function getSensors() {
      const response = await getAllActiveSensors();
      setResponse(response);
    }
    getSensors();
  }, []);

  const shouldRenderSensors = !isLoading && !isError;
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4">Active Sensors</Typography>
      {isLoading && <LoadingContainer />}
      {isError && <ErrorContainer errorMessage={error} />}
      {shouldRenderSensors && <SensorsListView data={data} />}
    </Container>
  );
}

export default SensorsContainer;
