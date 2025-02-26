import { useQuery } from "@tanstack/react-query";
import { getRhk } from "../api/rhkApi";

export default function useRhk(params) {
  const {
    data: rhk = [],
    error,
    isError,
    isLoading,
    isPending,
    isFetched,
  } = useQuery({
    initialData: [],
    queryKey: ["rhk", params],
    queryFn: () => getRhk(params),
  });

  return {
    rhk,
    error,
    isError,
    isLoading,
    isPending,
    isFetched,
  };
}
