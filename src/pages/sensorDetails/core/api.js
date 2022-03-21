import { fetchClient } from "../../../foundation/fetch/fetchClient";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { filterBySensorIdAndPm } from "./utils";

export async function get24hSensorsByPmAndId(id) {
  const response = await fetchClient().get({ uri: "data24h" });
  return getResponseState(response, (data) => filterBySensorIdAndPm(data, id));
}
