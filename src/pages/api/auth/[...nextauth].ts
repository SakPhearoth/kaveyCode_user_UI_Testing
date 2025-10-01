import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT!,
      clientSecret: "", // public client
      issuer: `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}`,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
