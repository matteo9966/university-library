"use server";

import { get_user_count_by_email_query } from "@/database/users";
import sql from "../db";
import { hash } from "bcryptjs";
import { User } from "../models/User";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";

export const signUpAction = async (
  params: AuthCredentials
): Promise<{ success: boolean; message: string }> => {
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return {
      success: false,
      message: "Too many requests, please try again later.",
    };
  }
  const { email, fullName, password, univerisityIDNumber } = params;

  const result = await sql(get_user_count_by_email_query, [email]);
  console.log({ result_signup: result });
  if (result && result[0].count !== "0") {
    return {
      success: false,
      message: "Something went wrong maybe the email is already being used...",
    };
  }

  const hashPassword = await hash(password, 10);
  try {
    await sql`
    INSERT INTO users (email, fullname, password, univerisityidnumber)
    VALUES (${email},${fullName} , ${hashPassword}, ${univerisityIDNumber})
  `;
    return { success: true, message: "user successfully subscribed " };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "something went wrong: " + String(error),
    };
  }

  //workflow client ?
};

export const signInWithCredentials = async (
  params: Pick<User, "email" | "password">
): Promise<{ success: boolean; message: string }> => {
  const { email, password } = params;
  console.log("Headers:",[...(await headers()).entries()]
 );
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return {
      success: false,
      message: "Too many requests, please try again later.",
    };
  }
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("auth.ts/signinwithcredentails", { result });
    if (!result?.error) {
      return { success: true, message: "user successfully logged in" };
    } else {
      return { success: false, message: result.error };
    }
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { success: false, message: error.message };
    }
    console.log(error);
    return {
      success: false,
      message: "something went wrong: " + String(error),
    };
  }
};
