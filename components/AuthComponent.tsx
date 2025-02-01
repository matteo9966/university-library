"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import {
  Controller,
  DefaultValues,
  FieldValues,
  useForm,
  Path,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants/fieldNames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthComponent<T extends FieldValues>({
  formDefaultValue,
  schema,
  title,
  onSubmit,
  footerSection,
}: {
  formDefaultValue: DefaultValues<T>;
  schema: ZodSchema;
  title: string;
  onSubmit: (data: AuthCredentials) => Promise<{ success: boolean }>;
  footerSection?: React.ReactNode;
}) {
  const router = useRouter();
  const [formSubmitError,setFormSubmitError]  = useState<string|null>(null);
  const methods = useForm({
    defaultValues: formDefaultValue,
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const formstate = methods.formState;

  const onSubmitFn = async (data: any) => {
    const result = await onSubmit(data);
    if (result.success) {
      //TODO : show success toast
      router.push("/sign-up/success");
    }else{
      setFormSubmitError("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="">
      <h1 className="text-white mb-9 library-title">{title}</h1>
      <form
        onSubmit={methods.handleSubmit(onSubmitFn)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-8">
          {Object.keys(formDefaultValue).map((fieldName) => {
            const { error } = methods.getFieldState(
              fieldName as Path<T>,
              formstate
            );
            return (
              <Controller
                key={fieldName}
                name={fieldName as Path<T>}
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
                      placeholder={
                        FIELD_NAMES[fieldName as keyof typeof FIELD_NAMES]
                      }
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
        {formstate.isSubmitting && <div className="text-lg text-white">Form is being submitted....</div>}
        {formSubmitError && <div className="text-lg text-destructive">{formSubmitError}</div>}
        {footerSection && (
          <div className="flex flex-col gap-4">{footerSection}</div>
        )}
        <Button
          disabled={!formstate.isValid || methods.formState.isSubmitting}
          variant={"outline"}
          size={"lg"}
          
          rounded={"full"}
          className={clsx({
            "cursor-not-allowed bg-slate-500/20": !formstate.isValid,
          })}
        >
          Submit
        </Button>
      </form>
      <div className="mt-2"></div>
    </div>
  );
}
