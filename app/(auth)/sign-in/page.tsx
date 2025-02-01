'use client'
import AuthComponent from "@/components/AuthComponent";
import { signinDefaultValue } from "@/lib/defaultValues";
import { signinValidatorSchema } from "@/lib/zodValidators";


const Page = ()=>{
    return (
        <AuthComponent
            formDefaultValue={signinDefaultValue}
            schema={signinValidatorSchema}
            title="Sign In"
            onSubmit={async (data)=>{
                console.log(data);
            }}
        />
    )
}

export default Page;