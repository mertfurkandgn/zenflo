
import {  createTRPCRouter } from "../init";
import { workflowRouter } from "@/features/wokflows/server/routers";


export const appRouter = createTRPCRouter({
  workflows: workflowRouter
  })


export type AppRouter = typeof appRouter;
