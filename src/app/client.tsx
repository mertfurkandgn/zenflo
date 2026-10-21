"use client";
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '../trpc/client';
export const Client = () => {
    const trpc = useTRPC();
  const users = useQuery(trpc.getUser.queryOptions());

  return (
    <>
      <div className="text-red-500"> {JSON.stringify(users)} </div>
    </>
  );    
};
