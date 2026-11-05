"use client";
import { useTRPC } from "@/trpc/client";
import Logout from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();

  
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkflows.mutationOptions({
      onSuccess: () => {
      toast.success("Job queued");
      },
    }),
  );

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
      <Button
        disabled={create.isPending}
        onClick={() => {
          create.mutate();
        }}
      >
        Create
      </Button>
      <Logout />
    </>
  );
}
