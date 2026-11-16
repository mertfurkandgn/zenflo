import { polarClient } from "@polar-sh/better-auth/client"; 

import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [polarClient()], 
});

export const { signIn, signUp, useSession } = createAuthClient();
