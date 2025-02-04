"use client";
import AuthComponent from "@/components/AuthComponent";
import { signInWithCredentials } from "@/lib/actions/auth";
import { signinDefaultValue } from "@/lib/defaultValues";
import { signinValidatorSchema } from "@/lib/zodValidators";

const Page = () => {
  return (
    <AuthComponent
      formDefaultValue={signinDefaultValue}
      schema={signinValidatorSchema}
      title="Sign In"
      onSubmit={async (data) => {
        console.log("sign-in/page.tsx", { data });
        return signInWithCredentials(data);
      }}
      authFormType="login"
    />
  );
};

export default Page;
