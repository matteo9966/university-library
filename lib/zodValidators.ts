import { z, ZodSchema } from "zod";
export const signupValidatorSchema:ZodSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Min length is 3 chars")
      .max(12, "Max length is 12 chars"),
    email: z.string().email("Should be valid email"),
    univeristyIDNumber: z.coerce.number(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(
    ({ password, confirmPassword }) => {
      if (password === confirmPassword) {
        return true;
      }
    },
    () => ({
      message: "the passwords dont coincide",
      path: ["confirmPassword"],
    })
  );


  export const signinValidatorSchema:ZodSchema = z.object({
    email: z.string().email("Should be valid email"),
    password: z.string().min(8),
  });