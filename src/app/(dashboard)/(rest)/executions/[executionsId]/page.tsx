import { requireAuth } from "@/lib/auth-utils";

interface Props {
  params: Promise<{ executionId: string }>;
}

export default async function ExecutionId({ params }: Props) {
  await requireAuth();
  const { executionId } = await params;
  return (
    <>
      <h1>executionId {executionId}</h1>
    </>
  );
}
