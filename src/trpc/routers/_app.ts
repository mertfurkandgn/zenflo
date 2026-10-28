import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  getUser: protectedProcedure.query(({ ctx }) => {
    const userId = ctx.auth.user.id;

    return prisma.user.findMany({
      where: {
        id: userId,
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
