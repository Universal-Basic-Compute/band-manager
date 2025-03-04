import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Airtable from "airtable";
import bcrypt from "bcryptjs";

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

const usersTable = base('USERS');

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Find user in Airtable
          const records = await usersTable.select({
            filterByFormula: `{email} = '${credentials.email}'`
          }).firstPage();

          if (records.length === 0) {
            return null;
          }

          const user = records[0];
          const isValid = await bcrypt.compare(
            credentials.password,
            user.fields.password as string
          );

          if (!isValid) {
            return null;
          }

          return {
            id: user.id,
            name: user.fields.name as string,
            email: user.fields.email as string,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          // Check if user exists in Airtable
          const records = await usersTable.select({
            filterByFormula: `{email} = '${user.email}'`
          }).firstPage();

          if (records.length === 0) {
            // Create new user in Airtable
            await usersTable.create([
              {
                fields: {
                  name: user.name || "",
                  email: user.email || "",
                  provider: "google",
                  googleId: user.id,
                  createdAt: new Date().toISOString(),
                }
              }
            ]);
          }
        } catch (error) {
          console.error("Error saving Google user to Airtable:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
