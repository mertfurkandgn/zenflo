"use client"
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Subscription(){
    const trpc = useTRPC();
    const testAI = useMutation(trpc.testAI.mutationOptions({
        onSuccess:()=>{
            toast.success("Success")
        },onError: (error) => {
            toast.error(error.message);
          }
    }))
    return(<>
    <Button onClick={()=>testAI.mutate()}>
        Click to test subscription
    </Button>
    </>)
}