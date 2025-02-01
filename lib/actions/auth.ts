"use server";

import sql from "../db";
import { hash } from "bcryptjs";

export const signUpAction = async (
  params: AuthCredentials
): Promise<{ success: boolean }> => {
  const { email, fullName, password, univerisityIDNumber } = params;
  const hashPassword = hash(password, 10);
  try {
    const user = await sql`
    INSERT INTO users (email, fullname, password, univerisityidnumber)
    VALUES (${email},${fullName} , ${hashPassword}, ${univerisityIDNumber})
  `;
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }

  //workflow client ?
};
