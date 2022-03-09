import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: serverRuntimeConfig.facebook_id,
      clientSecret: serverRuntimeConfig.facebook_secret,
    }),
  ],
});
