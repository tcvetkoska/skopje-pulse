import { standardHeaders } from "./constants";
import { handleResponse } from "./fetchUtils";

function fetchMethod(method) {
  return async (args) => {
    const response = await fetch(`https://skopje.pulse.eco/rest/${args.uri}`, {
      method,
      headers: standardHeaders,
    });
    return handleResponse(response);
  };
}
// standard function usage
export function fetchClient() {
  return {
    get: fetchMethod("GET"),
  };
}
// hooks usage for headers
export function useFetchClient() {
  return {
    get: fetchMethod("GET"),
  };
}
