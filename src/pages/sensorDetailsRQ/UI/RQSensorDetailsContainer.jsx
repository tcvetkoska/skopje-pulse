import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMemo } from "react";
import LoadingContainer from "../../../lib/shared/LoadingContainer";
import ErrorContainer from "../../../lib/shared/ErrorContainer";
import { calculateAverageByPM } from "../core/utils";
import SensorDetailsView from "./RQSensorDetailsView";
import { useParams } from "react-router-dom";
import { useGetData24H } from "../core/useCases";

function RQSensorDetailsContainer() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetData24H(id);
  const averageData = useMemo(() => calculateAverageByPM(data), [data]);

  const shouldRenderSensors = !isLoading && !isError;
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4">Sensors: </Typography>
      {isLoading && <LoadingContainer />}
      {isError && <ErrorContainer errorMessage={error} />}
      {shouldRenderSensors && <SensorDetailsView data={averageData} />}
    </Container>
  );
}

export default RQSensorDetailsContainer;
