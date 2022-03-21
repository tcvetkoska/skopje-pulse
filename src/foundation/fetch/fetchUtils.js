import { errorsByStatusCode } from "./constants";

export function handleErrors({ status }) {
  const errorMessage = errorsByStatusCode[status] ?? "Error occurred.";
  return { hasError: true, errorMessage };
}

export async function handleResponse(promiseResponse) {
  if (!promiseResponse.ok) {
    return handleErrors({
      status: promiseResponse.status,
    });
  }
  let response = await parseResponse(promiseResponse);
  return response;
}

async function parseResponse(response) {
  try {
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
}
