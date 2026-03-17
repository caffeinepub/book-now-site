import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetMessage() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["message"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getMessage();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newMessage: string) => {
      if (!actor) throw new Error("Actor not available");
      await actor.setMessage(newMessage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["message"] });
    },
  });
}
