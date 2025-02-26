import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/loginApi";
export default function useLogin() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });

  return {
    userLogin: createMutation.mutate,
  };
}
