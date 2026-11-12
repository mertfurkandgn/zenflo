import { requireAuth } from "@/lib/auth-utils";

export default async function Workflows(){
    await requireAuth();
    return (<h1>WORKFLOWS</h1>)
}