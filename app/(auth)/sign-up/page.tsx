"use client";
import AuthComponent from "@/components/AuthComponent";
import { signupDefaultValue } from "@/lib/defaultValues";
import { signupValidatorSchema } from "@/lib/zodValidators";
import { signUpAction } from "@/lib/actions/auth";

const Page = () => {
  return (
    <AuthComponent
      formDefaultValue={signupDefaultValue}
      schema={signupValidatorSchema}
      title="Sign up"
      authFormType="signup"
      onSubmit={async (data) => {
        return signUpAction(data);
      }}
    />
  );
};

export default Page;
