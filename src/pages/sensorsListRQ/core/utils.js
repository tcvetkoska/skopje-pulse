export function filterActiveSensors(sensorsResponse) {
    return sensorsResponse.filter((sensor) => sensor.status === "ACTIVE");
  }
  