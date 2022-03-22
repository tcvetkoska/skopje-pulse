import { useState } from "react";
import NoDataContainer from "../../../lib/shared/NoDataContainer";
import Stack from "@mui/material/Stack";
import { Container, Grid, Switch, Typography } from "@mui/material";
import { FILTER_BY } from "../core/constants";

function SensorDetailsView({ data }) {
  const [switchValue, setSwitchValue] = useState(true);
  const handleChange = (event) => {
    setSwitchValue(event.target.checked);
  };
  const pmType = switchValue ? FILTER_BY.pm10 : FILTER_BY.pm25;
  if (Object.keys(data).length === 0) return <NoDataContainer />;

  const average = data[pmType];
  return (
    <Container>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography>PM2.5</Typography>
        <Switch
          inputProps={{ "aria-label": "Switch demo" }}
          checked={switchValue}
          onChange={handleChange}
        />
        <Typography>PM10</Typography>
      </Stack>
      {!average ? (
        <NoDataContainer />
      ) : (
        <Grid container mt={1}>
          <Grid item container spacing={1} justifyContent="center">
            <Grid item>Average data for the past 6 hours: </Grid>
            <Grid item>{average.from6}</Grid>
          </Grid>
          <Grid item container spacing={1} justifyContent="center">
            <Grid item>Average data for the past 12 hours: </Grid>
            <Grid item>{average.from12}</Grid>
          </Grid>
          <Grid item container spacing={1} justifyContent="center">
            <Grid item>Average data for the past 24 hours: </Grid>
            <Grid item>{average.from24}</Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default SensorDetailsView;
