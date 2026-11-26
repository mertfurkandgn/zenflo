import WorkflowsList, { WorkFlowsContainer } from "@/components/workflows";
import { prefetchWorkflows } from "@/features/wokflows/server/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Workflows() {
  await requireAuth();
  prefetchWorkflows();

  return (
    <WorkFlowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error!</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkFlowsContainer>
  );
}
