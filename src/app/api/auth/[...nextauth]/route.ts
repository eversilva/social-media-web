import NextAuth from "next-auth"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
    // ...add more providers here
  ],
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }