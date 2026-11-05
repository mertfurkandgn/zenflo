import { eventType } from "inngest";
import { z } from "zod";
import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";

const taskCreated = eventType("app/task.created", {
  schema: z.object({
    id: z.string(),
  }),
});

export const processTask = inngest.createFunction(
  { id: "process-task", triggers: [taskCreated] },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });
    //fetching the video
    await step.sleep("fetching", "5s");
    //transcribing the video
    await step.sleep("transcribing","5s");
    //sending transcption to AI
    await step.sleep("sending","5s");

    await step.run("create-workflow",()=>{
      return prisma.workflow.create({data:{
        name:"workflow-from-inngest"
      }})
    })



    return { message: `Task ${event.data.id} complete`, result };
  },
);
