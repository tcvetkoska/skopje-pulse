import { SensorDataGenerator } from "../__fixtures__/utils.fixture";
import { filterBySensorIdAndPm } from "../core/utils";

describe("Utils functions", () => {
  let dataArray = [];
  let otherData = [];
  let between6pm10 = [];
  let between12pm10 = [];

  beforeAll(() => {
    const between6pm25 = SensorDataGenerator("pm25", 5, 6, 0);
    between6pm10 = SensorDataGenerator("pm10", 7, 6, 0);
    const between12pm25 = SensorDataGenerator("pm25", 7, 12, 6);
    between12pm10 = SensorDataGenerator("pm10", 8, 12, 6);
    otherData = SensorDataGenerator("humidity", 5, 6, 0);
    dataArray = [
      ...between6pm25,
      ...between6pm10,
      ...between12pm25,
      ...between12pm10,
      ...otherData,
    ];
  });
  it("filterBySensorIdAndPm -  filters the sensors by pm25 and pm10, returns the list of correct sensors", () => {
    const result = filterBySensorIdAndPm(dataArray, 6);
    expect(result.pm10.length).toBe(2);
    expect(result.pm25.length).toBe(1);
  });
  it("filterBySensorIdAndPm -  filters the sensors by pm25 and pm10, returns null for an empty list", () => {
    const result = filterBySensorIdAndPm([], 10);
    expect(result).toBeNull();
  });
  it("filterBySensorIdAndPm -  filters the sensors by pm25 and pm10, returns null for list without pm10 or pm25", () => {
    const result = filterBySensorIdAndPm(otherData, 5);
    expect(result).toBeNull();
  });
  it("filterBySensorIdAndPm -  filters the sensors by pm25 and pm10, returns null if for the selected Id there is no data", () => {
    const result = filterBySensorIdAndPm(dataArray, 10);
    expect(result).toBeNull();
  });
});
