export function SensorDataGenerator(type, n, max, min) {
  return [...Array(n).keys()].map((i) => {
    const randHours = Math.random() * (max - min) + min;
    const date = new Date(new Date().getTime() - (randHours * 60 * 60 * 1000));
    return {
      sensorId: i,
      position: "",
      stamp: date.toISOString(),
      type,
      value: Math.round(Math.random() * 100) + i,
    };
  });
}
