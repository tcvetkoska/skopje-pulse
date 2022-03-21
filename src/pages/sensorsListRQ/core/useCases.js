import { useFetchClient } from "../../../foundation/fetch/fetchClient";
import { filterActiveSensors } from "./utils";
import { useQuery } from "react-query";

export function useGetAllActiveSensors() {
  const fetchFromApi = useFetchClient();
  return useQuery(
    ["allSensors"],
    () =>
      fetchFromApi.get({
        uri: `sensor`,
      }),
    {
      select: (data) => {
        return filterActiveSensors(data);
      },
      retry: false,
    }
  );
}
