import { filterActiveSensors } from "../core/utils";
import { FILTER_ACTIVE_SENSORS } from "../__fixtures__/utils.fixture";

describe("Utils functions", () => {
  it("filterActiveSensors -  filters the sensors by their status, returns the list of correct sensors", () => {
    const result = filterActiveSensors(FILTER_ACTIVE_SENSORS.args);
    expect(result.length).toBe(FILTER_ACTIVE_SENSORS.expected);
    expect(result).toStrictEqual(FILTER_ACTIVE_SENSORS.args.slice(1));
  });
});
