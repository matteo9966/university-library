"use client";
import { cn } from "@/app/lib/utils";
import { SlotExample } from "@/components/ui/form";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  DefaultValues,
  FieldValues,
  useForm,
  Path,
} from "react-hook-form";

import { z } from "zod";

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  confirmPassword: "Confirm password",
  password: "Password",
  univeristyIDNumber: "Upload University ID Card",
};
export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  confirmPassword: "password",
  password: "password",
  univeristyIDNumber: "text",
};

export const signUpSchema = z
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
    () => ({ message: "the passwords dont coincide", path: ["password"] })
  );

const formDefaultValue = {
  email: "",
  fullName: "",
  univeristyIDNumber: "",
  password: "",
  confirmPassword: "",
  // TODO: upload file ?
};

export default function Page() {
  const methods = useForm({
    defaultValues: formDefaultValue,
    resolver: zodResolver(signUpSchema),
  });
  const formstate = methods.formState;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="">
      <h1 className="text-white">Signin page</h1>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-8">
          {Object.keys(formDefaultValue).map((fieldName) => {
            const { error } = methods.getFieldState(
              fieldName as keyof typeof formDefaultValue,
              formstate
            );
            return (
              <Controller
                key={fieldName}
                name={fieldName as keyof typeof formDefaultValue}
                control={methods.control}
                render={({ field: { name, onBlur, onChange, ref, value } }) => (
                  <div>
                    <Label
                      className={cn("text-white pb-4 block", {
                        "text-destructive": error,
                      })}
                    >
                      {FIELD_NAMES[fieldName as keyof typeof FIELD_NAMES]}
                    </Label>
                    <Input
                      name={name}
                      onBlur={onBlur}
                      onChange={onChange}
                      ref={ref}
                      value={value}
                      type={FIELD_TYPES[fieldName as keyof typeof FIELD_TYPES]}
                      placeholder={FIELD_NAMES[fieldName as keyof typeof FIELD_NAMES]}
                      className={cn({ "bg-red-300": error })}
                    />
                    {error && (
                      <span className="text-destructive">{error.message}</span>
                    )}
                  </div>
                )}
              />
            );
          })}
        </div>

        <span className="text-white">
          Message error:
          {/* {methods.formState.errors.email?.message} */}
        </span>
        <span>{methods.formState.isValid && "Form is valid"}</span>
        <button type="submit" className="bg-green-200">
          Submit
        </button>
      </form>
    </div>
  );
}
