import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRk } from "../api/rkApi";

export default function useRk() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newRk) => createRk(newRk),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rk"] });
    },
  });

  return {
    createEmployee: createMutation.mutate,
  };
}
