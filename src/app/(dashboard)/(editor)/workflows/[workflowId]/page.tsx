import { requireAuth } from "@/lib/auth-utils";

interface Props {
  params: Promise<{ workflowId: string }>;
}

export default async function WorkflowId({ params }: Props) {
  await requireAuth();
  const { workflowId } = await params;
  return (
    <>
      <h1>workflowId {workflowId}</h1>
    </>
  );
}
