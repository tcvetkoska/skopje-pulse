import { RESPONSE } from "./constants";

export function getResponseState(response = null, filterData = null) {
  if (!response) return RESPONSE.onMount;
  if (response.hasError) {
    return { ...RESPONSE.error, error: response.errorMessage };
  } else {
    return {
      ...RESPONSE.success,
      data: filterData ? filterData(response) : response,
    };
  }
}
