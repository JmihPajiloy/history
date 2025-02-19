import NextAuth from "next-auth";
import VK from "next-auth/providers/vk";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      ...VK({ checks: [] }), // Fix: PKCE is unsupported for server-side authorization
      token: {
        url: "https://oauth.vk.com/access_token?v=5.131",
        conform: async (response: any) => {
          const data = await response.json();
          return new Response(
            // Fix: OperationProcessingError: "response" body "token_type" property must be a string
            JSON.stringify({
              token_type: "dpop",
              ...data
            }),
            // Fix: OperationProcessingError: "response" content-type must be application/json
            { headers: { "content-type": "application/json" }, status: response.status }
          );
        }
      }
    }
  ]
});