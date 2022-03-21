import { fetchClient } from "../../../foundation/fetch/fetchClient";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { filterActiveSensors } from "./utils";

export async function getAllActiveSensors() {
  const response = await fetchClient().get({ uri: "sensor" });
  return getResponseState(response, filterActiveSensors);
}
