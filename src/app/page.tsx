

import { Button } from "@/components/ui/button";
import { Client } from "./client";
import { caller } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '../trpc/server';

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUser.queryOptions());


  return (
  <>
  <HydrationBoundary state={dehydrate(queryClient)}>

    <Client />
  </HydrationBoundary>
  <Button>
    hello again 
  </Button>
  

import prisma from "@/lib/db";

export default async function Home() {
  const data = await prisma.user.findMany();
  return (
  <><div className="text-red-500"> {JSON.stringify(data)} </div>

  </>
  );
}
