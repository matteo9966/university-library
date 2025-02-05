import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import sql from "./lib/db";
import { get_user_by_email_query } from "./database/users";
import { User } from "./lib/models/User";
import { compare } from "bcryptjs";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<User | null> => {
        if (!credentials.email || !credentials.password) return null;
        const userDB = await sql(get_user_by_email_query, [credentials.email]);
        console.log("auth.ts/authorize", { userDB });
        const userData = userDB?.[0] as User;
        if (!userData) {
          const error = new CredentialsSignin();
          error.message = "Error, user not found";
          throw error;
        }

        const user: User = {
          email: userData.email,
          fullname: userData.fullname,
          password: userData.password,
        };

        const result = await compare(
          credentials!.password as string,
          user.password
        );
        if (result) return user;
        const error = new CredentialsSignin();
        error.message = "Error, wrong password";
        throw error;
        // return user;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)

        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
      },
      name: "Email and password",
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.image = "https://placehold.co/400x400";
        (<any>session.user).token = token;
      }
      return session;
    },
  },
});
