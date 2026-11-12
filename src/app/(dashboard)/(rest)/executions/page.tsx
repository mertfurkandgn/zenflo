import { requireAuth } from "@/lib/auth-utils";

export default async function Executions() {
  await requireAuth();
  return <h1>Executions</h1>;
}
