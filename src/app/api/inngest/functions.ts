import { eventType } from "inngest";
import { z } from "zod";
import { inngest } from "@/inngest/client";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";
import { deepseek } from '@ai-sdk/deepseek';
import { openai } from '@ai-sdk/openai';

const google = createGoogleGenerativeAI();
const taskCreated = eventType("execute/ai", {
  schema: z.object({
    id: z.string(),
  }),
});

export const execute = inngest.createFunction(
  { id: "execute-ai", triggers: [taskCreated] },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");
    const { steps: googleSteps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-3.5-flash-lite"),
      system: "You are a helpful assistant",
      prompt: "what is the purpose of the life? Explain it by using 1 sentece",
    });
    
    const { steps: deepseekSteps } = await step.ai.wrap("deepseek-generate-text", generateText, {
      model: deepseek("deepseek-v4-flash"),
      system: "You are a helpful assistant",
      prompt: "what is the purpose of the life? Explain it by using 1 sentece",
    });
    const { steps: openaiSteps } = await step.ai.wrap("openai-generate-text", generateText, {
      model: openai("gpt-4o-mini"),
      system: "You are a helpful assistant",
      prompt: "what is the purpose of the life? Explain it by using 1 sentece",
    });
    const { steps: anthropicSteps } = await step.ai.wrap("anthropic-generate-text", generateText, {
      model: anthropic("claude-sonnet-5-5"),
      system: "You are a helpful assistant",
      prompt: "what is the purpose of the life? Explain it by using 1 sentece",
    });
    return {googleSteps,deepseekSteps,openaiSteps,anthropicSteps};
  },
);
