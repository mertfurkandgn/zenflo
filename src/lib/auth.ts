import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth"; 
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { polarClient } from "./polar";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    polar({ 
        client: polarClient, 
        createCustomerOnSignUp: true, 
        use: [ 
            checkout({ 
                products: [ 
                    { 
                        productId: "d43520a3-47d8-40bd-bf0f-f6da925038c9", // ID of Product from Polar Dashboard
                        slug: "pro" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                    } 
                ], 
                successUrl: process.env.POLAR_SUCCESS_URL, 
                authenticatedUsersOnly: true
            }), 
            portal(), 
        ], 
    }) 
]
});
