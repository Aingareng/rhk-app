import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createRk, getAllRk } from "../api/rkApi";

export default function useRk() {
  const queryClient = useQueryClient();

  const {
    data: rkData,
    error,
    isError,
    isPending,
    isLoading,
  } = useQuery({
    initialData: [],
    queryKey: ["rk"],
    queryFn: getAllRk,
  });

  const createMutation = useMutation({
    mutationFn: (newRk) => createRk(newRk),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rk"] });
    },
  });

  return {
    rkData,
    error,
    isError,
    isPending,
    isLoading,
    createRk: createMutation.mutate,
  };
}
