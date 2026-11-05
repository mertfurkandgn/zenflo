import prisma from "@/lib/db";
import {  createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {

    return prisma.workflow.findMany();
  }),
  createWorkflows : protectedProcedure.mutation(async()=>{
    await inngest.send({
      name:"app/task.created",
      data:{id:"mfdzenith2"}
    });

    return {success:true,message:"job queded" }
   
  })
});

export type AppRouter = typeof appRouter;
