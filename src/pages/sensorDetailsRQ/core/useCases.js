import { filterBySensorIdAndPm } from "./utils";
import { useFetchClient } from "../../../foundation/fetch/fetchClient";
import { useQuery } from "react-query";

export function useGetData24H(id) {
  const fetchFromApi = useFetchClient();
  return useQuery(
    ["data24h", id],
    () =>
      fetchFromApi.get({
        uri: `data24h`,
      }),
    {
      select: (data) => {
        return filterBySensorIdAndPm(data, id);
      },
      retry: false,
    }
  );
}
