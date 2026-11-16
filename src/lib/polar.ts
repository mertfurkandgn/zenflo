import { createPolar, createPolarCore } from "@polar-sh/sdk/2026-10";

const options = {
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  environment: "sandbox" as const,
};

export const polarClient = createPolarCore(options);
export const polar = createPolar(options);