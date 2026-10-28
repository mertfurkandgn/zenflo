import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import Logout from "./logout";

export default async function Home() {
  await requireAuth();
  const data = await caller.getUser();

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
      <Logout />
    </>
  );
}
